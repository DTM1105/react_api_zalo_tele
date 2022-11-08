import React, { Component } from "react";
import "./App.css";
import "./Zalo/List_User.scss";
import Tele from "./Tele/Tele";
import List_User from "./Zalo/List_User";

class Send_sms extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      user: [],
      app: "",
    };
  }

  handleSelected_app = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (value === "zalo") this.setState(value);
      if (value === "tele") this.setState(value);
    } else {
      this.setState("");
    }
    console.log(value);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title">Lựa chọn ứng dụng để gửi</h2>
          <div className="choice_app">
            <div className="zalo_app">
              <input
                type="radio"
                name="app-selected"
                value="zalo"
                onChange={() => this.handleSelected_app()}
                id="zalo-app"
              />
              <label for="zalo-app">Zalo</label>
            </div>
            <div className="tele_app">
              <input
                type="radio"
                name="app-selected"
                value="tele"
                onChange={() => this.handleSelected_app()}
                id="tele-app"
              />
              <label for="tele-app">Telegram</label>
            </div>
          </div>
          {this.state.app === "zalo" && <List_User />}
          {this.state.app  === "tele" && <Tele />}
        </div>
      </div>
    );
  }
}

export default Send_sms;
