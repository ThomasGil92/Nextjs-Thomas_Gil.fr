import { Carousel, Row, Col } from "react-bootstrap";
//import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, A11y } from "swiper";
import "swiper/swiper-bundle.css";

const OrderSlides = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);
  return (
    <Row className="mx-0 mt-5 flex-column text-center">
      <Col className="mx-auto px-0">
        <div
          className="d-md-block d-none"
          style={{
            backgroundImage: `url("http://localhost:3000/img/desktop-slider.png")`,
            backgroundSize: "auto 700px",
            backgroundRepeat: "no-repeat",
            height: "700px",
            backgroundPosition: "center",
          }}
        >
          <Swiper
            id="swipper"
            slidesPerView={1}
            /* onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)} */
            navigation
            loop
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <div
                id="last-project-slide-1"
                className="d-flex justify-content-center position-relative"
              >
                {/*  <div
                  className="w-100 bg-dark py-md-4 position-absolute"
                  style={{ bottom: "-84px" }}
                >
                  <h2 className="font-italic font-weight-bold text-white mb-0">
                    Gestion des commandes
                  </h2>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                id="last-project-slide-2"
                className="d-flex justify-content-center position-relative"
              >
                {/* <div
                  className="w-100 bg-dark py-md-4 position-absolute"
                  style={{ bottom: "-84px" }}
                >
                  <h2 className="font-italic font-weight-bold text-white mb-0">
                    Gestion des stocks
                  </h2>
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="d-md-none">
          <Swiper
            slidesPerView={1}
            /* onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)} */
            navigation
            loop
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <div id="last-project-slide-1"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div id="last-project-slide-2"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Col>
    </Row>
  );
};
export default OrderSlides;
