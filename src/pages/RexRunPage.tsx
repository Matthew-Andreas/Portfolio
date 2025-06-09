import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";

const RexRunPage = () => {
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
          <h1>Rex Run</h1>
          <p>
            This project was a short 2D game where you play as a dinosaur trying
            to escape an island with an active volcano before it erupts. This
            was my first experience bringing a game to completion, which was an
            amazing sight to see. For this project, we focus on getting a
            complete game and making it look like a real game.
          </p>
        </div>
        <img className="headerImg" src="./RexRunGame.png" alt="" />
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
            This project was a class project in my Game Design class at
            university. This class was given the task of building a 2D game from
            scratch but you were allowed to use any premade assests you could
            find. We scoured itch.io for different characters to base our game
            on and then we found the{" "}
            <a href="https://arks.itch.io/dino-characters">Dino Character</a>{" "}
            pack which you can see on the left with 4 dinosaurs each with their
            own sets of animations. This was an awesome find and we had decided
            to make a 2D platformer with these characters.
          </p>
          <p>
            This was the beginning of the game called Rex Run where you play as
            a dinosaur living on a small island with an active volcano that is
            about to erupt. You race to finish quests and contracts to get
            enough money to buy a boat and escape the island before the volcano
            erupts. This is a 5 level 2D platformer where you can collect money
            and quest items to buy upgrades with NPCs all in effort to get off
            the island.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./test.gif" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Main Hub</h1>
          <p>
            This is the main hub where you can talk to all the NPCs, choose
            which level you would like to play, and at the end sail away from
            the island. There are 3 NPCs in this area which are the chef, the
            shopkeeper, and the Dock Worker. Each of these NPCs has a quest for
            the player to complete and once their quest is completed the player
            unlocks the upgrades the NPC sells.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRHub.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Chef</h1>
          <p>
            This is the Chef and his quest is to find him 4 mushrooms for his
            signature mushroom and chicken dish. Once you go through the levels
            and find his four mushrooms he will then allow you to buy some of
            his dish which will increase your health by 10 with each purchase.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRChef.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Shopkeeper</h1>
          <p>
            This is the Shopkeeper and his quest is to find him 5 balloons for
            his son's birthday party. Once you find all the balloons the
            shopkeeper will let you buy two upgrades from him. The first is an
            upgrade for tougher skin which will reduce the damage a player takes
            when being hit by half. The second upgrade is a coin multiplier
            which doubles the amount each coin is worth each time you buy it.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRShopKeeper.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Dock Worker</h1>
          <p>
            This is the Dock Worker and his quest is to find 6 fish for his
            stew. Once you find all 6 fish the dock worker will let you to buy
            the boat that will allow you to escape from the island and complete
            the game.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRDockWorker.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Level 1</h1>
          <p>
            This is the first level the player can play and it is designed to be
            nice and simple to let the player get a handle on the jumping,
            avoiding obstacles, collecting coins, and collecting quest items.
            This level contains 3 of the mushrooms for the chef's quest.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRLevel1.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Level 2</h1>
          <p>
            This is the second level and for this level we decided to add more
            player injurying obstacles as well as an underground area that the
            player has to find the entrance to. We add the underground area to
            show the player they will have to start searching the levels for the
            quest items instead of just running through the level and coming
            across them. This level contained the last mushroom for chef's quest
            as well as the first two balloons from the shopkeeper's quest.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRLevel2.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Level 3</h1>
          <p>
            This is the third level and for this level as you can see there are
            more hidden areas where quest items are becoming harder and harder
            to find. This level pushes to have a lot of movement to add more
            difficulty for the player and we did this by adding moving platforms
            as well as moving fire columns. This means the player would have to
            be really patient and careful as they move through the map. For
            another increase in difficulty we added an insta kill pit which will
            kill the player if they fall. This level contains the last 3
            balloons for the shopkeeper's quest.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRLevel3.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Level 4</h1>
          <p>
            This is the fourth level and for this level we added some more
            obstacles for the player to dodge. The main difference in this level
            is that it has a secret room hiding underneath the exit. This secret
            room has coins worth 10 and a fish for the dock worker's quest. This
            level contains the first 3 fish for the dock worker's quest.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRLevel4.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Level 5</h1>
          <p>
            This is the last level and for this level a bit more difficult so we
            added another instant death pit under some platforms. Then we
            created a smoky part where a player has to be very observent to
            dodge the fire. We also have a big room full of hard to navigate
            platforms where you if you fall you have to start over in the room
            and might land in some fire. This level contains the last 3 fish for
            the dock worker's quest.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRLevel5.png" alt="" />
        </div>
      </div>
      <div id="Links" className="links">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a
            className="GithubBtn"
            href="https://github.com/Matthew-Andreas/Rex-Run"
          >
            <img className="btnIcons" src="./github.png" alt="" />
            <p className="btnText">GitHub</p>
            <img className="btnIcons" src="./share.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RexRunPage;
