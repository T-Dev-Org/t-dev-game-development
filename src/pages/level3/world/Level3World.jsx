/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\assets\models\world\Level3World.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { RepeatWrapping } from "three";

export default function Level3World(props) {
  const { nodes, materials } = useGLTF('assets/models/world/Level3World.glb')
  const path = "/assets/textures/floors/dark_brick_wall_";

  const propsTexture = useTexture({
    map: path + "diff_1k.jpg",
    //normalMap : path + "nor_gl_1k.exr",
    //roughnessMap: path + "rough_1k.exr",
    displacementMap: path + "disp_1k.png"
  });

  propsTexture.map.repeat.set(8, 1);
  propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping

  //propsTexture.normalMap.repeat.set(4, 64);
  //propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping
  
  //propsTexture.roughnessMap.repeat.set(4, 64);
  //propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping
  
  propsTexture.displacementMap.repeat.set(8, 2);
  propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping     

  return (
    <group>
      {/*Estos son arboles falsos, donde hay escondidas cosas*/}
      <mesh geometry={nodes.Trees_Group_2.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>
      <mesh geometry={nodes.Trees_Group_4.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>
      <mesh geometry={nodes.Trees_Gruop_3.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>
      <mesh geometry={nodes.Trees_Gruop_5.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>
      <mesh geometry={nodes.Trees_Gruop_6.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>
      <mesh geometry={nodes.Trees_Group_7.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>
      <mesh geometry={nodes.Trees_Gruop_8.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}/>      
      <RigidBody type='fixed' colliders='trimesh'>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Maze_Inside_Walls.geometry} material={nodes.Maze_Inside_Walls} castShadow={true} recieveShadow={true}>
          <meshToonMaterial {...propsTexture} /> 
        </mesh>
        <mesh geometry={nodes.Floor.geometry} material={materials.Floor} castShadow={true} receiveShadow={true}>
        </mesh>
        <mesh geometry={nodes.Miniroom.geometry} material={nodes.Miniroom.material} castShadow={true} receiveShadow={true}>
          <meshToonMaterial {...propsTexture} /> 
        </mesh>
        <mesh geometry={nodes.Miniroom_Floor.geometry} material={materials.Floor} castShadow={true} receiveShadow={true}/>
        <mesh geometry={nodes.Maze__Outside_Walls.geometry} material={nodes.Maze__Outside_Walls.material} receiveShadow={true}>
          <meshToonMaterial {...propsTexture} /> 
        </mesh>
        <mesh geometry={nodes.Trunk.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}>
          
        </mesh>
        <mesh geometry={nodes.Trees_Group.geometry} material={materials.hept32} castShadow={true} receiveShadow={true}>
        
        </mesh>
        {/*Arboles reales*/}
        <mesh geometry={nodes.Trees_Group_9.geometry} material={materials.hept32} receiveShadow={true}/>
        <mesh geometry={nodes.Trees_Group_10.geometry} material={materials.hept32} receiveShadow={true} />
        <mesh geometry={nodes.Trees_Group_11.geometry} material={materials.hept32} receiveShadow={true}/>
        <mesh geometry={nodes.Trees_Group_12.geometry} material={materials.hept32} receiveShadow={true}/>
        <mesh geometry={nodes.Trees_Group_13.geometry} material={materials.hept32} receiveShadow={true}/>     
        <mesh geometry={nodes.Trees_Group_14.geometry} material={materials.hept32} receiveShadow={true}/>     
        <mesh geometry={nodes.Trees_Group_15.geometry} material={materials.hept32} receiveShadow={true}/>     
      </group>
    </RigidBody>      
    </group>

  )
}

useGLTF.preload('/Level3World.glb')