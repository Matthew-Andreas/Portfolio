import "./ProjectCard.css";

interface Props {
  TimeFrame: string;
  ProjectTitle: string;
  ImageSrc: string;
  ShortDes: string;
  ProjectLink: string;
}

const ProjectCard = ({
  TimeFrame,
  ProjectTitle,
  ImageSrc,
  ShortDes,
  ProjectLink,
}: Props) => {
  return (
    <>
      <a className="projectLink" href={ProjectLink}>
        <div className="projectCard">
          <p className="timeFrame">{TimeFrame}</p>
          <div className="projectTitleBox">
            <h2 className="projectTitle">{ProjectTitle}</h2>
          </div>
          <img className="projectImg" src={ImageSrc} alt="" />
          <p className="shortDes">{ShortDes}</p>
          <div className="learnMoreP">
            <p>Learn More</p>
            <img src="./Arrow.png" alt="" />
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
