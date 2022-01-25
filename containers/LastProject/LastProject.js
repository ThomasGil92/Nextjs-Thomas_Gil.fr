import { Row, Col, Image } from "react-bootstrap";
import styles from "./LastProject.module.css";
//import NetflixClone from "../../components/lastProject/NetflixClone";
//import FunctionTable from "../../components/lastProject/FunctionTable";
import OrderSlides from "../../components/lastProject/OrderSlides";
import { useSelector } from "react-redux";

const LastProject = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      id="lastProject"
      className={
        theme && theme === "light"
          ? `${styles.last_project_radius} mx-0 text-white`
          : `${styles.last_project_radius_dark} mx-0 text-white`
      }
    >
      <h1 className="font-weight-light text-white text-center">
        Dernier projet
      </h1>
      <Row className="mx-0 justify-content-center align-items-center accentued-padding">
        {/* <NetflixClone /> */}
        {/* <Col md={5} className="mx-auto">
          <h2
            style={{ fontSize: "40px" }}
            className="font-weight-bolder text-center text-md-left mb-3"
          >
            Solution Ecommerce
          </h2>
          <p>
            Voici une solution pour déployer et personnaliser rapidement votre
            ecommerce. En collaboration avec vous, j'apporte votre touche perso
            au site pour intégrer votre image de marque en plus de toutes les
            autres fonctionnalités disponibles.
          </p>
        </Col>
        <Col md={5} className="mx-auto mt-3 mt-md-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="#ff0000"
            className="bi bi-arrow-right position-absolute"
            viewBox="0 0 16 16"
            style={{ top: "50%", right: "42%" }}
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          <Image width="100%" src="/img/coll1.png" />
        </Col> */}
      </Row>
      <OrderSlides />
      {/*<FunctionTable />*/}
    </div>
  );
};
export default LastProject;
