/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { Suspense, useEffect, useRef } from 'react'

import CastleBase from '@/components/canvas/world/castleBase'
import MidTopLeft from '@/components/canvas/world/mid/topLeft'
import MidTopRight from '@/components/canvas/world/mid/topRight'
import MidBottomRight from '@/components/canvas/world/mid/bottomRight'
import MidBottomLeft from '@/components/canvas/world/mid/bottomLeft'

import UserBottomLeft from '@/components/canvas/world/user/User_bottom_left'
import UserBottomRight from '@/components/canvas/world/user/User_bottom_right'
import UserTopLeft from '@/components/canvas/world/user/User_top_left'
import UserTopRight from '@/components/canvas/world/user/User_top_right'
import UserUpload from '@/components/canvas/world/user/User_upload'

import CastleEnterLeft from '@/components/canvas/world/castle/Castle_enter_left'
import CastleEnterRight from '@/components/canvas/world/castle/Castle_enter_right'
import CastlePillorBottomLeft from '@/components/canvas/world/castle/Castle_pillor_bottom_left'
import CastlePillorBottomRight from '@/components/canvas/world/castle/Castle_pillor_bottom_right'
import CastlePillorThroneLeft from '@/components/canvas/world/castle/Castle_pillor_throne_left'
import CastlePillorThroneRight from '@/components/canvas/world/castle/Castle_pillor_throne_right'
import CastlePillorTopLeft from '@/components/canvas/world/castle/Castle_pillor_top_left'
import CastlePillorTopRight from '@/components/canvas/world/castle/Castle_pillor_top_right'
import CastleNFTs from '@/components/canvas/world/castle/castleNFts'
import BoughtNFTs from './world/user/boughtNFTs'
import PublishedAssets from './world/user/publishedAssets'
import BillBoard from '../billboard'

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()

  useEffect(() => {
    console.log('world rerender!')
  }, [])

  return (
    <Suspense
      fallback={<BillBoard position={[0, 0, 0]}>loading....</BillBoard>}
    >
      <group ref={group} {...props} dispose={null}>
        <group name='world'>
          <CastleBase />

          <MidTopLeft />
          <MidTopRight />
          <MidBottomLeft />
          <MidBottomRight />

          <UserBottomLeft />
          <UserBottomRight />
          <UserTopLeft />
          <UserTopRight />
          <UserUpload />

          <CastleEnterLeft />
          <CastleEnterRight />
          <CastlePillorBottomLeft />
          <CastlePillorBottomRight />
          <CastlePillorThroneLeft />
          <CastlePillorThroneRight />
          <CastlePillorTopLeft />
          <CastlePillorTopRight />
        </group>

        <BoughtNFTs />
        <CastleNFTs />
        <PublishedAssets />
      </group>
    </Suspense>
  )
}

// // useGLTF.preload('models/world.glb')
