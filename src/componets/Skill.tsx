import "./Skill.css";

interface Props {
  ImageSrc: string;
  SkillName: string;
}

const Skill = ({ ImageSrc, SkillName }: Props) => {
  return (
    <>
      <div className="skillBlock">
        <img className="skillImg" src={ImageSrc} alt="" />
        <p className="skillName">{SkillName}</p>
      </div>
    </>
  );
};

export default Skill;
