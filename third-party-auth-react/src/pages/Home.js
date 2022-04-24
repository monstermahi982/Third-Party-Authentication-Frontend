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
    <>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style={{ maxHeight: '84.7vh' }}>
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="/Security1.jpg" class="d-block w-100" alt="..." style={{ backgroundSize: 'cover' }} />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src="/security2.png" class="d-block w-100" alt="..." style={{ backgroundSize: 'cover' }} />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src="/sec5.jpg" class="d-block w-100" alt="..." style={{ backgroundSize: 'cover' }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
