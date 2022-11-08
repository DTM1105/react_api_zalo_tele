import React from "react";
import { BrowserRouter } from "react-router-dom";
import Receive_sms from "./Receive_sms/Receive_sms";
import Send_sms from "./Send_sms";
import Header from "./containers/Header/Header";
import DieuHuongURL from "./routes/DieuHuong";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <DieuHuongURL />
    </BrowserRouter>
  );
}

export default App;
