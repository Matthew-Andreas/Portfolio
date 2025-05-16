import "./ExperienceCard.css";

interface Props {
  ImageSrc: string;
  CompanyName: string;
  JobTitle: string;
  ExperienceTime: string;
  ShortDes: string;
}

const ExperienceCard = ({
  ImageSrc,
  CompanyName,
  JobTitle,
  ExperienceTime,
  ShortDes,
}: Props) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default ExperienceCard;
