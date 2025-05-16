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
            TimeFrame="January 29, 2025 - May 2, 2025"
            ProjectTitle="ApprAIse"
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
            TimeFrame="January 29, 2025 - May 2, 2025"
            ProjectTitle="ApprAIse"
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
            TimeFrame="January 29, 2025 - May 2, 2025"
            ProjectTitle="ApprAIse"
            ImageSrc="./ApprAIseImg.png"
            ShortDes="Short Description"
          />
          <ProjectCard
            TimeFrame="January 29, 2025 - May 2, 2025"
            ProjectTitle="ApprAIse"
            ImageSrc="./ApprAIseImg.png"
            ShortDes="Short Description"
          />
        </div>
      </div>
      <div className="skillSection">
        <h1 className="Title">Skills</h1>
        <div className="skills">
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
          <Skill ImageSrc="./cPlusPlus.png" SkillName="C++" />
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
          ImageSrc="./email.png"
          LinkHref="mailto:matthew66andreas@gmail.com"
          ContactOption="matthew66andreas@gmail.com"
        />
        <Contact
          ImageSrc="./email.png"
          LinkHref="mailto:matthew66andreas@gmail.com"
          ContactOption="matthew66andreas@gmail.com"
        />
      </div>
    </>
  );
};

export default App;
