/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useBVH, useGLTF, useHelper } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Flex, Box } from '@react-three/flex'

import BuyNft from '@/components/chunks/buyNFTs'
import MyAssets from '@/components/chunks/myAssets'
import MyAccount from '@/components/chunks/myAccount'

import { useControls } from 'leva'

type GLTFResult = GLTF & {
  nodes: {
    ['voxel_map_level1-export-union_1']: THREE.Mesh
    ['voxel_map_level1-export-union_2']: THREE.Mesh
    ['voxel_map_level1-export-union_3']: THREE.Mesh
    ['voxel_map_level1-export-union_4']: THREE.Mesh
    ['voxel_map_level1-export-union_5']: THREE.Mesh
    ['voxel_map_level1-export-union_6']: THREE.Mesh
    ['voxel_map_level1-export-union_7']: THREE.Mesh
    ['voxel_map_level1-export-union_8']: THREE.Mesh
    ['voxel_map_level1-export-union_9']: THREE.Mesh
  }
  materials: {
    floor: THREE.MeshBasicMaterial
    ['box-base-grey']: THREE.MeshBasicMaterial
    ['box-base-orange']: THREE.MeshBasicMaterial
    ['carpet-grey']: THREE.MeshBasicMaterial
    wall: THREE.MeshBasicMaterial
    ['piller-base']: THREE.MeshBasicMaterial
    ['carpet-outline']: THREE.MeshBasicMaterial
    piller: THREE.MeshBasicMaterial
    box: THREE.MeshBasicMaterial
  }
}

const World = () => {
  return (
    <>
      {/*  <Flex flexDirection="row" justifyContent='center' alignItems='center'> */}
      {/* <Box centerAnchor> */}
      <BuyNft />
      {/* </Box> */}
      {/* <Box centerAnchor> */}
      <MyAssets />
      <MyAccount />
      {/* </Box> */}
      {/* </Flex> */}
    </>
  )
}

export default World

// // useGLTF.preload('/level1-com.glb')
