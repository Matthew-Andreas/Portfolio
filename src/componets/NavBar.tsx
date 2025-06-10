import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navBar">
      <a href="" className="navLink navTitle">
        M.A.S.E
      </a>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {navItems.map((section) => (
          <li>
            <a
              className="navLink"
              href=""
              onClick={(e) => {
                handleScroll(e, section);
                setIsOpen(!isOpen);
              }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
