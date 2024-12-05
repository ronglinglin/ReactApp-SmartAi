import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Rongling Ai</h1>
        <h2>Superchange your creactivity and productivity</h2>
        <h3>There are no more rules or limits, just endless possibilities</h3>
        <Link to="/dashboard" className="getButton">
          Get Started
        </Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img className="bot" src="/bot.png" alt="" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="trems">
        <img className="logo" src="/logo.png" alt="" />
        <div className="spacail">
          <Link to="/">Terms of Service</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
