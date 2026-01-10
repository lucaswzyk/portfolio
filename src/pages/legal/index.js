import React from "react";
import {Helmet, HelmetProvider} from "@dr.pogodin/react-helmet";
import {Container, Stack} from "@lukeashford/aurelius";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Button from "../../components/Button";
import {legalNotice} from "../../config_option";

export const LegalNotice = () => {
  const {t} = useTranslation();

  return (
      <HelmetProvider>
        <div className="bg-obsidian text-white px-4 md:px-16 2xl:px-8 py-20 grow">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t("legal.title")}</title>
            <meta name="description" content={t("legal.meta_description")}/>
          </Helmet>

          <Container size="lg">
            <Stack direction="vertical" gap="8">
              <Stack direction="horizontal" justify="between" align="center" wrap className="gap-4">
                <Stack direction="vertical" gap="2">
                  <h1 className="text-3xl font-semibold leading-tight md:text-4xl text-white">
                    {t("legal.title")}
                  </h1>
                  <p className="text-silver text-base leading-relaxed mb-0">
                    {t("legal.subtitle")}
                  </p>
                </Stack>

                <Link to="/" className="self-start sm:self-auto">
                  <Button
                      variant="ghost"
                      className="inline-flex items-center gap-2  border border-ash/30 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:border-ash/50 hover:bg-ash/10">
                    {t("legal.back_home")}
                  </Button>
                </Link>
              </Stack>

              <div
                  className="space-y-6 border border-ash/35 bg-charcoal/90 p-8 text-white shadow-2xl md:p-10">
                <Stack direction="vertical" gap="2" className="text-silver">
                  <p className="text-lg font-semibold text-white md:text-xl mb-0">{legalNotice.name}</p>
                  <p className="mb-1 leading-relaxed">{legalNotice.street}</p>
                  <p className="mb-0 leading-relaxed">{legalNotice.city}</p>
                </Stack>

                <div className="border-t border-ash/30 pt-4">
                  <p className="mb-0 text-silver leading-relaxed">
                    {t("legal.contact")}: {" "}
                    <a href={`mailto:${legalNotice.email}`}
                       className="font-medium text-gold underline-offset-2 hover:text-gold-bright hover:underline">{legalNotice.email}</a>
                  </p>
                </div>
              </div>
            </Stack>
          </Container>
        </div>
      </HelmetProvider>
  );
};
