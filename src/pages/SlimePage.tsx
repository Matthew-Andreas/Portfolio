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
            changed the experince for each play through. This was to give the
            class new challanges of 3D game developement with an added
            requirement of randomization.
          </p>
          <p>
            For my groups game we decided we wanted to do a 3D platformer where
            you climb randomized platforms that bring you to space. However, we
            felt that just arriving at space would be a little underwhelming so
            we built a space station called the Star Station that is the goal to
            reach for the game. We decided to use a{" "}
            <a href="https://mcsteeg.itch.io/slime">slime</a> for our main
            character and mushroom men for our shop keepers along the way. As
            you climb up the platforms you can collect hearts for more health
            and gems to buy upgrades at the shops along the way. The more hearts
            you have and the faster you get to the top will determine your score
            and overall grade for your playthrough.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./Slime.gif" alt="" />
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
      <div id="Video Demo" className="VideoDemo right">
        <h1 className="Title">Video Demo</h1>
        <div className="video-wrapper">
          <p className="FillerText">Coming Soon</p>
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
