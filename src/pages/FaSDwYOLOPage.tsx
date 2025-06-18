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
          <p>
            This project was a class project in my Deep Learning class in
            university. For this project we were given the task of finding a
            research paper using AI deep learning techniques to solve a real
            world problem and to implement their technquie. Then we were tasked
            with coming up with our own deep learning technique to try to solve
            the same problem in a different way and implement it.
          </p>
          <p>
            For my group's project we decide to follow a paper on fire and smoke
            detection using object detection. For the object detection
            algorithim they tried out mutiple versions of YOLO from version 6 to
            8 and collected very good results which you can see below. Our plan
            for our first alternative method was to try to use a transfer
            learning strategy with the YOLOv8 models to try to increase the
            recall of the results. For our second alternative method we decided
            to look at the newer versions of YOLO which was YOLOv12 and try to
            use those models to see if it increased the recall in the results.
            We wanted to focus on recall since it is a statistic that focuses on
            false negatives meaning the fire/smoke is missed/not detected. We
            did this since fires being missed could lead to bigger fires that
            cause more damages and greater loss of life.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./DeepLearning.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Paper's Results</h1>
          <p>
            These are the research papers results for all the models they worked
            with. They were able to get excellent scores reaching up into the
            90's in some areas but we were not able recreate these results even
            using their exact specifications in their paper.
          </p>
          <p>
            There are 4 attributes for a model that we look at to see how
            accurate the model is at correctly determining whether there is
            fire/smoke or not in an image and where it is in the image. The
            first attribute is precision which focuses on false postives which
            in this case would be the model saying there is fire/smoke when
            there is not one in the image. The next attribute is recall which
            focuses on false negatives which is where the model says there is no
            fire/smoke in the image when there actually is. This is the
            attribute we focused on improving the most since if a fire was not
            detected it could lead to a bigger fire that cause more damages and
            greater loss of life. Then we have the attribute mAP:50 which uses
            both precision and recall, averaged across the 3 classes of fire,
            smoke and background, while using a fixed IoU threshold of
            0.50(i.e., there is a 50% overlap between the predicted and true
            boxes which you can see in the above image). Lastly we got the
            attribute mAP:50-95 which is the same as the last but goes through
            IoU threshold .50 to .95 in .05 increments and averages them
            together.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./yoloOGPaperResults.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Our Implementation of the Paper's Method</h1>
          <p>
            For this project we reimplement the paper's method and after
            following every parameter in the paper we got these results for
            YOLOv8 models. For our results you can see that the YOLOv8s does the
            best in most of the metrics and YOLOv8x got the best in the
            precision metric.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./OurPaperImplementation.png" alt="" />
        </div>
      </div>
      <div className="about left">
        <div className="aboutText">
          <h1>Comparison Between Our Implementation and the Paper's</h1>
          <p>
            As we compare our implementation to the paper's we can see that
            there is a big difference in the metrics but we followed every
            parameter in the paper and still ended up with the lower scores.
            However, across all of our alternative methods we seemed to be
            relatively close with our implementation's metrics and we never saw
            the scores as high as the orginal paper. So we decide to compare the
            alternative methods metrics to our reimplementation of the paper's
            method instead of the orignal metrics. Another thing you can see
            when comparing these metrics is that for their models YOLOv8x did
            the best in every category but in our data YOLOv8s did the best in
            most categories which we found very interesting. This trend of small
            models doing better then the larger ones can also be seen through
            out the rest of our methods.
          </p>
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
          <p>
            This is our first alternative method's results. For this method we
            used the same base models as the paper but removed the last layer of
            the model or the head and replaced with a custmized layer for this
            specific problem. We also froze all of the layers execept the new
            head for the first 10 epochs of training to train the new head and
            then unfroze all the layers for another 290 epoch.
          </p>
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
          <p>
            As we compare our first alternative method to the reimplementation
            of the paper's method we can see in the metrics recall, mAP:50, and
            mAP:50-95 were better in the new alternative method than the old
            method. However, for percision even though we had many of the models
            perform better in the new method none of the beat the highest
            precision in the old method. Also you can see that for the highest
            of each column they didn't increase by too much since at most one
            increased by .012, that column was recall which was our focus. So we
            didn't see too much of an improvement.
          </p>
        </div>
        <div className="ImgContainer">
          <img className="aboutImg" src="./CompTLVSOurImp.png" alt="" />
        </div>
      </div>
      <div className="about right">
        <div className="aboutText">
          <h1>Alternative Method Using YOLOv12 Models</h1>
          <p>
            This is our second alternative where we used the YOLOv12 models with
            all the same metrics from the paper to see if the newer versions of
            these models were better. The interesting thing we found with this
            data is that the highest metrics in each columns seem to be in
            different models execept for percision and mAP:50 which were both in
            the YOLOv8n.
          </p>
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
