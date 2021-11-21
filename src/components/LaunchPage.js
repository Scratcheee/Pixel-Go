import React from "react";
import "../scss/custom.scss";
import demoScreen from "../images/mainscreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faJsSquare,
  faBootstrap,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "reactstrap";

const LaunchPage = (props) => {
  return (
    <div className="container">
      <div className="mainBody">
        <img src={demoScreen} alt="demoImage" className="demoImage" />
        <div className="main">
          <div className="description">
            <h1>Pixel Go: A basic pixel art editor</h1>

            <p>
              Pixel Go is a simple pixel art editing program that allows you to
              choose a canvas size and then with point and click controls paint
              any picture you want and then export that image as a PNG file{" "}
            </p>

            <FontAwesomeIcon className="icon" icon={faReact} size="5x" />
            <FontAwesomeIcon className="icon" icon={faSass} size="5x" />
            <FontAwesomeIcon className="icon" icon={faJsSquare} size="5x" />
            <FontAwesomeIcon className="icon" icon={faBootstrap} size="5x" />
          </div>
          <div>
            {" "}
            <Button onClick={props.startEditor}>Go To Application</Button>
          </div>

          <div className="externalLinks">
            <div className="social">
              Check out the code at:
              <a a href="https://github.com/Scratcheee/Pixel-Go" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="icon"
                icon={faGithubSquare}
                size="5x"
              />
              </a>
            </div>
            <div className="social">
              Check out my linkedin at:
              <a href="https://www.linkedin.com/in/lawrence-kaul/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faLinkedin} size="5x" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
