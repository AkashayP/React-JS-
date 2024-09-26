import React from 'react';
import './HomePage.css';
import VideoFrame from '../assets/VideoFrame.mp4';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
         <button className="shrink-button1"><Link style={{textDecoration:"none"}} to="/signup">Become an Instructor</Link></button>
      <h1>Empower Your Future with Coding Skills</h1>
      <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
      
     

      <div className="button-group">
        <button className="shrink-button"><Link style={{textDecoration:"none"}} to="/signup">Learn More</Link></button>
        <button className="shrink-button2"><Link style={{textDecoration:"none"}} to="/">Book a Demo</Link></button>
      </div>

      <div className="video-container">
        <video autoPlay width="100%" className="video-player">
          <source src={VideoFrame} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomePage;
