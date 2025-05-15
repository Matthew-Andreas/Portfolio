import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <>
      <div className="projectCard">
        <p className="timeFrame">January 27, 2025 - May 2, 2025</p>
        <h2 className="projectTitle">ApprAIse</h2>
        <img className="projectImg" src="./ApprAIseImg.png" alt="" />
        <p>Short Description</p>
      </div>
    </>
  );
};

export default ProjectCard;
