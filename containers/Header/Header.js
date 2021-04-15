import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import HeaderTop5 from "../../components/header/HeaderTop5";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["React.js", "Node.js", "Next.js","front-end","back-end","fullstack"];

const Header = () => {
  const [textIndex, setTextIndex] = useState(0);
  const theme = useSelector((state) => state.theme);

  setInterval(() => {
    setTextIndex(textIndex + 1);
  }, 2000);

  return (
    <Container
      fluid
      id="top"
      className={
        theme && theme === "light"
          ? `${styles.header}`
          : `${styles.header_dark}`
      }
    >
      <Row className="text-center d-flex flex-column">
        <Col className="text-center">
          <h1 className="d-none d-md-block display-1 mb-0">Thomas Gil</h1>
          <h1 className=" d-md-none text-uppercase mb-0">Thomas Gil</h1>
          <hr className="bg-white d-md-none" />
          <h2>Développeur web <ReactTextTransition
              text={texts[textIndex % texts.length]}
              springConfig={presets.wobbly}
              style={{ margin: "0 4px" }}
              inline
            /></h2>
        </Col>
        <Col>
          <Image
            className={`${styles.scale_img} my-5`}
            roundedCircle
            src="/img/thomas-g.jpg"
          />
        </Col>
        <Col md={5} className="mx-auto py-md-5">
          <h1>
            <strong>
              <u>Qui suis-je?</u>
            </strong>
          </h1>
          <br />
          <p className="text-left">
            Développeur web fullstack en freelance depuis 1 an, je réalise des
            sites web de la conception du projet au déploiement du site en ligne
            pour vous.
          </p>
          <p className="text-left">
            Création, refonte, intégration web, développement d'API,
            architecture, débeug, déploiement, hébergement, ...
          </p>
          <p className="text-left"></p>
        </Col>
        <HeaderTop5 />
      </Row>
    </Container>
  );
};
export default Header;
