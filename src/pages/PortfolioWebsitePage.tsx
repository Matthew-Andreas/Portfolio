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
          <p>
            This was a personal project that I wanted to make so I could
            showcase my projects that I have previously worked on as well as
            what projects I am working on currently. This will also be a digital
            timeline for myself to see where I started and where I am going to
            show myself how much I have improved as time moves on.
          </p>
          <p>
            My plan is to have this website continue to grow throughout the
            years and to have a big repertoire towards the end of my career with
            many cool projects I completed using all kinds of different
            technologies. Each of my projects will get a card with a picture and
            a short description then if you click on it you can go to a page
            deticated to going a little more indepth on the project and
            sometimes getting to look at it online, in a video, or even it's
            code.
          </p>
          <p>
            This website will also contain information about my skills as a
            programmer as I go through my career and my technical experience as
            I work at different companies.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./AboutPortfolio.png" alt="" />
        </div>
      </div>
      <div id="Links" className="links left">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a
            className="GithubBtn"
            href="https://github.com/Matthew-Andreas/MatthewAndreas.github.io"
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

export default PortfolioWebsitePage;
