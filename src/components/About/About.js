import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import c1 from "../../img/bhaskar3.jpg";
import { LinkedIn } from "@mui/icons-material";
const About = () => {
  const visitInstagram = () => {
    window.location = "http://instagram.com/i__bhaskar.kumar";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              //   src={bhaskar3}
              src={c1}
              alt="Founder"
            />
            <Typography>Bhaskar Kumar Sinha</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @bhaskarkumarsinha. Only with the
              purpose of improving our skill
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>

            <a href="http://instagram.com/i__bhaskar.kumar" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/BhaskarKumarSinha">
              <GitHubIcon className="githubSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/in/bhaskar-kumar-sinha-a2ab1621b">
              <LinkedIn className="linkdinSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
