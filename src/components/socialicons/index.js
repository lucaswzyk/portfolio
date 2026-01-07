import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {socialprofiles} from "../../config_option";
import {useTranslation} from "react-i18next";

export const Socialicons = () => {
  const {t} = useTranslation();

  return (
      <div className="fixed right-5 top-1/2 -translate-y-1/2 w-5 h-52 flex flex-col items-center justify-center" style={{zIndex: 999}}>
        <ul>
          {socialprofiles.twitter && (
              <li>
                <a href={socialprofiles.twitter}>
                  <FaTwitter/>
                </a>
              </li>
          )}
          {socialprofiles.github && (
              <li>
                <a href={socialprofiles.github}>
                  <FaGithub/>
                </a>
              </li>
          )}
          {socialprofiles.facebook && (
              <li>
                <a href={socialprofiles.facebook}>
                  <FaFacebookF/>
                </a>
              </li>
          )}
          {socialprofiles.linkedin && (
              <li>
                <a href={socialprofiles.linkedin}>
                  <FaLinkedin/>
                </a>
              </li>
          )}
          {socialprofiles.youtube && (
              <li>
                <a href={socialprofiles.youtube}>
                  <FaYoutube/>
                </a>
              </li>
          )}
          {socialprofiles.twitch && (
              <li>
                <a href={socialprofiles.twitch}>
                  <FaTwitch/>
                </a>
              </li>
          )}
          {socialprofiles.insta && (
              <li>
                <a href={socialprofiles.insta}>
                  <FaInstagram/>
                </a>
              </li>
          )}
        </ul>
        <p className="text-gold">{t("social.follow_me")}</p>
      </div>
  );
};
