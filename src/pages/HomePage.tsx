import Contact from "../componets/Contact";
import ExperienceCard from "../componets/ExperienceCard";
import NavBar from "../componets/NavBar";
import ProjectCard from "../componets/ProjectCard";
import Skill from "../componets/Skill";

const HomePage = () => {
  return (
    <>
      <NavBar
        navItems={["Projects", "Skills", "Technical Experience", "Contact Me"]}
      />
      <div className="HeaderSection">
        <h1 className="Title Site">Matthew Andreas - Software Engineer</h1>
        <p className="PersonalDescription">
          I am a highly resourceful software engineer who has a lot of interest
          in Game Development, Computer Vision, Robotics, and Full-Stack
          Development
        </p>
      </div>
      <div id="Projects" className="projectSection">
        <h1 className="Title">Projects</h1>
        <div className="projectCards">
          <ProjectCard
            TimeFrame="May 14, 2025 - Present"
            ProjectTitle="Portfolio Website"
            ImageSrc="./PortfolioImg.png"
            ShortDes="This was a short project which you are looking at the results of right now. 
            I wanted a website to showcase my current and previous projects, skills, and technical work experience.
            This would help to showcase my skills to future employers as well as show me where I have come from."
            ProjectLink="https://github.com/Matthew-Andreas/MatthewAndreas.github.io"
          />
          <ProjectCard
            TimeFrame="March 10, 2025 - May 10, 2025"
            ProjectTitle="Fire and Smoke Detection with YOLO"
            ImageSrc="./DeepLearning2.png"
            ShortDes="This was a project where my group found a research paper and implemented their research, as well as other alternative methods. 
            We decided to work with a paper using YOLOv8 to do smoke and fire detection. 
            The two alternative methods we proposed were transfer learning on YOLOv8 and using YOLO12 to get better scores."
            ProjectLink="#/FireandSmokeDetection"
          />
          <ProjectCard
            TimeFrame="March 28, 2025 - May 4, 2025"
            ProjectTitle="Slime"
            ImageSrc="./SlimeGame.png"
            ShortDes="This is a short 3D platformer where you play as a slime trying to reach the star station in the sky. 
            There are 4 different areas as you make the climb, each with increasing difficulty. 
            This project focused on having a new gaming experience each run by having the platforms randomly generated on each playthrough. "
            ProjectLink="https://github.com/adoante/3d-game"
          />
          <ProjectCard
            TimeFrame="January 29, 2025 - May 2, 2025"
            ProjectTitle="ApprAIse"
            ImageSrc="./ApprAIse3.png"
            ShortDes="This was an image classification(IC) AI model benchmarking website that was done in cooperation with Qualcomm.
            This website would allow the user to compare different IC models to find the best fit for their upcoming projects.
            This website was unique as it allowed the user to input their own image to be classified by a selection of models directly on the website."
            ProjectLink="#/ApprAIse"
          />

          <ProjectCard
            TimeFrame="February 28, 2025 - May 23, 2025"
            ProjectTitle="Rex Run"
            ImageSrc="./RexRunGame.png"
            ShortDes="This project was a short 2D game where you play as a dinosaur trying to escape an island with an active volcano before it erupts.
            This was my first experience bringing a game to completion, which was an amazing sight to see.
            For this project, we focus on getting a complete game and making it look like a real game."
            ProjectLink="#/RexRun"
          />
          <ProjectCard
            TimeFrame="June 3, 2024 - August 23, 2024"
            ProjectTitle="ONE Project"
            ImageSrc="./OneProject2.png"
            ShortDes="This project was an internship where we built a website and database from scratch.
            This project's focus was to build a website full of entrepreneurial resources and display it in an easily navigable webpage.
            We created a table that displayed all of these resources in one place and provided a filter system so the user could find exactly the resource they were looking for."
            ProjectLink="https://onehubsd.org/"
          />
        </div>
      </div>
      <div id="Skills" className="skillSection">
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
          <Skill ImageSrc="./git.png" SkillName="Git" />
          <Skill ImageSrc="./github.png" SkillName="GitHub" />
          <Skill ImageSrc="./artificial-intelligence.png" SkillName="AI" />
        </div>
      </div>
      <div id="Technical Experience" className="techExperienceSection">
        <h1 className="Title">Technical Experience</h1>
        <div className="Experiences">
          <ExperienceCard
            ImageSrc="./Logo-navy (2).png"
            CompanyName="ONE Project - CSUSM"
            JobTitle="Full-Stack Developer"
            ExperienceTime="June 3, 2024 - August 23, 2024"
            ShortDes="This was an intership where I was put into a team tasked with building a website from scratch in Joomla and then connecting to a database we also had to implement in phpMyAdmin. 
            We used basic HTML, CSS, and JavaScript for the frontend and then used PHP and SQL to connect the frontend to the backend database. 
            This website was meant to be a resource hub for entrepreneurs to find resources that could help them succeed in their goals.
            This website allowed these entrepreneurs to filter through a big table of resources to find the right resource for them.
            This project was proposed to help the community and be a resource to help struggling entrepreneurs around the globe."
            WorkLink="https://onehubsd.org/"
          />
        </div>
      </div>
      <div id="Contact Me" className="contactMeSection">
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

export default HomePage;
