import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const HomePageInner = () => {
  return (
    <>
      <div className="banner">
        <img
          className="banner-img"
          src={require("../assets/abadbe673678ea6857c0a405ac4140d0.jpeg")}
          alt=""
        />
        <div class="centered">
          <TypeAnimation
            sequence={[
              "", // Types 'One'
              1000, // Waits 1s
              "VAL", // Types 'One'
              1000, // Waits 1s
              "VALOR", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "VALORANT", // Types 'Three' without deleting 'Two'
              5000, // Waits 2s
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "8rem" }}
            speed={200}
          />
        </div>
      </div>

      <div class="section">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>01</h2>
              <h3>Agents</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <Link to="/agents">Read More</Link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>02</h2>
              <h3>Maps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <Link to="/maps">Read More</Link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>03</h2>
              <h3>Weapons</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <Link to="/weapons">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageInner;
