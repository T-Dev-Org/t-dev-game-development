import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Button from "../../utils/components/Button";

export default function Level1() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >
            <Canvas
                shadows={true}
            >
                <Perf position="top-left" />
                <Suspense fallback={null}>
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <World />
                        <Girl />
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            maxVelLimit={5}
                            jumpVel={4}
                            position={[0, 2, 0]}
                        >
                            <Avatar />
                        </Ecctrl>
                    </Physics>
                    <WelcomeText position={[0, 1, -2]} />
                </Suspense>
                <Controls />
            </Canvas>
            <Button to="/level2"/>
        </KeyboardControls>

    )
}
