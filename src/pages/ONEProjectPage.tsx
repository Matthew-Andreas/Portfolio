import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";

const ONEProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar
        navItems={["Description", "Technologies Used", "About", "Links"]}
      />
      <div id="Description" className="header">
        <div className="headerText">
          <h1>One Project</h1>
          <p>
            This project was an internship where we built a website and database
            from scratch. This project's focus was to build a website full of
            entrepreneurial resources and display it in an easily navigable
            webpage. We created a table that displayed all of these resources in
            one place and provided a filter system so the user could find
            exactly the resource they were looking for.
          </p>
        </div>
        <img className="headerImg" src="./OneProject2.png" alt="" />
      </div>
      <div id="Technologies Used" className="techUsed">
        <h1>Technologies Used</h1>
        <div className="skills">
          <Skill ImageSrc="social.png" SkillName="Joomla" />
          <Skill ImageSrc="html.png" SkillName="HTML" />
          <Skill ImageSrc="css-3.png" SkillName="CSS" />
          <Skill ImageSrc="js.png" SkillName="JavaScript" />
          <Skill ImageSrc="database.png" SkillName="SQL" />
          <Skill ImageSrc="php.png" SkillName="PHP" />
          <Skill ImageSrc="phpMyAdmin.png" SkillName="php MyAdmin" />
        </div>
      </div>
      <div id="About" className="about right">
        <div className="aboutText">
          <h1>About This Project</h1>
          <p>
            This was an amazing progect where I was able to work together with a
            team to build a product that would assist many young and struggling
            entrepenurers to find the resources that they need and that apply to
            them and their entrepenureal venture. So the main part of this
            project was to build a website where the user could easily filter
            through our 300+ resources and find the resources that were right
            for them.
          </p>
          <p>
            On the image to the right you can see the home page where the user
            can view these resources organized in a table with 10 rows. We also
            wanted our user's browsing experience to be customizable so we
            allowed them to see 10, 25, or 50 rows at once and if the user
            presses the button show all columns they can see more information
            about each resource. Then on the left side of the image we have
            filters where the user can open the drop downs and select which
            filters they want to apply to the resource so they can slim the
            amount of resources they will have to search through to find the one
            they need.
          </p>
          <p>
            My contributions for this project were building the frontend of the
            website based on the designs I recieved and then connecting my
            frontend to a database I created in phpMyAdmin with all 300+
            resources using PHP and SQL. This was my first time building a
            website from scratch and it turned out pretty good. We got a home
            page with a catelog(seen on the right) and almost every other page
            is fully designed in the frontend.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./OneProjectHome1.png" alt="" />
          <img className="aboutImg" src="./OneProjectHome2.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Curated Questions</h1>
          <p>
            We also created a page with some curated questions so that people
            could read through and find if they have any of the same questions
            as posed on this page. If they find information that they would like
            to see resources for then they can check the box and press submit
            and be taken to a slimmed down section of the resources that help
            provide the information they are looking for.
          </p>
          <p>
            To see more of the website click the link button down below and
            explore the website.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./OPCQ1.png" alt="" />
          <img className="aboutImg" src="./OPCQ2.png" alt="" />
          <img className="aboutImg" src="./OPCQ3.png" alt="" />
        </div>
      </div>
      <div id="Links" className="links">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a className="GithubBtn" href="https://onehubsd.org/">
            <img className="btnIcons" src="./Website.png" alt="" />
            <p className="btnText">Website</p>
            <img className="btnIcons" src="./share.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ONEProjectPage;
