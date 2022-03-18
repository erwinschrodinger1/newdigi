import React from "react";
import PhoneModel from "../PhoneDisplay/Phone";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./ChatCard.sass";

export default function ChatCard() {
  return (
    <div>
      <div className="ChatCard">
        <div className="RectangleBackground">
          <div className="Canvas">
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
              <directionalLight
                intensity={0.4}
                position={[-1.2, 2, 1]}
                castShadow
              />
              <mesh
                rotation={[-0.3 * Math.PI, 0, 0]}
                position={[0, -0.3, -2.8]}
                receiveShadow
              >
                <planeBufferGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
              </mesh>
              <Suspense fallback={null}>
                <PhoneModel rotation={[0, Math.PI, 0]} scale={[2, 2, 2]} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="Content">
          <h1>Chat Title</h1>
          <p>Nice chat</p>
        </div>
      </div>
    </div>
  );
}
