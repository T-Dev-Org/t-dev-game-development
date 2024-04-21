/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\assets\models\world\Level3World.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Level3World(props) {
  const { nodes, materials } = useGLTF('assets/models/world/Level3World.glb')
  return (
    <RigidBody type='fixed' colliders='trimesh'>
      <group {...props} dispose={null}>
        {/*<mesh geometry={nodes.Walls.geometry} material={nodes.Walls.material} position={[0, 5, 100]} scale={[20, 5, 100]} />*/}
        <mesh geometry={nodes.Maze_Walls.geometry} material={nodes.Maze_Walls.material} position={[-13.095, 0.194, -4.615]} />
        <mesh geometry={nodes.Floor.geometry} material={nodes.Floor.material} position={[-13.095, 0.194, -4.615]} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/Level3World.glb')
