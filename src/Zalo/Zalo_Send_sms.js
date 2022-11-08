import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../Zalo/Zalo_Send_sms.scss";
import FileList from "../FileList/FileList.js"
const axios = require("axios");

const Zalo_Send_sms = ({ dsach }) => {
  const [text1, settext1] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const removeFile = (filename) => {
    setFile(file.name !== filename);
  };
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("text1", text1);
    formData.append("dsach", dsach);
        const res = await axios.post(
          "http://localhost:8080/api/zalo/upload-file",
          formData,
          {
            headers: {
              "Content-type": "multipart/form-data",
              Accept: "application/json",
            },
          }
        );
  };

  return (
    <div className="App">
      <form action="/" method="POST">
        <div className="form-group">
          <label for="text1">Tin nhắn gửi khách hàng</label>
          <input
            type="text"
            className="form-control"
            name="text1"
            placeholder="Mời nhập"
            onChange={(e) => settext1(e.target.value)}
          ></input>
        </div>
        <div className="file-card">
          <div className="file-inputs">
            <input type="file" onChange={saveFile} />
            <button>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Upload
            </button>
          </div>
          <p className="main">Supported files</p>
          <p className="info">PDF, JPG, PNG</p>
        </div>
        <FileList file={file} removeFile={removeFile} />
        <button className="btn btn-primary btn-send" onClick={uploadFile}>
          Send{" "}
        </button>
      </form>
    </div>
  );
}

export default Zalo_Send_sms;
