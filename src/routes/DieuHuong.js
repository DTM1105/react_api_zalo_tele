import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import App1 from "../App1";
import Receive_sms from "../Receive_sms/Receive_sms";

class DieuHuongURL extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="send" element={<App1 />} />
          <Route path="receive" element={<Receive_sms />} />
        </Routes>
      </div>
    );
  }
}
export default DieuHuongURL;
