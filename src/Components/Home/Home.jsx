import * as React from "react";
import "./home.css";
import video from "../../Assets/homeVideo.mp4";

function Home() {
  return (
    <section data-aos="fade-out" className="homeSection">
      <div className="layout"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>
      <div className="homeContent container">
        <div className="buttonDiv">
          <div className="textDiv">
            <button className="btn">
              <a href="#">Explore</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
