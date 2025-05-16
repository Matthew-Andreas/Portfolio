import "./Contact.css";

interface Props {
  ImageSrc: string;
  LinkHref: string;
  ContactOption: string;
}

const Contact = ({ ImageSrc, LinkHref, ContactOption }: Props) => {
  return (
    <div className="contactOption">
      <img className="contactOptionImage" src={ImageSrc} alt="" />
      <a className="contactOptionLink" href={LinkHref}>
        {ContactOption}
      </a>
    </div>
  );
};

export default Contact;
