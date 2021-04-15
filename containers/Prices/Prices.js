import { Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./Prices.module.css";

const Prices = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Row id="prices" className={theme && theme==="light"?"mx-0 d-block my-md-5":`${styles.prices_bg_dark} mx-0 d-block my-md-5`}>
      <h1 className="font-weight-light text-center mt-5 mt-md-0">Tarifs / Prestations</h1>
      <br />
      <Row className="mx-0 mt-md-5 text-center">
        <Col xs={11} md={6} className="no-border-on-md mx-auto my-3 mb-2 my-md-0 py-3 border border-2">
          <h2 className="font-weight-light">Tarif jour moyen</h2>
          <p
            className="font-weight-bold"
            style={{ fontSize: "50px", color: "#52BCFF" }}
          >
            310&euro;*
          </p>
          <p className="font-weight-light mb-0">
            *En fonction de la longueur des missions
          </p>
        </Col>
        <Col xs={11} md={6} className="no-border-on-md mx-auto my-3 my-md-0 py-3 border border-2">
          {" "}
          <h2 className="font-weight-light">Tarif site de base</h2>
          <p
            className="font-weight-bold"
            style={{ fontSize: "50px", color: "#52BCFF" }}
          >
            1500&euro;*
          </p>
          <p className="font-weight-light mb-0">
            *Site vitrine (1 page + 1 formulaire de contact + infos)
          </p>
        </Col>
      </Row>
      <hr />
      <Row
        className="mx-0 justify-content-around text-center mt-5" /* style={{marginTop:"150px"}} */
      >
        <Col xs={10} md={3}>
          <Image
            src="/img/4977548.png"
            className="mb-3"
            style={{ width: "60%" }}
            alt="Première étape de la prestation"
          />
          <div className="text-left mt-3">
            <p
              className="position-absolute text-danger"
              style={{ left: "-17px", fontSize: "30px" }}
            >
              1.
            </p>
            <p>
              Pour commencer, nous échangerons par téléphone ou par email sur
              votre projet de site web.
            </p>
            <p>
              Pourquoi? Quels délais? Quel type de site? Nous verrons les
              principaux aspects et problématiques de votre projet.
            </p>
          </div>
        </Col>
        <Col xs={10} md={3}>
          <Image
            src="/img/3774167.png"
            className="mb-3"
            style={{ width: "60%" }}
            alt="Première étape de la prestation"
          />
          <div className="text-left mt-3">
            <p
              className="position-absolute text-danger"
              style={{ left: "-17px", fontSize: "30px" }}
            >
              2.
            </p>
            <p>
              Après avoir mis au point les grandes lignes de votre projet, je
              vous proposerai un devis qui résumera tous vos besoins et toutes
              vos demandes.
            </p>
            <p>
              Pour plus de sérénité, nous pourrons passer par la plateforme
              "MALT" (société de gestion des projets freelances, génération de
              factures, génération de devis, gestion des litiges, sécurisation
              des paiements, ...) si vous le souhaitez.
            </p>
          </div>
        </Col>
        <Col xs={10} md={3}>
          <Image
            src="/img/3955358.png"
            className="mb-3"
            style={{ width: "60%" }}
            alt="Première étape de la prestation"
          />
          <div className="text-left mt-3">
            <p
              className="position-absolute text-danger"
              style={{ left: "-17px", fontSize: "30px" }}
            >
              3.
            </p>
            <p>Après avoir signé le devis, j'entame la production du site.</p>
            <p>
              Je reviendrai vers vous régulièrement durant cette période pour
              vous faire état des avancements du projet et pour que vous
              puissiez valider les détails de la préstation en cours.
            </p>
            <p>
              En revanche, les grandes lignes du projet décrites dans le devis
              ne pourront être modifiée en cours de production.
            </p>
          </div>
        </Col>
      </Row>
      <hr/>
    </Row>
  );
};
export default Prices;
