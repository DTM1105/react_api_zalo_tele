import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import  '../Tele/Mess_File.scss';
import FileList from '../FileList/FileList.js';
const axios = require("axios");


function Mess_File({ dsach }) {
  // const chat_id =-1001628397471;
  // const token ="5408308785:AAGHCjdj4VXn4XByM91cf-ElyB-61CWrL1M";
  //   const [file1,setfile1]=useState("");
  //   const [files, setFiles] = useState([]);
  
  //   async function clickSend(){
    //     let content = {text1,file1};
    //     let result = await fetch("http://localhost:8080/api/send-sms-tele",{
      //         method:"POST",
      //         body:JSON.stringify(content),
      //         headers:{"Content-Type":"application/json",
      //         "Accept":"application/json"}
      //     })
      //      result =await result.json();
      //      console.log(JSON.stringify(result));
      //   }
      //   async function clickSend1(){
        //     let content = {text1};
        //     const formData1 = new FormData();
        //     formData1.append(
          //         "newFile",
          //         files,
          //         files.name)
          //     console.log(formData1.get("newFile"));
          //     let result = await fetch("http://localhost:8080/api/send-sms-tele",{
            //         method:"POST",
            //         body:JSON.stringify(content),
            //         headers:{"Content-Type":"multipart/form-data",
            //         "Accept":"application/json"}
            //     })
            //      result =await result.json();
            //      console.log(JSON.stringify(result));
            //   }
            //   const handleSubmitFile = () => {
              //       const formData4 = new FormData();
              //       formData4.append("newFile1",files,files.name);
              
              //       axios.post('http://localhost:8080/api/send-sms-file',formData4,
              //             {
                //                 body : JSON.stringify(text1),
                //                 headers: {
                  //                     "Content-type": "multipart/form-data"
                  //                 },
                  //             }
                  //         )
                  //         .then(res => {
                    //             console.log(`Success` + res.data);
                    //         })
                    //         .catch(err => {
                      //             console.log(err);
                      //         })
                      // }
                      
                      
  const [text1,settext1]=useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const removeFile = (filename) => {
    setFile( file.name !== filename)
  }
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

    try {
      const res = await axios.post("http://localhost:8080/api/send-sms-file2", formData,{
                         headers: {
                             "Content-type": "multipart/form-data",
                             "Accept":"application/json"
                         },});
      console.log(formData.get("file"));
      console.log(file)
    } catch (ex) {
      console.log(ex);
    }
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
            onChange={(e) => settext1(e.target.value)}></input>
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
                <p className="info">PDF, DOC, JPG, PNG</p>
          </div>
          <FileList file={file} removeFile={removeFile} />
          <button className="btn btn-primary btn-send" onClick={uploadFile}>Send </button>
      </form>
    </div>
  );
}

export default Mess_File;
