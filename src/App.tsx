import "./App.css";
import Contact from "./componets/Contact";
import ExperienceCard from "./componets/ExperienceCard";
import ProjectCard from "./componets/ProjectCard";
import Skill from "./componets/Skill";

const App = () => {
  return (
    <>
      <div className="HeaderSection">
        <h1 className="Title">Matthew Andreas - Software Engineer</h1>
        <p className="PersonalDescription">
          I am a highly resourceful software engineer who has a lot of interest
          in Game Development, Computer Vision, Robotics, and Full-Stack
          Development
        </p>
      </div>
      <div className="projectSection">
        <h1 className="Title">Projects</h1>
        <div className="projectCards">
          <ProjectCard
            TimeFrame="May 14, 2025 - Present"
            ProjectTitle="Portfolio Website"
            ImageSrc="./ApprAIseImg.png"
            ShortDes="Short Description"
          />
          <ProjectCard
            TimeFrame="January 29, 2025 - May 2, 2025"
            ProjectTitle="ApprAIse"
            ImageSrc="./ApprAIseImg.png"
            ShortDes="Short Description"
          />
          <ProjectCard
            TimeFrame="March 28, 2025 - May 4, 2025"
            ProjectTitle="Slime"
            ImageSrc="./SlimeGame.png"
            ShortDes="Short Description"
          />
          <ProjectCard
            TimeFrame="March 10, 2025 - May 10, 2025"
            ProjectTitle="Fire and Smoke Detection with YOLO"
            ImageSrc="./ApprAIseImg.png"
            ShortDes="Short Description"
          />
          <ProjectCard
            TimeFrame="February 28, 2025 - May 23, 2025"
            ProjectTitle="Rex Run"
            ImageSrc="./RexRunGame.png"
            ShortDes="Short Description"
          />
          <ProjectCard
            TimeFrame="June 3, 2024 - August 23, 2024"
            ProjectTitle="ONE Project"
            ImageSrc="./ApprAIseImg.png"
            ShortDes="Short Description"
          />
        </div>
      </div>
      <div className="skillSection">
        <h1 className="Title">Skills</h1>
        <div className="skills">
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./java.png" SkillName="Java" />
          <Skill ImageSrc="./python.png" SkillName="Python" />
          <Skill ImageSrc="./php.png" SkillName="PHP" />
          <Skill ImageSrc="./database.png" SkillName="SQL" />
          <Skill ImageSrc="./js.png" SkillName="Javascript" />
          <Skill ImageSrc="./typescript.png" SkillName="Typescipt" />
          <Skill ImageSrc="./html.png" SkillName="HTML" />
          <Skill ImageSrc="./css-3.png" SkillName="CSS" />
          <Skill ImageSrc="./React-icon.svg.png" SkillName="React" />
        </div>
      </div>
      <div className="techExperienceSection">
        <h1 className="Title">Technical Experience</h1>
        <div className="Experiences">
          <ExperienceCard
            ImageSrc="./Logo-navy (2).png"
            CompanyName="ONE Project - CSUSM"
            JobTitle="Full-Stack Developer"
            ExperienceTime="May 27, 2024 - September 19,2024"
            ShortDes="Short Desciption of what I did and what the website was for"
          />
        </div>
      </div>
      <div className="contactMeSection">
        <h1 className="Title">Contact Me</h1>
        <Contact
          ImageSrc="./email.png"
          LinkHref="mailto:matthew66andreas@gmail.com"
          ContactOption="matthew66andreas@gmail.com"
        />
        <Contact
          ImageSrc="./github.png"
          LinkHref="https://github.com/Matthew-Andreas"
          ContactOption="https://github.com/Matthew-Andreas"
        />
        <Contact
          ImageSrc="./linkedin (1).png"
          LinkHref="http://www.linkedin.com/in/matthew-andreas"
          ContactOption="www.linkedin.com/in/matthew-andreas"
        />
      </div>
    </>
  );
};

export default App;
