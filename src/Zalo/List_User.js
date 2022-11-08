import React from "react";
import { useState, useEffect } from "react";
import "../Zalo/List_User.scss";
import Zalo_Send_sms from "./Zalo_Send_sms";

const axios = require("axios");

function List_User() {
  const [list, setList] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/zalo/get-all-user")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setList(result);
      });
  }, []);

  const handleChange = (e) => {
    const { value, checked } = e.target;
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
        id={user.display_name}
        name="person"
        value={user.user_id}
        onChange={handleChange}
      />{" "}
      <label for={user.display_name}>
        <img className="zalo-avatar" src={user.avatar} />
        {user.display_name}
      </label>
    </li>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Danh sách khách hàng</h1>
          <div>
            <ul className="content">{name}</ul>
          </div>
          <div>Selected users: {user.length ? user.join(", ") : null}</div>
        </div>
        <div className="col-6">
          <Zalo_Send_sms dsach={user} />
        </div>
      </div>
    </div>
  );
}

export default List_User;
