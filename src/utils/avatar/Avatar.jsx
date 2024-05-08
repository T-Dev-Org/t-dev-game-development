import { useEffect, useRef } from "react";
import { useAvatar } from "../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Avatar() {
    const avatarRef = useRef();
    const { avatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/catPoly/CatPoly.glb')

    const { actions } = useAnimations(animations, avatarRef)
    useEffect(() => {
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[avatar.animation])
                actions[avatar.animation].fadeOut(0.5);
        }

    }, [actions, avatar.animation]);

    return (
        <group ref={avatarRef} name="Scene" position-y={-0.65}>
            <group name="Cat" position={[0,0,0]}>
                <primitive object={nodes.spine} />
                <skinnedMesh name="Brazos" geometry={nodes.Brazos.geometry} material={materials['Material.002']} skeleton={nodes.Brazos.skeleton} />
                <group name="Cabeza">
                    <skinnedMesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.002']} skeleton={nodes.Cube005.skeleton} />
                    <skinnedMesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials['Material.003']} skeleton={nodes.Cube005_1.skeleton} />
                </group>
                <skinnedMesh name="Cola" geometry={nodes.Cola.geometry} material={materials['Material.002']} skeleton={nodes.Cola.skeleton} />
                <skinnedMesh name="Ojos" geometry={nodes.Ojos.geometry} material={materials['Material.001']} skeleton={nodes.Ojos.skeleton} />
                <skinnedMesh name="Patas" geometry={nodes.Patas.geometry} material={materials['Material.002']} skeleton={nodes.Patas.skeleton} />
                <skinnedMesh name="Tronco" geometry={nodes.Tronco.geometry} material={materials['Material.002']} skeleton={nodes.Tronco.skeleton} />
            </group>
        </group>
    )
}