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
        <div className="w-full">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t("personalInfo.name")}</title>
            <meta name="description" content={t("meta.description")}/>
          </Helmet>
          {/* Home Section */}
          <section id="home" className="flex items-center" style={{height: 'calc(100vh - var(--header-height))', minHeight: '700px', marginTop: 'var(--header-height)', paddingTop: 0}}>
            <div className="flex flex-col lg:flex-row w-full h-full">
              <div className="order-2 lg:order-1 w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center py-10 lg:py-0">
                <div className="w-full max-w-md mx-auto px-5 lg:px-8">
                    <h2 className="mb-4">{t("personalInfo.name")}</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
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
                    <div className="flex flex-wrap gap-5">
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
                    <div className="flex flex-wrap gap-5 pb-5 mt-3">
                      <a href={personalInfo.resume_url} target="_blank" rel="noopener noreferrer">
                        <Button id="button_resume">
                          {t("download_resume")}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              <div
                  className="order-1 lg:order-2 w-full lg:w-1/2 h-96 lg:h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${introdata.your_img_url})`,
                    backgroundPosition: "70% 30%",
                    minHeight: '700px'
                  }}
                  aria-label={t("intro.profile_image_alt")}
                  role="img"
              ></div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="min-h-screen">
            <Gallery/>
          </section>

          {/* About Me Section */}
          <section id="about" className="min-h-screen">
            <About/>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen">
            <ContactUs/>
          </section>
        </div>
      </HelmetProvider>
  );
};
