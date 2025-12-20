import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import {HelmetProvider} from "@dr.pogodin/react-helmet";
import {Alert, Col, Container, Row} from "react-bootstrap";
import {contactConfig, personalInfo} from "../../config_option"; // Import for the contact
                                                                 // configuration and personal info
import {useTranslation} from "react-i18next";
import Button from "../../components/Button";

export const ContactUs = () => {
  const {t} = useTranslation();
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({loading: true});

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
    .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
    )
    .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: t("contact.form.success"),
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `${t("contact.form.error")},${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
    );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <HelmetProvider>
        <Container>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="12">
              <h1 className="display-4 mb-4">{t("navigation.contact")}</h1>
              <hr className="separator-line"/>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="12">
              <Alert
                  //show={formData.show}
                  variant={formData.variant}
                  className={`rounded-0 co_alert ${
                      formData.show ? "d-block" : "d-none"
                  }`}
                  onClose={() => setFormdata({show: false})}
                  dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert>
            </Col>
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4">
                {t("contact.greeting")}
              </h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${t("personalInfo.email")}`}>
                  {t("personalInfo.email")}
                </a>
                <br/>
                <br/>
                <p>
                  <strong>{t("contact.mobile")}:</strong> {personalInfo.phone}
                </p>
                <br/>
                <p>
                  <a href={personalInfo.resume_url} target="_blank" rel="noopener noreferrer">
                    <Button>
                      {t("download_resume")}
                    </Button>
                  </a>
                </p>
              </address>
              <p>{t("contact.description")}</p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder={t("contact.form.name")}
                        value={formData.name || ""}
                        type="text"
                        required
                        onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email || ""}
                        required
                        onChange={handleChange}
                    />
                  </Col>
                </Row>
                <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="message"
                    placeholder={t("contact.form.message")}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <br/>
                <Row>
                  <Col lg="12" className="form-group text-center">
                    <Button type="submit">
                      {formData.loading
                          ? t("contact.form.sending")
                          : t("contact.form.send")}
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
        <div className={formData.loading ? "loading-bar" : "d-none"}></div>
      </HelmetProvider>
  );
};
