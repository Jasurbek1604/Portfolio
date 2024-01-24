import React from "react";
import Title from "../Title";
import { useLangContext } from "../../context/LangContext";
import { Content } from "./style";
import { useColorContext } from "../../context/ColorContext";
import { UseModeContext } from "../../context/ModeContenxt";
import { useNavigate } from "react-router-dom";
import cv from "../../assets/resume.pdf";
const About = () => {
  const [data, language, setLanguage, main] = useLangContext();
  const [color] = useColorContext();
  const [mode] = UseModeContext();
  const navigate = useNavigate();
  const handleClick = () => {
    const cvFile = cv;
    const downloadLink = document.createElement("a");
    downloadLink.href = cvFile;
    downloadLink.download = "Jasuebek O'telbayev CV.pdf";
    downloadLink.click();
  };
  return (
    <div className="container" data-aos="fade-left">
      <div className="wrapper">
        <Content color={color} mode={mode}>
          <Title>About me</Title>
          <div className="name">
            {main?.name} <span>{main?.job}</span>
          </div>
          <div className="desc">
            Junior Plus Web Developer specializing in front-end development.
            Experienced with all stages of development cycle for dynamic web
            projects. Well-versed in JavaScript and ReactjS. Strong background
            in management and leadership.
          </div>
          <div className="grid">
            <div className="grid__item">
              <div className="grid__item__left">Age:</div>
              <div className="grid__item__right">19</div>
            </div>
            <div className="grid__item">
              <div className="grid__item__left">Country:</div>
              <div className="grid__item__right">Tashkent</div>
            </div>
            <div className="grid__item">
              <div className="grid__item__left">Education:</div>
              <div className="grid__item__right">higher</div>
            </div>
            <div className="grid__item">
              <div className="grid__item__left">Experience:</div>
              <div className="grid__item__right">1 year</div>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleClick}>Download CV</button>
            <button onClick={() => navigate("/contact")}>Hire Me</button>
          </div>
          <div className="techs">
            <div className="techs__item">
              <div className="techs__item__title">
                <div>HTML</div>
                <div>95%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech html"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>CSS, SCSS, SASS</div>
                <div>95%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech css"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>JavaScript</div>
                <div>90%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech js"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>React</div>
                <div>90%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech react"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>TypeScript</div>
                <div>75%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech ts"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>Ant Design, Material UI</div>
                <div>50%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech lib"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>Tailwind CSS, Bootstrap</div>
                <div>50%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech lib"></div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default About;
