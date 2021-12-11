import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import { nftMarketAddress, nftAddress } from '@/nftConfig'

import NFT from '@/artifacts/contracts/NFT.sol/NFT.json'
import Market from '@/artifacts/contracts/NFTMarket.sol/NFTMarket.json'

import NFTComp from '@/components/nft'

export default function BoughtNFTs(props: JSX.IntrinsicElements['group']) {
  // const [nfts, setNfts] = useState([])
  // const [loadingState, setLoadingState] = useState('not-loaded')

  // useEffect(() => {
  //   loadNFTs()
  // }, [])

  // async function loadNFTs() {
  //   const web3Modal = new Web3Modal()
  //   const connection = await web3Modal.connect()
  //   const provider = new ethers.providers.Web3Provider(connection)
  //   const signer = provider.getSigner()

  //   const marketContract = new ethers.Contract(
  //     nftMarketAddress,
  //     Market.abi,
  //     signer
  //   )
  //   const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
  //   const data = await marketContract.fetchMyNFTs()

  //   const items = await Promise.all(
  //     data.map(async (i) => {
  //       const tokenUri = await tokenContract.tokenURI(i.tokenId)
  //       const meta = await axios.get(tokenUri)
  //       let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
  //       let item = {
  //         price,
  //         tokenId: i.tokenId.toNumber(),
  //         seller: i.seller,
  //         owner: i.owner,
  //         image: meta.data.image,
  //       }
  //       return item
  //     })
  //   )

  //   console.log('bought items', items)

  //   setNfts(items)
  //   setLoadingState('loaded')
  // }

  // const nftPositions = [
  //   [80, -62, 270],
  //   [60, -62, 270],
  //   [40, -62, 270],
  //   [80, -62, 320],
  //   [60, -62, 320],
  //   [40, -62, 320],
  //   [80, -62, 220],
  //   [60, -62, 220],
  //   [40, -62, 220],
  // ]

  return (
    <group {...props} dispose={null}>
      {/* {loadingState === 'loaded' && nfts
        ? nfts.map((el, i) => {
            return (
              <NFTComp
                position={nftPositions[i]}
                key={i}
                {...el}
                onClick={() => {
                  console.log('clicked', el)
                }}
              />
            )
          })
        : null} */}

      <mesh position={[90, -62, 360]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[60, -62, 360]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[30, -62, 360]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      <mesh position={[90, -62, 340]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[60, -62, 340]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[30, -62, 340]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>


      
      <mesh position={[90, -62, 320]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[60, -62, 320]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[30, -62, 320]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      {/* <mesh position={[80, -62, 320]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[60, -62, 320]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[40, -62, 320]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[80, -62, 220]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[60, -62, 220]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
      <mesh position={[40, -62, 220]} scale={[6, 6, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh> */}
    </group>
  )
}

// useGLTF.preload('models/world/user/user_bottom_enter.glb')

// <mesh position={[80, -62, 270]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[60, -62, 270]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[40, -62, 270]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[80, -62, 320]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[60, -62, 320]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[40, -62, 320]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[80, -62, 220]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[60, -62, 220]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
//       <mesh position={[40, -62, 220]} scale={[6, 6, 6]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'hotpink'} />
//       </mesh>
