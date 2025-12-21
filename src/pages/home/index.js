import React from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "@dr.pogodin/react-helmet";
import Typewriter from "typewriter-effect";
import {useTranslation} from "react-i18next";
import {introdata, personalInfo} from "../../config_option"; // Import for the image URL and resume
import {Gallery} from "../gallery";
import {About} from "../about";
import {ContactUs} from "../contact";
import Button from "../../components/Button";

export const Home = () => {
  const {t} = useTranslation();

  return (
      <HelmetProvider>
        <div className="home-container">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t("personalInfo.name")}</title>
            <meta name="description" content={t("meta.description")}/>
          </Helmet>
          {/* Home Section */}
          <section id="home" className="home">
            <div className="intro_sec block lg:flex items-center">
              <div
                  className="h_bg-image order-1 lg:order-2 h-full"
                  style={{
                    backgroundImage: `url(${introdata.your_img_url})`,
                    backgroundPosition: "70% 30%",
                  }}
                  aria-label={t("intro.profile_image_alt")}
                  role="img"
              ></div>
              <div className="text order-2 lg:order-1 h-full lg:flex justify-center">
                <div className="self-center">
                  <div className="intro mx-auto">
                    <h2 className="mb-4">{t("personalInfo.name")}</h2>
                    <h1 className="fluidz-48 mb-4">
                      <Typewriter
                          options={{
                            strings: [
                              t("intro.animated.first"),
                              t("intro.animated.second"),
                              t("intro.animated.third"),
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            deleteSpeed: 10,
                          }}
                      />
                    </h1>
                    <p className="mb-4">{t("intro.description")}</p>
                    <div className="intro_btn-action">
                      <a href="/#gallery" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('gallery').scrollIntoView({behavior: 'smooth'});
                      }}>
                        <Button id="button_gallery">
                          {t("navigation.gallery")}
                        </Button>
                      </a>
                      <a href="/#about" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
                      }}>
                        <Button id="button_about">
                          {t("navigation.about")}
                        </Button>
                      </a>
                      <a href="/#contact" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                      }}>
                        <Button id="button_contact">
                          {t("navigation.contact")}
                        </Button>
                      </a>
                    </div>
                    <div className="intro_btn-action pb-5 mt-3">
                      <a href={personalInfo.resume_url} target="_blank" rel="noopener noreferrer">
                        <Button id="button_resume">
                          {t("download_resume")}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="gallery">
            <Gallery/>
          </section>

          {/* About Me Section */}
          <section id="about" className="about">
            <About/>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <ContactUs/>
          </section>
        </div>
      </HelmetProvider>
  );
};
