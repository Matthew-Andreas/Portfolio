import "./NavBar.css";

interface Props {
  navItems: string[];
}

const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetSection: string
) => {
  e.preventDefault();
  const target = document.getElementById(targetSection);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = ({ navItems }: Props) => {
  return (
    <div className="navBar">
      <a href="" className="navLink navTitle">
        M.A.S.E
      </a>
      <div className="navItems">
        {navItems.map((section) => (
          <a
            className="navLink"
            href=""
            onClick={(e) => handleScroll(e, section)}
          >
            {section}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
