import React from "react";
import "./style.css";
import {HelmetProvider} from "@dr.pogodin/react-helmet";
import {Col, Container, Row, Table} from "@lukeashford/aurelius";
import {useTranslation} from "react-i18next";
import StarRating from "../../components/starBar";
import {layoutConfig} from "../../config_option";

export const About = () => {
  const {t} = useTranslation();

  return (
      <HelmetProvider>
        <Container className="About-header">
          <Row className="mb-5 mt-3 md:pt-3">
            <Col span={layoutConfig.about.fullWidthColWidth}>
              <h1 className="text-4xl mb-4 text-gold font-heading">{t("navigation.about")}</h1>
              <hr className="border-gold border-t-2"/>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col span={layoutConfig.about.headerColWidth}>
              <h3 className="text-gold text-2xl py-4 font-heading">
                {t("about.sections.information")}
              </h3>
            </Col>
            <Col span={layoutConfig.about.contentColWidth}>
              <p className="text-white">
                {t("about.sections.personal_info.blonde")}
                <br/>
                {t("about.sections.personal_info.eyes")}
                <br/>
                1,96 m<br/>
                {t("about.sections.personal_info.build")}
                <br/>
                <br/>
                {t("about.sections.personal_info.birth")}
                <br/>
                {t("about.sections.personal_info.nationality")}
                <br/>
                {t("about.sections.personal_info.playing_age")}: {t("personalInfo.playing_age")}
                <br/>
                {t("about.sections.personal_info.location")}
                <br/>
                {t("about.sections.personal_info.license")}
              </p>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col span={layoutConfig.about.headerColWidth}>
              <h3 className="text-gold text-2xl py-4 font-heading">{t("about.title")}</h3>
            </Col>
            <Col span={layoutConfig.about.contentColWidth} className="flex items-center">
              <div>
                <p className="text-white">{t("about.aboutme")}</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col span={layoutConfig.about.headerColWidth}>
              <h3 className="text-gold text-2xl py-4 font-heading">
                {t("about.sections.recent_projects")}
              </h3>
            </Col>
            <Col span={layoutConfig.about.contentColWidth}>
              {Object.keys(t('project_categories', {returnObjects: true}))
              .map((category, index) => (
                  <div key={index} className="mb-5">
                    <h4 className="text-gold text-xl mb-3 font-semibold">{t(`project_categories.${category}`)}</h4>
                    <Table responsive className="text-white">
                      <thead>
                      <tr>
                        <th className="text-gold font-bold">{t('project_headers.year')}</th>
                        <th className="text-gold font-bold">{t('project_headers.title')}</th>
                        <th className="text-gold font-bold">{t('project_headers.role')}</th>
                        <th className="text-gold font-bold">{t('project_headers.director')}</th>
                        <th className="text-gold font-bold">{t('project_headers.location')}</th>
                      </tr>
                      </thead>
                      <tbody>
                      {t(`projects.${category}`, {returnObjects: true}).map((project, i) => (
                          <tr key={i}>
                            <td>{project.year}</td>
                            <td><em>{project.title}</em></td>
                            <td>{project.role}</td>
                            <td>{project.director}</td>
                            <td>{project.location}</td>
                          </tr>
                      ))}
                      </tbody>
                    </Table>
                  </div>
              ))}
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col span={layoutConfig.about.headerColWidth}>
              <h3 className="text-gold text-2xl py-4 font-heading">
                {t("about.sections.skills")}
              </h3>
            </Col>
            <Col span={layoutConfig.about.contentColWidth}>
              <Row>
                {t('skills', {returnObjects: true}).map((data, i) => (
                    <Col span={4} key={i} className="mb-3">
                      <h3 className="text-white text-base font-bold">
                        {data.name}
                        <StarRating fullStars={data.value}/>
                      </h3>
                    </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col span={layoutConfig.about.headerColWidth}>
              <h3 className="text-gold text-2xl py-4 font-heading">
                {t("about.sections.languages")}
              </h3>
            </Col>
            <Col span={layoutConfig.about.contentColWidth}>
              <Row>
                {t('languages', {returnObjects: true}).map((data, i) => (
                    <Col span={4} key={i} className="mb-3">
                      <h3 className="text-white text-base font-bold">
                        {data.name}
                        <StarRating fullStars={data.value}/>
                      </h3>
                    </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col span={layoutConfig.about.headerColWidth}>
              <h3 className="text-gold text-2xl py-4 font-heading">
                {t("about.sections.interests")}
              </h3>
            </Col>
            <Col span={layoutConfig.about.contentColWidth}>
              {t('other_interests', {returnObjects: true}).map((data, i) => {
                return (
                    <div className="py-4" key={i}>
                      <h5 className="text-gold text-lg font-semibold pb-2 border-b-2 border-gold">{data.title}</h5>
                      <p className="text-white">{data.description}</p>
                    </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
  );
};
