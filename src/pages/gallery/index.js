import React, {useState} from "react";
import "./style.css";
import {HelmetProvider} from "@dr.pogodin/react-helmet";
import {Card, Col, Container, Modal, Row} from "@lukeashford/aurelius";
import {pics_landscape, pics_portrait} from "../../config_option"; // Import for the image URLs
import {useTranslation} from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import ReactPlayer from "react-player";

export const Gallery = () => {
  const {t} = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImageIndex(0);
  };

  return (
      <HelmetProvider>
        <Container className="About-header">
          <Row className="mb-5 mt-3 md:pt-3">
            <Col span={12}>
              <h1 className="text-4xl mb-4">{t("navigation.gallery")}</h1>
              <hr className="separator-line"/>
            </Col>
          </Row>
          {/* YouTube Video Section */}
          <Row className="mb-5">
            <Col span={12}>
              <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/Oe6I6fAhNDw"
                    width="100%"
                    height="100%"
                    controls
                />
              </div>
            </Col>
          </Row>
          {/* Separator Line */}
          <Row className="mb-5">
            <Col span={12}>
              <hr className="separator-line"/>
            </Col>
          </Row>
          {/* Portrait Images Section */}
          <Row className="mb-5 po_items_ho portrait-section">
            {pics_portrait.map((url, i) => (
                <Col span={{xs: 12, sm: 6, md: 4}} key={i}>
                  <Card
                      className="po_item"
                      interactive
                      noPadding
                      onClick={() => handleImageClick(i)}
                  >
                    <img
                        src={url}
                        alt=""
                        className="card-media portrait-media w-full"
                    />
                  </Card>
                </Col>
            ))}
          </Row>
          {/* Separator Line */}
          <Row className="mb-5">
            <Col span={12}>
              <hr className="separator-line"/>
            </Col>
          </Row>
          {/* Landscape Images Section */}
          <Row className="mb-5 po_items_ho">
            {pics_landscape.map((url, i) => (
                <Col span={{xs: 12, md: 6}} key={i}>
                  <Card
                      className="po_item"
                      interactive
                      noPadding
                      onClick={() => handleImageClick(i + pics_portrait.length)}
                  >
                    <img
                        src={url}
                        alt=""
                        className="card-media landscape-media w-full"
                    />
                  </Card>
                </Col>
            ))}
          </Row>
          {/* Image Modal */}
          <Modal
              isOpen={openDialog}
              onClose={handleCloseDialog}
              className="max-w-6xl"
          >
            <div className="p-0 overflow-hidden">
              <Carousel
                  selectedItem={selectedImageIndex}
                  showThumbs={false}
                  infiniteLoop
                  emulateTouch
                  showStatus={false}
                  autoPlay={false}
                  useKeyboardArrows={true}
                  centerMode={false}
                  dynamicHeight={true}
                  showArrows={true}
                  swipeable={true}
                  className="h-full w-full"
              >
                {/* Render all images in carousel */}
                {pics_portrait.map((url, i) => (
                    <div
                        key={i}
                        className="portrait-container flex justify-center w-full"
                    >
                      <div className="w-[70%] max-w-3xl">
                        <img
                            src={url}
                            alt=""
                            className="carousel_image max-h-screen w-full object-contain"
                        />
                      </div>
                    </div>
                ))}
                {pics_landscape.map((url, i) => (
                    <div key={i + pics_portrait.length}>
                      <img
                          src={url}
                          alt=""
                          className="carousel_image max-h-screen w-full object-contain"
                      />
                    </div>
                ))}
              </Carousel>
            </div>
          </Modal>
          {/* Photographer Credit */}
          <Row className="mt-5">
            <Col span={12} className="text-center">
              <p className="photographer-credit">
                {t("gallery.photographer")}
              </p>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
  );
};
