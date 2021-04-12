import { Col, Row, Table, Image } from "react-bootstrap";
import CheckLogo from "../../containers/UI/CheckLogo";
import styles from "../../containers/LastProject/LastProject.module.css";

const FunctionTable = () => {
  /* forU mean "for user" and forA mean "for admin" */
  const tableRow = (func, forU, forA, i) => {
    return (
      <tr className={`${styles.tr} font-italic font-weight-light `} key={i}>
        <td className={`mt-2 d-flex`}><p className="mb-0 align-items-center">{func}</p></td>
        <td>{forU && forU === true ? <CheckLogo /> : ""}</td>
        <td>{forA && forA === true ? <CheckLogo /> : ""}</td>
      </tr>
    );
  };

  const functionalities = [
    {
      functionalityName: "Gestion des stocks",
      forU: false,
      forA: true,
    },
    {
      functionalityName: "Création de compte",
      forU: true,
      forA: true,
    },
    {
      functionalityName: "Suivi des commandes",
      forU: true,
      forA: true,
    },
    {
      functionalityName: "Barre de recherche",
      forU: true,
      forA: true,
    },
    {
      functionalityName: "Indication ruptures de stocks",
      forU: true,
      forA: true,
    },
    {
      functionalityName: "Emails de confirmations",
      forU: true,
      forA: true,
    },
    {
      functionalityName: "Paiements CB",
      forU: true,
      forA: false,
    },
    {
      functionalityName: "Paiements Paypal",
      forU: true,
      forA: false,
    },
    {
      functionalityName: "Ajout d'articles",
      forU: false,
      forA: true,
    },
    {
      functionalityName: "Ajout de catégories",
      forU: false,
      forA: true,
    },
    {
      functionalityName: "Thème personnalisé",
      forU: true,
      forA: true,
    },
  ];

  return (
    <Row className="mx-0 mt-5 pt-md-5">
      <Image
        className="position-absolute h-100 d-none d-lg-block"
        style={{ left: 0 }}
        src="/img/1538758.png"
      />
      <Image
        className={`${styles.reversed_png} position-absolute h-100 d-none d-lg-block`}
        src="/img/1538758.png"
      />
      <Col xs={12} md={6} className="mx-auto">
        <Table responsive="sm" borderless striped hover className="text-white">
          <thead>
            <tr>
              <th>
                <h2>Fonctionnalités</h2>
              </th>
              <th className="text-center">
                <h4>Pour vos clients</h4>
              </th>
              <th className="text-center">
                <h4>Pour vous</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {functionalities &&
              functionalities.map((f, i) => {
                return tableRow(f.functionalityName, f.forU, f.forA, i);
              })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
export default FunctionTable;
