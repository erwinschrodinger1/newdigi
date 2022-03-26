import React, { useState } from "react";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";
import "./ChatInput.sass";
import { Link } from "react-router-dom";

export default function ChatInput() {
  const [page, setPage] = useState("whatsapp");
  return (
    <div className="ChatInput">
      <div className="InputSection">
        <div
          className="InputTypeSelector"
          onClick={() => {
            console.log(page);
            if (page == "whatsapp") {
              setPage("mannual");
            } else {
              setPage("whatsapp");
            }
          }}
        >
          <div className="Whatsapp">whatsapp</div>
          <div className="Manual">Manual</div>
        </div>
        <div
          className={
            `${page === "whatsapp" ? "hidden" : "active"}` + " inputcontent"
          }
        >
          <input type="textbox" placeholder="Sender's name" />
          <input type="textbox" placeholder="Reciever's name" />
          <label>
            <input type="file" />
            <span>Upload a file.</span>
          </label>
        </div>

        <div
          className={
            `${page === "mannual" ? "hidden" : "active"}` + " inputcontent"
          }
        >
          <input type=" textbox" placeholder="Enter you chat story here" />
          <div>
            <p>Write the message in following format that you can explore</p>
            <Link to="/"> Here ! </Link>
          </div>
        </div>
      </div>

      <div className="OutputSection">
        <PhoneDisplayStatic />
      </div>
    </div>
  );
}
