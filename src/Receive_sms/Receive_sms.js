import React, { Component } from "react";
import "./Receive_sms.css";
import FileItem from "../FileItem/FileItem";
import FileDowload from "../FileItem/FileDowload";

class Receive_sms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      file:'',
    };
  }
  handlegetListMess = () => {
    fetch("http://localhost:8080/api/tele/getMess")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          list: result,
        });
      });
  };
  async componentDidMount() {
    await this.handlegetListMess();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let arrSMS = this.state.list;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <h3>Danh sách các tin nhắn phản hồi từ khách hàng</h3>
              <ul className="content">
                {arrSMS &&
                  arrSMS.map((chat) => (
                    <li
                      style={{
                        backgroundColor: "#cccc",
                        margin: "10px",
                        color: "blue",
                      }}
                    >
                      <div class="card">
                        <div class="card-header">{chat.title}</div>
                        <div class="card-body">
                          <blockquote class="blockquote mb-0">
                            <p>{chat.message}</p>
                            <FileDowload file={chat.document} name ={chat.filename}/>
                            <footer class="blockquote-footer">
                              {chat.date}
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Receive_sms;
