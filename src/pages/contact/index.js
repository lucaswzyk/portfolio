import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import {HelmetProvider} from "@dr.pogodin/react-helmet";
import {Alert, Col, Container, Input, Row, Textarea} from "@lukeashford/aurelius";
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
          <Row className="mb-5 mt-3 md:pt-3">
            <Col className="col-span-12">
              <h1 className="text-4xl mb-4 text-gold font-heading">{t("navigation.contact")}</h1>
              <hr className="border-gold border-t-2"/>
            </Col>
          </Row>
          <Row className="mb-8">
            <Col className="col-span-12">
              {formData.show && (
                  <Alert
                      variant={formData.variant === "danger" ? "error" : formData.variant}
                      className="mb-4"
                  >
                    {formData.alertmessage}
                  </Alert>
              )}
            </Col>
            <Col className="col-span-12 lg:col-span-5 mb-5">
              <h3 className="text-gold text-2xl py-4 font-heading">
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
            <Col className="col-span-12 lg:col-span-7 flex items-center">
              <form onSubmit={handleSubmit} className="w-full">
                <Row className="mb-4">
                  <Col className="col-span-12 lg:col-span-6 mb-4">
                    <Input
                        id="name"
                        name="name"
                        placeholder={t("contact.form.name")}
                        value={formData.name || ""}
                        type="text"
                        required
                        onChange={handleChange}
                    />
                  </Col>
                  <Col className="col-span-12 lg:col-span-6 mb-4">
                    <Input
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
                <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.message")}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mb-4"
                />
                <Row>
                  <Col className="col-span-12 text-center">
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
        {formData.loading && (
          <div className="fixed top-0 left-0 w-full h-1 bg-gold animate-pulse"></div>
        )}
      </HelmetProvider>
  );
};
