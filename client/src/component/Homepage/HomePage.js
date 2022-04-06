import React from "react";
import "./HomePage.sass";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PhoneModel from "../PhoneDisplay/Phone";
import ChatCard from "../ChatCard/ChatCard";
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";
import axios from "axios";
export default function HomePage() {

  const history= useNavigate();
  const token=localStorage.getItem("jwt");


  const callDash = async () => {
    try {
      
    const url="/authenticate";
      axios.post(url,{
        token:token
      }).then(res=>{
        console.log(res);
        if (res.status !==200) {
          console.log("hello");
          history("/login");
          const error = new Error(res.error);
          throw error;
          
        }
      })
      } catch (error) {

      console.log("hello");
    }
  };

  useEffect(() => {
    callDash();
  }, []);

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
          <PhoneDisplayStatic />
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
