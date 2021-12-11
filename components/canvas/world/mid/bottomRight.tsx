/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['world_export-14_1']: THREE.Mesh
    ['world_export-14_2']: THREE.Mesh
    ['world_export-14_3']: THREE.Mesh
  }
  materials: {
    ['world_export-14 #1']: THREE.MeshStandardMaterial
    ['world_export-14 #246']: THREE.MeshStandardMaterial
    ['world_export-14 #254']: THREE.MeshStandardMaterial
  }
}

export default function MidBottomRight(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/world/mid/mid_bottom_right.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} name="palace-bottom-right">
      <group position={[58, 0, -66]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['world_export-14_1'].geometry} material={materials['world_export-14 #1']} />
        <mesh geometry={nodes['world_export-14_2'].geometry} material={materials['world_export-14 #246']} />
        <mesh geometry={nodes['world_export-14_3'].geometry} material={materials['world_export-14 #254']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/world/mid/mid_bottom_right.glb')
