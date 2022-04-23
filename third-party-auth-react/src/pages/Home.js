import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import impimage from "../img/main_wall_3.png";
import otherone from "../img/main_wall_2.jpg";
import "../App.css";
import addNotification from 'react-push-notification';
export default function Home() {

  const buttonClick = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'Welcome to Monster World',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
    });
  };

  // setInterval(buttonClick, 100000);

  return (
    <div>
      <button onClick={() => buttonClick()}>MOnster push notification</button>
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img
              className="d-block h-100 w-100"
              src={impimage}
              alt="First slide"
            />
            <Carousel.Caption style={{ textAlign: "center", top: "25%" }}>
              <h1>Security is the main lock for your digital data</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100 w-100"
            src={otherone}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div
        class="raw text-center"
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 35,
        }}
      >
        <h1>{"Built with Security & Comfort."}</h1>
        <hr />
        <p class="lead">Welcome to Third Party Authentication website</p>
      </div>
    </div>
  );
}
