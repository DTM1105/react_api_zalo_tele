import React, { Component } from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header-container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              DTM
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/send/">
                    Gửi tin nhắn <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/receive">
                    Danh sách tin nhắn phản hồi
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
}

export default Header;
