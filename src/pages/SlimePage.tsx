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
            For my group's game, we decided we wanted to do a 3D platformer
            where you climb randomized platforms that bring you to space.
            However, we felt that just arriving at space would be a little
            underwhelming, so we built a space station called the Star Station,
            which is the goal to reach in the game. We decided to use a{" "}
            <a href="https://mcsteeg.itch.io/slime">slime</a> for our main
            character and mushroom men for our merchants along the way. As you
            climb up the platforms, you can collect hearts for more health and
            gems to buy upgrades at the shops along the way. The more hearts you
            have and the faster you get to the top will determine your score and
            overall grade for your playthrough.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./Slime.gif" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Merchants</h1>
          <p>
            This is one of the 3 merchants we have at the middle checkpoints on
            the map. Each merchant sells one permanent upgrade as well as two
            30-second long upgrades that help the player speed up their ascent
            time or take less fall damage.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./slimeMerchant.png" alt="" />
        </div>
      </div>
      <div className="about">
        <div className="aboutText">
          <h1>Gems and Hearts</h1>
          <p>
            These are the Gems and hearts you can collect throughout the game.
            The Hearts increase your health when they are collected by 1, and
            the gems increase your money by 1 when each one is collected. Both
            of these items matter greatly in your final score to get as high of
            grade as you can for the run.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./SlimeGems.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Checkpoints</h1>
          <p>
            This is a checkpoint where the player can respawn if they die or if
            they press R. If the checkpoint is red the player has not touched it
            yet but when it is green the player has touched it and can respawn
            there in death or at anytime by pressing R. There are 4 checkpoints
            throughout the map, one at each resting area. If a player has not
            touched a checkpoint and dies, they will respawn at the bottom of
            the level.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./SlimeCP1.png" alt="" />
          <img className="aboutImg" src="./SlimeCP2.png" alt="" />
        </div>
      </div>
      <div className="about">
        <div className="aboutText">
          <h1>Star Station</h1>
          <p>
            This is the star station, which is the end of your climb in the
            game. This is where you will also meet Swirl the slime, which is the
            big slime ready to congratulate you on your journey and move you to
            the end game screen, where you can get your score.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./SlimeSS.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>End Game Screen</h1>
          <p>
            This is the end screen where you are given a score based on how much
            health you have obtained, the time it took you to get to the top,
            and the amount of gems you have at the end of the game.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./SlimeES.png" alt="" />
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
