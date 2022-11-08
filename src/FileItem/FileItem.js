import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./FileItem.css";

const FileItem = ({ file, deleteFile }) => {
  console.log(file)
  return (
    <>
      {/* <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                <p>{file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && 
                    <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faTrash}
                            onClick={() => deleteFile(file.name)} />
                    }
                </div>
            </li> */}
      <div className="file-item">
        {/* <FontAwesomeIcon icon={faFileAlt} ></FontAwesomeIcon> */}
        <p className="file-name">{file.name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && (
            <FontAwesomeIcon 
              icon={faSpinner}
              className="fa-spin"
              onClick={() => deleteFile(file.name)}   
            />
          )}
          {!file.isUploading && (
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteFile(file.name)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FileItem;
