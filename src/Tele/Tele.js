import React from "react";
import { useState, useEffect } from "react";
import "../Zalo/List_User.scss";
import Mess_File from "./Mess_File";
const axios = require("axios");

function Tele() {
  const [list, setList] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/tele/getList")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setList(result);
      });
  }, []);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    console.log(e.target.checked)
    if (checked) {
      // push selected value in list
      setuser((prev) => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setuser((prev) => prev.filter((x) => x !== value));
    }
  };

  // const users_id = list.map((person) => <li key={person.id}>{person.user_id}</li>);
  const name = list.map((user) => (
    <li>
      <input
        type="checkbox"
        id={user.title}
        name="person"
        value={user.chat_id}
        onChange={handleChange}
      />{" "}
      <label for={user.title}>{user.title}</label>
    </li>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Danh sách group</h1>
          <div>
            <ul className="content">{name}</ul>
          </div>
          <div>Selected groups: {user.length ? user.join(", ") : null}</div>
        </div>
        <div className="col-6">
          <Mess_File dsach = {user}/>
        </div>
      </div>
    </div>
  );
}

export default Tele;
