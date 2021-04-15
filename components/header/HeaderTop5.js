import { Col, Row } from "react-bootstrap";
import styles from '../../containers/Header/Header.module.css'

const HeaderTop5 = () => {
  const cardContent = [
    {
      topTitle: "React.js",
      p1:
        "Framework front-end fonctionant avec Javascript, ce qui le rend très rapide et performant au niveau de l'affichage.",
      p2:
        "De plus, il permet de correctement implémenter le code grace à son développement en composants bien distincts.",
    },
    {
      topTitle: "Node.js",
      p1:
        "Cet environement d'exécution Javascript (ou Runtime Javascript) permet de créer des API et ainsi de pouvoir traiter des données.",
      p2:
        "Traitement de formulaires, création de comptes, enregistrement de documents, et bien d'autres choses encore sont possible avec Node.js",
    },
    {
      topTitle: "Next.js",
      p1:
        "Next.js est un framework React qui permet le rendu côté serveur (affichage de la page que quand les données ont déja été chargées, performance ++) ainsi que la génération de sites dits statics (performance +++).",
      p2: "De plus, il est extrêmement facile à mettre en place et à déployer.",
    },
    {
      topTitle: "React Bootstrap",
      p1:
        "React Bootstrap est un framework front-end qui adapte Bootstrap à React. Il permet de gérer l'aspect design du site ou de l'application grâce à des classes CSS déja faites.",
      p2:
        "React Bootstrap (comme son prédécesseur Bootstrap) gère aussi l'aspect responsive, pour que votre site s'adapte à tous type de support (ordinateurs, mobiles).",
    },
    {
      topTitle: "Redux",
      p1:
        "Redux est un gestionnaire d'état de votre application ou site web. Il permet de stocker des informationsdont on a besoin sur l'ensemble des pages.",
      p2:
        'Par exemple, sur ce site il enregistre le fait que vous ayez choisi le "Dark" ou le "Light" mode comme thème d\'affichage.',
    },
  ];

  const topCard = (topTitle, p1, p2,i) => {
    return (
      <Col className={`${styles.headerTop5Anim} px-3 mb-4 mb-md-5`} key={i} xs={11} md={5}>
        <div className="border rounded p-4 h-100" style={{backgroundColor:"rgb(250,250,250,0.2)"}}>
          <h4 className="font-weight-bold font-italic">{topTitle}</h4>
          <div className="text-left">
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <>
      
      <Col className="d-md-flex justify-content-center py-md-5"><svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#e71837"
        className="d-block d-md-none bi bi-bookmark-heart mt-5 mb-2 mx-auto"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
        />
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#e71837"
          className="d-none d-md-block bi bi-bookmark-heart mr-4"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
          />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
        <h1>
          <u>Top 5 de mes technologies préférées</u>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#e71837"
          className="d-none d-md-block bi bi-bookmark-heart ml-4"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
          />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
      </Col>
      <Row className="mx-0 justify-content-center my-5 my-md-4 px-md-5">
        {cardContent.map((cardItem, i) => {
          return topCard(cardItem.topTitle, cardItem.p1, cardItem.p2,i);
        })}
      </Row>
    </>
  );
};
export default HeaderTop5;
