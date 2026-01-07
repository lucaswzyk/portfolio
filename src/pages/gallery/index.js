import React, {useState} from "react";
import "./style.css";
import {HelmetProvider} from "@dr.pogodin/react-helmet";
import {Card, Col, Container, Modal, Row} from "@lukeashford/aurelius";
import {pics_landscape, pics_portrait} from "../../config_option"; // Import for the image URLs
import {useTranslation} from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import ReactPlayer from "react-player";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

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
        <Container>
          <Row className="mb-5 mt-3 md:pt-3">
            <Col className="col-span-12">
              <h1 className="text-4xl mb-4 text-gold font-heading">{t("navigation.gallery")}</h1>
              <hr className="border-gold border-t-2"/>
            </Col>
          </Row>
          {/* YouTube Video Section */}
          <Row className="mb-5">
            <Col className="col-span-12">
              <div className="relative w-full max-w-full max-h-full h-screen" style={{paddingBottom: '56.25%'}}>
                <ReactPlayer
                    className="absolute top-0 left-0 w-full h-full"
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
            <Col className="col-span-12">
              <hr className="border-gold border-t-2"/>
            </Col>
          </Row>
          {/* Portrait Images Section */}
          <Row className="mb-5">
            {pics_portrait.map((url, i) => (
                <Col key={i} className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Card
                      className="rounded-none"
                      interactive
                      noPadding
                      onClick={() => handleImageClick(i)}
                  >
                    <img
                        src={url}
                        alt=""
                        className="w-full h-auto object-cover"
                    />
                  </Card>
                </Col>
            ))}
          </Row>
          {/* Separator Line */}
          <Row className="mb-5">
            <Col className="col-span-12">
              <hr className="border-gold border-t-2"/>
            </Col>
          </Row>
          {/* Landscape Images Section */}
          <Row className="mb-5">
            {pics_landscape.map((url, i) => (
                <Col key={i} className="col-span-12 md:col-span-6">
                  <Card
                      className="rounded-none"
                      interactive
                      noPadding
                      onClick={() => handleImageClick(i + pics_portrait.length)}
                  >
                    <img
                        src={url}
                        alt=""
                        className="w-full h-auto object-cover"
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
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                      hasPrev && (
                          <button
                              type="button"
                              onClick={onClickHandler}
                              title={label}
                              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-gold/80 hover:bg-gold text-obsidian p-3 rounded-full transition-colors"
                          >
                            <FiChevronLeft size={32}/>
                          </button>
                      )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                          <button
                              type="button"
                              onClick={onClickHandler}
                              title={label}
                              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-gold/80 hover:bg-gold text-obsidian p-3 rounded-full transition-colors"
                          >
                            <FiChevronRight size={32}/>
                          </button>
                      )
                  }
              >
                {/* Render all images in carousel */}
                {pics_portrait.map((url, i) => (
                    <div
                        key={i}
                        className="flex justify-center w-full bg-obsidian"
                    >
                      <div className="w-9/12 max-w-3xl">
                        <img
                            src={url}
                            alt=""
                            className="max-h-screen w-full object-contain"
                        />
                      </div>
                    </div>
                ))}
                {pics_landscape.map((url, i) => (
                    <div key={i + pics_portrait.length}>
                      <img
                          src={url}
                          alt=""
                          className="max-h-screen w-full object-contain"
                      />
                    </div>
                ))}
              </Carousel>
            </div>
          </Modal>
          {/* Photographer Credit */}
          <Row className="mt-5">
            <Col className="col-span-12 text-center">
              <p className="text-silver">
                {t("gallery.photographer")}
              </p>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
  );
};
