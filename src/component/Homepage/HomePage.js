import React from "react";
import "./HomePage.sass";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PhoneModel from "../PhoneDisplay/Phone";
import ChatCard from "../ChatCard/ChatCard";
import PhoneDisplayAnimation from "../PhoneDisplay/PhoneDisplayAnimation";
export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="Page1">
        <div className="Header">
          <h1>
            Digi
            <br />
            Papyrus
          </h1>
          <p>Think Opening Imagination as you turn the pages of book !</p>
        </div>
        <div className="Canvas">
          {/* <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
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
          </Canvas> */}
          <PhoneDisplayAnimation />
        </div>
      </div>
      <div className="Page2">
        <h1>Popular Digi-Chats</h1>
        <div className="Cards">
          {" "}
          {[1, 2, 3].map(() => (
            <ChatCard />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
