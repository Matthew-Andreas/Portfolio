import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";

const ONEProjectPage = () => {
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
          <h1>One Project</h1>
          <p>
            This project was an internship where we built a website and database
            from scratch. This project's focus was to build a website full of
            entrepreneurial resources and display it in an easily navigable
            webpage. We created a table that displayed all of these resources in
            one place and provided a filter system so the user could find
            exactly the resource they were looking for.
          </p>
        </div>
        <img className="headerImg" src="./OneProject2.png" alt="" />
      </div>
      <div id="Technologies Used" className="techUsed">
        <h1>Technologies Used</h1>
        <div className="skills">
          <Skill ImageSrc="social.png" SkillName="Joomla" />
          <Skill ImageSrc="html.png" SkillName="HTML" />
          <Skill ImageSrc="css-3.png" SkillName="CSS" />
          <Skill ImageSrc="js.png" SkillName="JavaScript" />
          <Skill ImageSrc="database.png" SkillName="SQL" />
          <Skill ImageSrc="php.png" SkillName="PHP" />
          <Skill ImageSrc="phpMyAdmin.png" SkillName="php MyAdmin" />
        </div>
      </div>
      <div id="About" className="about right">
        <div className="aboutText">
          <h1>About This Project</h1>
          <p></p>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./test.gif" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Main Hub</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRHub.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Chef</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRChef.png" alt="" />
        </div>
      </div>
      <div id="Links" className="links left">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a className="GithubBtn" href="https://onehubsd.org/">
            <img className="btnIcons" src="./github.png" alt="" />
            <p className="btnText">Website</p>
            <img className="btnIcons" src="./Website.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ONEProjectPage;
