/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/world/Level2World_zone1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'


export default function Level2WorldZone1(props) {
  const { nodes, materials } = useGLTF('/assets/models/world//Level2WorldZone1.glb')
  return (
    <RigidBody type='fixed' colliders={false}>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.barrier_group_6.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_2.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_3.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_4.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_5.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_1.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_1001.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_2001.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_3001.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_4001.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_5001.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_6001.geometry} material={materials.hept32} />
        <mesh geometry={nodes.barrier_group_7.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Trunk_1003.geometry} material={materials.hept32} />
        <mesh geometry={nodes.shrub.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Shurb_3012.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Shurb_3013.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Shurb_3014.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Trunk_3004.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Trunk_3008.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Trunk_3009.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Trunk_3010.geometry} material={materials.hept32} />
        <mesh geometry={nodes.tree.geometry} material={materials.hept32} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/world//Level2WorldZone1.glb')
