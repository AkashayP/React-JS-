import React from "react";
import "./HomePage.css";
import webVideo from "../assets/webVideo.mp4";
import Frame_35 from "../assets/Frame_35.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="upper-section">
        <button className="shrink-button1">
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/signup"
          >
            Become an Instructor{" "}
            <img className="arrow" src={arrow} alt="arrow" />
          </Link>
        </button>
        <h1>Empower Your Future with Coding Skills</h1>
        <p>
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>
      </div>

      <div className="button-group">
        <button className="shrink-button">
          <Link className="link" to="/signup">
            Learn More
          </Link>
        </button>
        <button className="shrink-button2">
          <Link className="link" style={{ textDecoration: "none" }} to="/">
            Book a Demo
          </Link>
        </button>
      </div>

      <div className="video-container">
        <video autoPlay loop width="100%" className="video-player">
          <source src={webVideo} type="video/mp4" />
        </video>
        {/* <img src={Frame_35}alt="bg_image" className="bg-image" /> */}
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default HomePage;
