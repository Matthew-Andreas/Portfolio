import "./ExperienceCard.css";

interface Props {
  ImageSrc: string;
  CompanyName: string;
  JobTitle: string;
  ExperienceTime: string;
  ShortDes: string;
  WorkLink: string;
}

const ExperienceCard = ({
  ImageSrc,
  CompanyName,
  JobTitle,
  ExperienceTime,
  ShortDes,
  WorkLink,
}: Props) => {
  return (
    <>
      <a className="workLink" href={WorkLink}>
        <div className="experienceCard">
          <div className="experienceHeader">
            <img className="companyLogo" src={ImageSrc} alt="" />
            <div>
              <h1 className="experienceTitle">{CompanyName}</h1>
              <p className="jobTitle">{JobTitle}</p>
            </div>
            <p className="experienceTime">{ExperienceTime}</p>
          </div>
          <p className="experienceDesc">{ShortDes}</p>
          <div className="learnMore">
            <p>Learn More</p>
            <img src="./Portfolio/Arrow.png" alt="" />
          </div>
        </div>
      </a>
    </>
  );
};

export default ExperienceCard;
