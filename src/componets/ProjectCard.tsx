import "./ProjectCard.css";

interface Props {
  TimeFrame: string;
  ProjectTitle: string;
  ImageSrc: string;
  ShortDes: string;
}

const ProjectCard = ({
  TimeFrame,
  ProjectTitle,
  ImageSrc,
  ShortDes,
}: Props) => {
  return (
    <>
      <div className="projectCard">
        <p className="timeFrame">{TimeFrame}</p>
        <div className="projectTitleBox">
          <h2 className="projectTitle">{ProjectTitle}</h2>
        </div>
        <img className="projectImg" src={ImageSrc} alt="" />
        <p>{ShortDes}</p>
      </div>
    </>
  );
};

export default ProjectCard;
