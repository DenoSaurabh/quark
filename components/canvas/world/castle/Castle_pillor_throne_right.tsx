/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['more_nfts_voxel-1']: THREE.Mesh
    ['more_nfts_voxel-1_1']: THREE.Mesh
  }
  materials: {
    ['more_nfts_voxel-1 #249']: THREE.MeshBasicMaterial
    ['more_nfts_voxel-1 #242']: THREE.MeshBasicMaterial
  }
}

export default function CastlePillorThroneRight(
  props: JSX.IntrinsicElements['group']
) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/castle/throne-right.glb'
  ) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} name="throne-right">
      <group position={[-722, 0, -267]}>
        {' '}
        {/* -67.05 */}
        <mesh
          geometry={nodes['more_nfts_voxel-1'].geometry}
          material={materials['more_nfts_voxel-1 #249']}
        />
        <mesh
          geometry={nodes['more_nfts_voxel-1_1'].geometry}
          material={materials['more_nfts_voxel-1 #242']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/world/castle/throne-right.glb')
