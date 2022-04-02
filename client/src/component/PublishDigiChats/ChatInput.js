import React, { useState } from "react";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";
import "./ChatInput.sass";
import { Link } from "react-router-dom";
import preprocessorWhatsapp from "../../logic/preprocessor";
import axios from "axios";

export default function ChatInput() {
  const [page, setPage] = useState("whatsapp");
  const [sender, setSender] = useState("Sender");
  const [chat, setChat] =
    useState(`09/12/2021, 9:27 pm - Mannual message writing option to publsh the digi chat
  09/12/2021, 9:27 pm - Sender: First chat here
  09/12/2021, 9:27 pm - Reciever: Reply chat here
  `);
  async function sendData(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/publishChat", { sender, chat })
      .then(() => {
        alert("Chat sucessfully sent");
      });
  }
  return (
    <div className="ChatInput">
      <div className="InputSection">
        <div className="InputTypeSelector">
          <div
            className={page === "whatsapp" ? "boxactive" : "boxhidden"}
            onClick={() => {
              console.log(page);
              if (page === "whatsapp") {
                setPage("mannual");
              } else {
                setPage("whatsapp");
              }
            }}
          >
            What's App
          </div>
          <div
            className={page === "mannual" ? "boxactive" : "boxhidden"}
            onClick={() => {
              console.log(page);
              if (page === "whatsapp") {
                setPage("mannual");
              } else {
                setPage("whatsapp");
              }
            }}
          >
            Manual
          </div>
        </div>
        <div
          className={
            `${page === "mannual" ? "hidden" : "active"}` + ` inputcontent`
          }
        >
          <input
            className="textbox"
            type="textbox"
            placeholder="Sender's name"
            onChange={(e) => {
              setSender(e.target.value);
            }}
            defaultValue="Sender"
          />
          <label>Upload a file.</label>
          <input
            type="file"
            onChange={(event) => {
              const reader = new FileReader();
              reader.onload = async (e) => {
                const text = e.target.result;
                console.log(text);
                setChat(text);
              };
              reader.readAsText(event.target.files[0]);
            }}
          />

          <button onClick={sendData}>Submit</button>
        </div>

        <div
          className={
            `${page === "whatsapp" ? "hidden" : "active"}` + " inputcontent"
          }
        >
          <input
            className="textbox"
            type="textbox"
            placeholder="Sender's name"
            onChange={(e) => {
              setSender(e.target.value);
            }}
            defaultValue="Sender"
          />

          <textarea
            placeholder="Enter you chat story here"
            defaultValue="09/12/2021, 9:27 pm - Mannual message writing option to publsh the digi chat
09/12/2021, 9:27 pm - Sender: First chat here
09/12/2021, 9:27 pm - Reciever: Reply chat here
"
            onChange={(e) => {
              setChat(e.target.value);
            }}
          />
          <div className="docs">
            <p>
              Write the message in following format that you can explore.{" "}
              <Link to="/"> Here ! </Link>
            </p>

            <button onClick={sendData}>Submit</button>
          </div>
        </div>
      </div>

      <div className="OutputSection">
        <PhoneDisplayStatic chat={preprocessorWhatsapp(chat)} sender={sender} />
      </div>
    </div>
  );
}
