import React, { useEffect, Suspense, useRef, useState } from "react";
import Individualchat from "./Individualchat";
import PhoneModel from "./Phone";
import { Canvas } from "@react-three/fiber";
import "./PhoneDisplay.sass";
export default function PhoneDisplayStatic() {
  const chat = [
    {
      date: "09/12/2021, 9:27 pm",
      sender: "+977 981-6364854",
      text: " Hi Mate! What's Up?😀 ",
      reciever: "+977 981-6364854",
    },
    {
      date: "09/12/2021, 9:27 pm",
      sender: "Nirjal Bhurtel",
      text: " Thank You! All good😁 what about you was just chilling and having fun with Digi !",
    },
    {
      date: "09/12/2021, 9:28 pm",
      sender: "+977 981-6364854",
      text: "Yeah! The animations and digi chat is fun bro! I also enjoy reading it!",
      reciever: "+977 981-6364854",
    },
    {
      date: "09/12/2021, 9:29 pm",
      sender: "Nirjal Bhurtel",
      text: "Yeah mate! Reading books is not same as it used to! I started reading more",
    },
    {
      date: "09/12/2021, 9:29 pm",
      sender: "Nirjal Bhurtel",
      text: " Same here mate! Cheers! For Digi!",
    },
  ];
  let chatDraftedList = chat.map((chats, index) => {
    if (chats) {
      return (
        <Individualchat
          chat={chats.text}
          type={chats.sender === "Nirjal Bhurtel" ? "sender" : "reciever"}
        />
      );
    } else {
      console.log("error");
    }
  });
  return (
    <div className="PhoneDisplay">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <directionalLight
          intensity={0.3}
          position={[-5, 0, 10]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -3, -2]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Suspense fallback={null}>
          <PhoneModel
            scale={[2.5, 2.5, 2.5]}
            position={[0, 0, 0.8]}
            rotation={[Math.PI, 0, -Math.PI]}
          />
        </Suspense>
      </Canvas>
      <div className="screen">
        <div className="display">
          <div className="alldis">
            <div className="navbar">
              <p>9:45</p>
              <p>5G</p>
            </div>
            <div className="chatnepal">{chatDraftedList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
