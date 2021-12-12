/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { nftAddress, nftMarketAddress } from '@/nftConfig'
import NFT from '@/artifacts/contracts/NFT.sol/NFT.json'
import Market from '@/artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import axios from 'axios'
import NFTComp from '@/components/nft'
import useNFT from '@/store/huds/nft'
import useHUD from '@/store/huds/main'

type GLTFResult = GLTF & {
  nodes: {
    ['world_export-10_1']: THREE.Mesh
    ['world_export-10_2']: THREE.Mesh
  }
  materials: {
    ['world_export-10 #1']: THREE.MeshStandardMaterial
    ['world_export-10 #254']: THREE.MeshStandardMaterial
  }
}

export default function PublishedAssets(props: JSX.IntrinsicElements['group']) {
  const [nfts, setNfts] = useState([])
  const [sold, setSold] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    loadNFTs()
  }, [])

  async function loadNFTs() {
    const web3Modal = new Web3Modal()

    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(
      nftMarketAddress,
      Market.abi,
      signer
    )
    const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
    const data = await marketContract.fetchItemsCreated()

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)

        // console.log(tokenUri)
        const meta = await axios.get(tokenUri).catch((err) => {
          // console.log('get model axios err', err)
        })

        // console.log(meta)

        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta?.data?.image,
        }

        return item
      })
    )

    console.log(items, 'user bottom right')

    // filtering NFts with no image
    const filteredItems = items.filter((i) => i.image)
    console.log(filteredItems)

    /* create a filtered array of items that have been sold */
    const soldItems = filteredItems.filter((i) => i.sold)
    setSold(soldItems)
    setNfts(filteredItems)
    setLoadingState('loaded')
  }

  const nftPositions = [
    // [-100, -62, 270]
    // [-80, -62, 270]
    // [-60, -62, 270]
    // [-100, -62, 320]
    // [-80, -62, 320]
    // [-60, -62, 320]
    // [-100, -62, 220]
    // [-80, -62, 220]
    // [-60, -62, 220]
    [90, -62, 360],
    [60, -62, 360],
    [30, -62, 360],
    [90, -62, 340],
    [60, -62, 340],
    [30, -62, 340],
    [82, -60, 310],
    [42, -60, 310],
    [7, -60, 310],
  ]

  return (
    <group {...props} dispose={null}>
      {loadingState === 'loaded' && nfts
        ? nfts.map((el, i) => {
            return (
              <NFTComp
                position={nftPositions[i]}
                key={i}
                {...el}
                onClick={() => {
                  useNFT.getState().setNFTInfo(el)
                  useHUD.getState().setCurrentHud('nft')
                }}
              />
            )
          })
        : null}
    </group>
  )
}

// // useGLTF.preload('models/world/user/user_bottom_right.glb')
