import { Carousel, Row, Col } from "react-bootstrap";

const OrderSlides = () => {
  return (
    <Row className="mx-0 pt-md-5 mt-5 flex-column text-center">
      <h1>Aperçu en images</h1>
      <Col md={6} className="mx-auto mt-md-5 ">
        <Carousel
          indicators={false}
          fade
          className="w-100 mt-4 mt-md-0"
          style={{overflow: "hidden" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/ecomm4.png"
              alt="Suivi de commandes"
            />
            <Carousel.Caption>
              <h3
                className="rounded p-2"
                style={{ backgroundColor: "rgb(0,0,0,0.5)" }}
              >
                Suivi des commandes
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/img/ecomm5.png" alt="Theme" />

            <Carousel.Caption>
              <h3
                className="text-dark rounded p-2"
                style={{
                  backgroundColor: "rgb(250,250,250,0.5)",
                }}
              >
                Thème personnalisable
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/ecomm7.png" />
            <Carousel.Caption>
              <h3
                className="rounded p-2"
                style={{ backgroundColor: "rgb(0,0,0,0.5)" }}
              >
                Paiement sécurisé
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};
export default OrderSlides;
