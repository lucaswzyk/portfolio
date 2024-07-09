import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { pics_landscape, pics_portrait, meta } from "../../content_option";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

export const Gallery = () => {
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
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Gallerie</h1>
            <hr className="separator-line" />
          </Col>
        </Row>
        {/* YouTube Video Section */}
        <Row className="mb-5">
          <Col xs="12">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=6Nav0NlbMpc"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Col>
        </Row>
        {/* Separator Line */}
        <Row className="mb-5">
          <Col lg="12">
            <hr className="separator-line" />
          </Col>
        </Row>
        {/* Portrait Images Section */}
        <Row className="mb-5 po_items_ho portrait-section">
          {pics_portrait.map((url, i) => (
            <Col xs={12} sm={6} md={4} key={i}>
              <Card
                className="po_item"
                onClick={() => handleImageClick(i + pics_landscape.length)}
              >
                <CardMedia
                  component="img"
                  image={url}
                  alt=""
                  className="card-media portrait-media"
                />
              </Card>
            </Col>
          ))}
        </Row>
        {/* Separator Line */}
        <Row className="mb-5">
          <Col lg="12">
            <hr className="separator-line" />
          </Col>
        </Row>
        {/* Landscape Images Section */}
        <Row className="mb-5 po_items_ho">
          {pics_landscape.map((url, i) => (
            <Col xs={12} md={6} key={i}>
              <Card className="po_item" onClick={() => handleImageClick(i)}>
                <CardMedia
                  component="img"
                  image={url}
                  alt=""
                  className="card-media landscape-media"
                />
              </Card>
            </Col>
          ))}
        </Row>
        {/* Image Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="lg"
        >
          <DialogContent style={{ padding: 0, overflow: "hidden" }}>
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
              style={{ height: "100%", width: "100%" }}
            >
              {/* Render all images in carousel */}
              {pics_portrait.map((url, i) => (
                <div key={i}>
                  <img
                    src={url}
                    alt=""
                    style={{
                      maxHeight: "100vh",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    className="carousel_image"
                  />
                </div>
              ))}
              {pics_landscape.map((url, i) => (
                <div key={i + pics_portrait.length}>
                  <img
                    src={url}
                    alt=""
                    style={{
                      maxHeight: "100vh",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    className="carousel_image"
                  />
                </div>
              ))}
            </Carousel>
          </DialogContent>
        </Dialog>
        {/* Photographer Credit */}
        <Row className="mt-5">
          <Col lg="12" className="text-center">
            <p className="photographer-credit">Fotos: Birgitta Weizenegger</p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
