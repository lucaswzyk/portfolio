import React from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Button from "../../components/Button";
import {legalNotice} from "../../config_option";

export const LegalNotice = () => {
  const {t} = useTranslation();

  return (
      <HelmetProvider>
        <Container className="legal-notice">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t("legal.title")}</title>
            <meta name="description" content={t("legal.meta_description")}/>
          </Helmet>

          <Row
              className="mb-5 mt-3 pt-md-3 align-items-center justify-content-between gap-3 gap-md-0">
            <Col xs="12" md="7">
              <h1 className="display-4 mb-2">{t("legal.title")}</h1>
              <p className="text-muted mb-0">{t("legal.subtitle")}</p>
            </Col>
            <Col xs="12" md="auto" className="text-md-end">
              <Link to="/">
                <Button className="back-button">{t("legal.back_home")}</Button>
              </Link>
            </Col>
          </Row>

          <Card className="p-4 legal-card">
            <div className="legal-section mb-4">
              <p className="legal-name mb-2">{legalNotice.name}</p>
              <p className="mb-1">{legalNotice.street}</p>
              <p className="mb-0">{legalNotice.city}</p>
            </div>

            <div className="legal-section border-top pt-3">
              <p className="mb-0">
                {t("legal.contact")}: {" "}
                <a href={`mailto:${legalNotice.email}`}
                   className="legal-link">{legalNotice.email}</a>
              </p>
            </div>
          </Card>
        </Container>
      </HelmetProvider>
  );
};
