import "./App.css";
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="skillSection">
        <h1 className="Title">Skills</h1>
        <div className="skills">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
      <div className="techExperience">
        <h1 className="Title">Technical Experience</h1>
        <div className="Experience"></div>
      </div>
    </>
  );
};

export default App;
