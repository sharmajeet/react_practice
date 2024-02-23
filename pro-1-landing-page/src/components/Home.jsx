import React from "react";
import "../style/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechCraft </h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          TechCraft Solutions is a cutting-edge IT company that specializes in web and app development, crafting digital solutions that propel businesses to new heights. Our passion lies in transforming innovative ideas into powerful, user-friendly applications that seamlessly integrate with the ever-evolving digital landscape.<br/><br/>
          At TechCraft Solutions, we don't just build websites and apps; we sculpt digital experiences that propel your business into the future. Partner with us for innovative solutions that make a lasting impact. </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instragram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
