import React from "react";
import PhoneModel from "../PhoneDisplay/Phone";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./ChatCard.sass";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";

export default function ChatCard() {
  return (
    <div>
      <div className="ChatCard">
        <div className="RectangleBackground">
          <div className="Canvas">
            <PhoneDisplayStatic />
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
