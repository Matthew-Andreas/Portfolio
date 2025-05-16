import "./ExperienceCard.css";

const ExperienceCard = () => {
  return (
    <>
      <div className="experienceCard">
        <div className="experienceHeader">
          <img className="companyLogo" src="./Logo-navy (2).png" alt="" />
          <div>
            <h1 className="experienceTitle">ONE Project - CSUSM</h1>
            <p className="jobTitle">Full-Stack Developer</p>
          </div>
          <p className="experienceTime">May 27, 2024 - September 19,2024</p>
        </div>
        <p className="experienceDesc">
          Short Desciption of what I did and what the website was for
        </p>
      </div>
    </>
  );
};

export default ExperienceCard;
