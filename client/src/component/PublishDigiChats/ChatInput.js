import React, { useState } from "react";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";
import "./ChatInput.sass";
import { Link } from "react-router-dom";
import preprocessorWhatsapp from "../../logic/preprocessor";

export default function ChatInput() {
  const [page, setPage] = useState("whatsapp");
  const [sender, setSender] = useState("");
  const [reciever, setReciever] = useState("");
  const [chat, setChat] = useState("");
  return (
    <div className="ChatInput">
      <div className="InputSection">
        <div className="InputTypeSelector">
          <div
            className={page === "whatsapp" ? "boxactive" : "boxhidden"}
            onClick={() => {
              console.log(page);
              if (page == "whatsapp") {
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
              if (page == "whatsapp") {
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
            `${page === "mannual" ? "hidden" : "active"}` + " inputcontent"
          }
        >
          <input
            className="textbox"
            type="textbox"
            placeholder="Sender's name"
          />
          <input
            className="textbox"
            type="textbox"
            placeholder="Reciever's name"
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

          <button>Submit</button>
        </div>

        <div
          className={
            `${page === "whatsapp" ? "hidden" : "active"}` + " inputcontent"
          }
        >
          <textarea placeholder="Enter you chat story here" />
          <div className="docs">
            <p>
              Write the message in following format that you can explore.{" "}
              <Link to="/"> Here ! </Link>
            </p>

            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className="OutputSection">
        <PhoneDisplayStatic chat={preprocessorWhatsapp(chat)} />
      </div>
    </div>
  );
}
