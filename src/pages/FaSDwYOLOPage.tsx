import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Skill from "../componets/Skill";

const FaSDwYOLOPage = () => {
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
          <h1>Fire and Smoke Detection with YOLO</h1>
          <p>
            This was a project where my group found a research paper and
            implemented their research, as well as other alternative methods. We
            decided to work with a paper using YOLOv8 to do smoke and fire
            detection. The two alternative methods we proposed were transfer
            learning on YOLOv8 and using YOLO12 to get better scores.
          </p>
        </div>
        <img className="headerImg" src="./DeepLearning.png" alt="" />
      </div>
      <div id="Technologies Used" className="techUsed">
        <h1>Technologies Used</h1>
        <div className="skills">
          <Skill ImageSrc="python.png" SkillName="Python" />
          <Skill ImageSrc="Yolo.svg" SkillName="Ultralytics YOLO" />
          <Skill ImageSrc="artificial-intelligence.png" SkillName="AI" />
          <Skill ImageSrc="compVision.jpg" SkillName="Computer Vision" />
          <Skill ImageSrc="objectDetection.png" SkillName="Object Detection" />
        </div>
      </div>
      <div id="About" className="about right">
        <div className="aboutText">
          <h1>About This Project</h1>
          <p></p>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./DeepLearning.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Paper's Results</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./yoloOGPaperResults.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Our Implementation of the Paper's Method</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./OurPaperImplementation.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Comparison Between Our Implementation and the Paper's</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./PaperVSOurImp.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>
            Alternative Method Using Transfer Learning(TL) on YOLOv8 Models
          </h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./YoloTLResults.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>
            Comparison Between Transfer Learning and Our Implementation of the
            Paper's Method
          </h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./CompTLVSOurImp.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Alternative Method Using YOLOv12 Models</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./Yolov12.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>
            Comparison Between YOLOv12 and Our Implementation of the Paper's
            Method
          </h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./Comp12VS8.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>
            Comparison Between YOLOv12 and Transfer Learning(TL) on YOLOv8
            Models
          </h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./Comp12VSTL.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Level 5</h1>
          <p></p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./RRLevel5.png" alt="" />
        </div>
      </div>
      <div>
        <div className="about left">
          <div className="aboutText">
            <h1>Main Hub</h1>
            <p></p>
          </div>
          <div className="ImgContainer">
            <p>Training</p>
            <img className="aboutImg" src="./yolov8nTraining.png" alt="" />
            <p>Testing</p>
            <img className="aboutImg" src="./yolov8nTesting.png" alt="" />
            <img className="aboutImg" src="./yolov8nConfus.png" alt="" />
            <img className="aboutImg" src="./yolov8nRecall.png" alt="" />
          </div>
        </div>
      </div>
      <div id="Links" className="links left">
        <h1 className="Title">Links</h1>
        <div className="btnSection">
          <a
            className="GithubBtn"
            href="https://www.mdpi.com/2571-6255/7/4/135"
          >
            <img className="btnIcons" src="./github.png" alt="" />
            <p className="btnText">Research Paper</p>
            <img className="btnIcons" src="./share.png" alt="" />
          </a>
          <a
            className="GithubBtn"
            href="https://docs.google.com/document/d/1j-XH-NOwJh-ArVPh15hGFftUKJcD6UCRAnE2PmuHH1g/edit?usp=sharing"
          >
            <img className="btnIcons" src="./github.png" alt="" />
            <p className="btnText">Our Paper</p>
            <img className="btnIcons" src="./share.png" alt="" />
          </a>
          <a
            className="GithubBtn"
            href="https://github.com/Matthew-Andreas/Rex-Run"
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

export default FaSDwYOLOPage;
