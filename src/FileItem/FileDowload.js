import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./FileItem.css";

const FileDowload = ({ file, name }) => {
  console.log(file.data.length);
  var buf = file.data;
  console.log(buf);
  for(var i =0;i<file.data.length;i++){
    buf[i]=  i +97;
  }
  console.log(buf);
  function saveByteArray(reportName, byte) {
    var arrByte= new Uint8Array.from(byte)
    var blob = new Blob([arrByte], { type: "application/pdf" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  }
  return (
    <>
      <div className="file-item">
        {/* <FontAwesomeIcon icon={faFileAlt} ></FontAwesomeIcon> */}
        <p className="file-name">{name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              onClick={() => saveByteArray(name, file.data)}
            />
          )}
          {!file.isUploading && (
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => saveByteArray(name, file.data)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FileDowload;
