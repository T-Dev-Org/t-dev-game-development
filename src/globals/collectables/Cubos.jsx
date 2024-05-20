/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\assets\models\collectables\Cubos.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Cubos (props) {
  const { nodes, materials } = useGLTF('/assets/models/collectables/Cubos.glb')
  return (
    <group {...props} dispose={null}>
      <RigidBody type='dynamic' colliders='cuboid' friction={1}>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} />
      </RigidBody>
      <RigidBody type='dynamic' colliders='cuboid' friction={1}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
      </RigidBody>
      <RigidBody type='dynamic' colliders='cuboid' friction={1}>
        <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} />
      </RigidBody>
      <RigidBody type='dynamic' colliders='cuboid' friction={1}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.002']} />
      </RigidBody>

      <RigidBody type='dynamic' colliders='ball' friction={1}>
        <mesh geometry={nodes.Esfera.geometry} material={materials['Material.001']} />
      </RigidBody>
      <RigidBody type='dynamic' colliders='ball' friction={1}>
        <mesh geometry={nodes.Esfera001.geometry} material={materials['Material.001']} />
      </RigidBody>
      <RigidBody type='dynamic' colliders='ball' friction={1}>
        <mesh geometry={nodes.Esfera002.geometry} material={materials['Material.001']} />
      </RigidBody>

    </group>
  )
}

useGLTF.preload('/assets/models/collectables/Cubos.glb')