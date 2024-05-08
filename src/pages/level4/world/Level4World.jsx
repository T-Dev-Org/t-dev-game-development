/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\assets\models\world\Level4World.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level4World.glb')
  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders='trimesh'>
      <mesh geometry={nodes.Floor.geometry} material={materials.Material} />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/world/Level4World.glb')
