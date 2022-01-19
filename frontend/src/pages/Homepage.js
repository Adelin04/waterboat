import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import TextBlock from "../components/TextBlock";
import "./Homepage.css";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const logo1 = <FontAwesomeIcon icon={faShip} className="textBlock-logo" />;
const logo2 = (
  <FontAwesomeIcon icon={faGlobeEurope} className="textBlock-logo" />
);
const logo3 = <FontAwesomeIcon icon={faUser} className="textBlock-logo" />;

function Homepage() {
  let dataBlocks = [
    {
      icon: logo1,
      title: "Luxury Yacht",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: logo2,
      title: "30 Years of Experince",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: logo3,
      title: "Good Captain",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="homepage">
      <Header />
      <Carousel />

      <div className="data-block">
        {dataBlocks.map(function (dataBlock, index) {
          return (
            <TextBlock
              key={index}
              icon={dataBlock.icon}
              title={dataBlock.title}
              description={dataBlock.description}
            />
          );
        })}
      </div>

      <div className="img-overlay">
        <img className="img-boat4" src="./images/boat4.jpg" alt="boat4" />
        <div className="text-overlay">
          <span>Book a Yacht</span>
          <span>Book your vacation</span>
          <Link to="/Addbooking">
            <button className="img-overlay button">BOOK NOW</button>
          </Link>
        </div>
      </div>

        <Footer />
    </div>
  );
}

export default Homepage;
