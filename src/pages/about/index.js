import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  languages,
  other_interests,
} from "../../content_option";
import StarRating from "../../components/starBar";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Über mich</h1>
            <hr className="separator-line" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Informationen</h3>
          </Col>
          <Col lg="7">
            <p>
              Blond
              <br />
              Blaue Augen
              <br />
              1,96 m<br />
              Muskulös
              <br />
              <br />
              Geburtsjahr 1998
              <br />
              Nationalität: Deutsch
              <br />
              Spielalter: 24-36
              <br />
              Wohnort: Berlin
            </p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Letzte Projekte</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Fähigkeiten</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i}>
                <h3 className="progress-title">
                  {data.name}
                  <StarRating fullStars={data.value} />
                </h3>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Sprachen</h3>
          </Col>
          <Col lg="7">
            {languages.map((data, i) => (
              <div key={i}>
                <h3 className="progress-title">
                  {data.name}
                  <StarRating fullStars={data.value} />
                </h3>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Interessen</h3>
          </Col>
          <Col lg="7">
            {other_interests.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
