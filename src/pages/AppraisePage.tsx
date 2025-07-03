import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";
import "./ProjectPage.css";
import { useEffect } from "react";

const AppraisePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar
        navItems={[
          "Description",
          "Technologies Used",
          "About",
          "Video Demo",
          "Links",
        ]}
      />
      <div id="Description" className="header">
        <div className="headerText">
          <h1>ApprAIse</h1>
          <p>
            This was an image classification(IC) AI model benchmarking website
            that was done in cooperation with Qualcomm. This website would allow
            the user to compare different IC models to find the best fit for
            their upcoming projects. This website was unique as it allowed the
            user to input their own image to be classified by a selection of
            models directly on the website.
          </p>
        </div>
        <img className="headerImg" src="./ApprAIseImg.png" alt="" />
      </div>
      <div id="Technologies Used" className="techUsed">
        <h1>Technologies Used</h1>
        <div className="skills">
          <Skill ImageSrc="html.png" SkillName="HTML" />
          <Skill ImageSrc="css-3.png" SkillName="CSS" />
          <Skill ImageSrc="js.png" SkillName="JavaScipt" />
          <Skill ImageSrc="python.png" SkillName="Python" />
          <Skill ImageSrc="database.png" SkillName="SQL" />
          <Skill ImageSrc="Qualcomm.webp" SkillName="Qualcomm AI Hub" />
          <Skill ImageSrc="FastAPI.png" SkillName="FastAPI" />
          <Skill ImageSrc="Docker.webp" SkillName="Docker" />
        </div>
      </div>
      <div id="About" className="about right">
        <div className="aboutText">
          <h1>About This Project</h1>
          <p>
            This project was a class project in my capstone class at university.
            This class was given the amazing opportunity to work with Qualcomm
            employees in the computer vision department. These employees
            mentored our projects and helped guide us to the amazing result you
            see before you. Our project was proposed by our mentor since there
            are many other websites that show some of these metrics, but in very
            bland and confusing ways. So our job was to build an easily
            navigable website that looked appealing to the eye, both on
            computers and mobile devices.
          </p>
          <p>
            My group's project was to build a benchmarking website for AI image
            classification models that displays the models' benchmarks in a
            leaderboard. These benchmarks would contain 5 important metrics for
            each model configuration, which are top 1 accuracy, top 5 accuracy,
            memory usage, inference time, and NPU layers. These 5 metrics would
            allow a user of the site to see how each model performed while being
            run on different libraries and devices. This would allow the user to
            find the perfect model for their unique application and find the
            right balance between speed, memory, and accuracy.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./AppAIseFrontPage.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Services</h1>
          <p>
            Our website has 6 main services that we provide for our users.
            Below, we will go through each service in detail.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseServices.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Customization</h1>
          <p>
            This is our customization page, which allows the user to pick the
            colors they would like for their charts and which chart type they
            would like to see their data in. This was a really important feature
            since it allows the user to see the data they need to see in a form
            that is appealing to their eye and will help them understand the
            information.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseCustomization.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Inference</h1>
          <p>
            This is the inference page where a user can inference an image of
            their own in a selected model, library, and device to get the top 5
            accuracy. This is a feature that really sets our website apart from
            others like it since a user is able to input an image from their own
            dataset and see how a chosen model will respond. For this example
            image, we can see that the model responds pretty well, giving the
            chimpanzee a confidence of close to 90% which is the correct
            prediction. To inferernce an image, the user must make an account on
            our website and enter their QAI_hub API token from their own
            Qualcomm AI Hub account. This will allow the website to run an
            inference job through the user's account without them having to code
            a single thing.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseInference.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Catalog</h1>
          <p>
            This is the catalog/models page where all the models we have
            benchmarks for are stored. This page was made so that when you
            decide on a model you like, you can look it up and find more
            information about it. We also provided filters that allowed the user
            to see which models are usable with different devices and libraries.
            Another feature to help users find a model they are looking for is
            the model precision filter, which allows the user to pick whether
            they want a quantized or floating-point model, and a search feature
            that allows users to filter down to specific models. Each of these
            model cards leads to a page dedicated to each model, which has a lot
            more information that a user could learn about a model.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseModels.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Model</h1>
          <p>
            This is the model page, which is unique for each one of our models.
            This page allows users to get a more detailed look at the model they
            want to use for their project. This page has a description as well
            as all the combinations of device and library results for each
            model. Towards the bottom, there are more details such as Technical
            details, Applicable Scenarios, Supported Form Factors, and Licenses.
            At the very bottom, we have links that the user can use to learn
            more about the model, as well as a link back to the Qualcomm page
            where we got some of the information.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseModelTop.png" alt="" />
          <img className="aboutImg" src="./ApprAIseModelBottom.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Leaderboard</h1>
          <p>
            This is the Leaderboard page, which is the main focus of what this
            website is supposed to be about. As you can see, we have filters
            that allow the user to change what information is shown on the graph
            and table. The user can choose which device and library they would
            like for the models to run on, and then what metric they would like
            to sort the benchmarks by. Then the user can view the information in
            a graph of the top 3 models in that category or see all the models
            and their metrics in order by rank in that category. This allows the
            user to view the information in whichever way they like to find the
            right model for them.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseLeaderboardImg.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Comparison</h1>
          <p>
            This is the Comparison page where a user can compare up to 3
            different models and see how they stack up against one another. The
            user is able to choose 3 models, and each model can use their own
            combinations of libraries and devices, so you can see the metrics
            you want to see. There is also a button under each model selection
            that can take the user directly to the model's page so they can
            learn more about their favorite model. The first way the user can
            compare the models is in charts, which gives the user a visual
            method of comparing these different models. Then the user can go
            down and see all the numerical values for each model in the metrics
            section, where the best out of the 3 models is highlighted in each
            category. Lastly, at the bottom, you can see a few technical details
            about each model.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseComparisonTop.png" alt="" />
          <img
            className="aboutImg"
            src="./ApprAIseComparisonBottom.png"
            alt=""
          />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Code and Paper</h1>
          <p>
            This is the code and paper page that allows the user to get to all
            of the different papers and code for each model. We added this so
            that if you wanted to go into more detail on multiple models, you
            could do it all in one place. Each model has a page on Qualcomm's AI
            hub, a GitHub, a Hugging Face page, and a research paper, so the
            user can get all they need about a given model.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./ApprAIseCaP.png" alt="" />
        </div>
      </div>
      <div id="Video Demo" className="VideoDemo">
        <h1 className="Title">Video Demo</h1>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/qHBWQcA3LME?si=JiQLHXaxG-0D0FdN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="Video"
          ></iframe>
        </div>
      </div>
      <div id="Links" className="links">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a
            className="GithubBtn"
            href="https://github.com/Matthew-Andreas/ApprAIse"
          >
            <img className="btnIcons" src="./github.png" alt="" />
            <p className="btnText">GitHub</p>
            <img className="btnIcons" src="./share.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppraisePage;
