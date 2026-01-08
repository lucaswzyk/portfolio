import React from "react";
import "./style.css";
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
      <div className="stick_follow_icon">
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
        <p>{t("social.follow_me")}</p>
      </div>
  );
};
