import "./App.css";
import ProjectCard from "./componets/ProjectCard";

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
        <div className="skills"></div>
      </div>
    </>
  );
};

export default App;
