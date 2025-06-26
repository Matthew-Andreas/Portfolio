import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";

const PortfolioWebsitePage = () => {
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
          <h1>Portfolio Website</h1>
          <p>
            This was a short project which you are looking at the results of
            right now. I wanted a website to showcase my current and previous
            projects, skills, and technical work experience. This would help to
            showcase my skills to future employers as well as show me where I
            have come from.
          </p>
        </div>
        <img className="headerImg portfolio" src="./PortfolioImg.png" alt="" />
      </div>
      <div id="Technologies Used" className="techUsed">
        <h1>Technologies Used</h1>
        <div className="skills">
          <Skill ImageSrc="React-icon.svg.png" SkillName="React" />
          <Skill ImageSrc="typescript.png" SkillName="TypeScript" />
          <Skill ImageSrc="html.png" SkillName="HTML" />
          <Skill ImageSrc="css-3.png" SkillName="CSS" />
          <Skill ImageSrc="github.png" SkillName="Github" />
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
          <a
            className="GithubBtn"
            href="https://github.com/Matthew-Andreas/MatthewAndreas.github.io"
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

export default PortfolioWebsitePage;
