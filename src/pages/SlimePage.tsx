import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";

const SlimePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar
        navItems={["Description", "Technologies Used", "About", "Links"]}
      />
      <div id="Description" className="header">
        <div className="headerText">
          <h1>Slime</h1>
          <p>
            This is a short 3D platformer where you play as a slime trying to
            reach the star station in the sky. There are 4 different areas you
            traverse through as you make the climb, each with increasing
            difficulty. This project focused on having a new gaming experience
            each run by having the platforms randomly generated on each
            playthrough.
          </p>
        </div>
        <img className="headerImg" src="./SlimeGame.png" alt="" />
      </div>
      <div id="Technologies Used" className="techUsed">
        <h1>Technologies Used</h1>
        <div className="skills">
          <Skill ImageSrc="Godot_icon.png" SkillName="Godot" />
          <Skill ImageSrc="Godot_icon.png" SkillName="GDScript" />
        </div>
      </div>
      <div id="About" className="about right">
        <div className="aboutText">
          <h1>About This Project</h1>
          <p>
            This project was a class project in my Game Design at university.
            This class was given the task of building a 3D game from scratch but
            you were allowed to use any premade assests you could find. For this
            project we also had to include an element that was randomized that
            changed the experince for each play through.
          </p>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./SlimeGame.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1></h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1></h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./.png" alt="" />
        </div>
      </div>
      <div id="Links" className="links left">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a
            className="GithubBtn"
            href="https://github.com/Matthew-Andreas/Slime"
          >
            <img className="btnIcons" src="./share.png" alt="" />
            <p className="btnText">GitHub</p>
            <img className="btnIcons" src="./github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlimePage;
