/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\assets\models\world\Level4World.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { RepeatWrapping } from 'three';
import { RigidBody } from '@react-three/rapier';

export function WorldLevel4(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level4World.glb')
  const PATH = "/assets/textures/pbr/coast_sand_rocks_02/";

  const propsTexture = useTexture({
    map: PATH + "coast_sand_rocks_02_diff_2k.jpg",
    normalMap: PATH + "coast_sand_rocks_02_nor_gl_2k.jpg",
    roughnessMap: PATH + "coast_sand_rocks_02_rough_2k.jpg",
    displacementMap: PATH + "coast_sand_rocks_02_disp_2k.jpg",
  });
  propsTexture.map.repeat.set(4, 64);
  propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;
  propsTexture.normalMap.repeat.set(4, 64);
  propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;
  propsTexture.roughnessMap.repeat.set(4, 64);
  propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;
  propsTexture.displacementMap.repeat.set(4, 64);
  propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;

  const PATH_TEMPLE = "/assets/textures/pbr/medieval_wall/";
  const propsTextureTemple = useTexture({
    map: PATH_TEMPLE + "medieval_wall_02_diff_1k.jpg",
    normalMap: PATH_TEMPLE + "medieval_wall_02_nor_gl_1k.jpg",
    roughnessMap: PATH_TEMPLE + "medieval_wall_02_rough_1k.jpg",
    displacementMap: PATH_TEMPLE + "medieval_wall_02_disp_1k.png",
  });
  propsTextureTemple.map.repeat.set(4, 64);
  propsTextureTemple.map.wrapS = propsTextureTemple.map.wrapT = RepeatWrapping;
  propsTextureTemple.normalMap.repeat.set(4, 64);
  propsTextureTemple.normalMap.wrapS = propsTextureTemple.normalMap.wrapT = RepeatWrapping;
  propsTextureTemple.roughnessMap.repeat.set(4, 64);
  propsTextureTemple.roughnessMap.wrapS = propsTextureTemple.roughnessMap.wrapT = RepeatWrapping;
  propsTextureTemple.displacementMap.repeat.set(4, 64);
  propsTextureTemple.displacementMap.wrapS = propsTextureTemple.displacementMap.wrapT = RepeatWrapping;

  const PATH_WALLS = "/assets/textures/pbr/painted_plaster_wall/";
  const propsTextureWalls = useTexture({
    map: PATH_WALLS + "painted_plaster_wall_diff_1k.jpg",
    normalMap: PATH_WALLS + "painted_plaster_wall_nor_gl_1k.jpg",
    roughnessMap: PATH_WALLS + "painted_plaster_wall_rough_1k.jpg",
    displacementMap: PATH_WALLS + "painted_plaster_wall_disp_1k.png",
  });
  propsTextureWalls.map.repeat.set(4, 64);
  propsTextureWalls.map.wrapS = propsTextureWalls.map.wrapT = RepeatWrapping;
  propsTextureWalls.normalMap.repeat.set(4, 64);
  propsTextureWalls.normalMap.wrapS = propsTextureWalls.normalMap.wrapT = RepeatWrapping;
  propsTextureWalls.roughnessMap.repeat.set(4, 64);
  propsTextureWalls.roughnessMap.wrapS = propsTextureWalls.roughnessMap.wrapT = RepeatWrapping;
  propsTextureWalls.displacementMap.repeat.set(4, 64);
  propsTextureWalls.displacementMap.wrapS = propsTextureWalls.displacementMap.wrapT = RepeatWrapping;


  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.Walls.geometry} material={materials.Material}>
          <meshStandardMaterial {...propsTextureWalls}/>
        </mesh>
      </RigidBody>
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.Floor.geometry} material={materials.Material} >
          <meshStandardMaterial {...propsTexture} />
        </mesh>
      </RigidBody>
      <RigidBody type='fixed' colliders='trimesh'>
      <mesh geometry={nodes.Temple.geometry} material={materials.mat21} >
        <meshStandardMaterial {...propsTextureTemple}/>
      </mesh>
      <mesh geometry={nodes.Lamp1_1.geometry} material={materials['lambert4SG.001']} />
      <mesh geometry={nodes.Lamp1_2.geometry} material={materials['lambert2SG.001']} />
      <mesh geometry={nodes.Lamp1_3.geometry} material={materials['lambert3SG.001']} />
      <mesh geometry={nodes.Lamp2_1.geometry} material={materials['lambert4SG.002']} />
      <mesh geometry={nodes.Lamp2_2.geometry} material={materials['lambert2SG.002']} />
      <mesh geometry={nodes.Lamp2_3.geometry} material={materials['lambert3SG.002']} />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/world/Level4World.glb')