import React, {useState} from "react";
import "./style.css";
import {HelmetProvider} from "@dr.pogodin/react-helmet";
import {Badge, Card, Col, Container, Modal, Row, VideoCard} from "@lukeashford/aurelius";
import {pics_landscape, pics_portrait, stills_nyc, youtube_url} from "../../config_option"; // Import
                                                                                            // for
                                                                                            // the
// image URLs
import {useTranslation} from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
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
        <Container className="px-4 md:px-16 2xl:px-8">
          <Row className="mb-5 mt-3 md:pt-3">
            <Col className="col-span-12">
              <h1 className="text-4xl mb-4 text-gold font-heading">{t("navigation.gallery")}</h1>
              <hr className="border-gold border-t-2"/>
            </Col>
          </Row>
          {/* YouTube Video Section */}
          <Row className="mb-5">
            <Col className="col-span-12">
              <VideoCard
                  src={youtube_url}
              />
            </Col>
          </Row>
          {/* New Stills Section */}
          <Row className="mt-6 md:mt-8 mb-8">
            <Col className="col-span-12">
              <Card
                  variant="featured"
                  className="relative group overflow-hidden p-8"
              >
                {/* Background decoration */}
                <div
                    className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/10 transition-colors duration-500"
                />

                <div className="relative z-10 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <Badge
                          variant="gold"
                          className="gap-2 px-3 py-1 tracking-widest uppercase"
                      >
                        <span className="w-2 h-2 bg-gold rounded-full animate-pulse"/>
                        {t("stills.badge")}
                      </Badge>

                      <h2 className="text-3xl font-heading text-white tracking-tight">
                        {t("stills.title")}
                      </h2>

                      <div className="text-silver leading-relaxed">
                        <p>
                          {t("stills.description")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Row className="gap-4 md:gap-6">
                    {stills_nyc.map((url, i) => (
                        <Col key={i} className="col-span-12 md:col-span-4">
                          <Card
                              className="rounded-none border-ash/30"
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
                </div>
              </Card>
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
                      onClick={() => handleImageClick(i + stills_nyc.length)}
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
                      onClick={() => handleImageClick(i + stills_nyc.length + pics_portrait.length)}
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
                {stills_nyc.map((url, i) => (
                    <div
                        key={`still-${i}`}
                        className="flex justify-center w-full bg-obsidian"
                    >
                      <div className="w-11/12 max-w-5xl">
                        <img
                            src={url}
                            alt=""
                            className="max-h-screen w-full object-contain"
                        />
                      </div>
                    </div>
                ))}
                {pics_portrait.map((url, i) => (
                    <div
                        key={`portrait-${i}`}
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
                    <div key={`landscape-${i}`}>
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
