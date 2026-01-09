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
      <div
          className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 flex-col items-center z-50">
        <ul className="list-none p-0 m-0">
          {socialprofiles.twitter && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.twitter} className="text-gold hover:text-gold-bright">
                  <FaTwitter className="w-5 h-5"/>
                </a>
              </li>
          )}
          {socialprofiles.github && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.github} className="text-gold hover:text-gold-bright">
                  <FaGithub className="w-5 h-5"/>
                </a>
              </li>
          )}
          {socialprofiles.facebook && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.facebook} className="text-gold hover:text-gold-bright">
                  <FaFacebookF className="w-5 h-5"/>
                </a>
              </li>
          )}
          {socialprofiles.linkedin && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.linkedin} className="text-gold hover:text-gold-bright">
                  <FaLinkedin className="w-5 h-5"/>
                </a>
              </li>
          )}
          {socialprofiles.youtube && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.youtube} className="text-gold hover:text-gold-bright">
                  <FaYoutube className="w-5 h-5"/>
                </a>
              </li>
          )}
          {socialprofiles.twitch && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.twitch} className="text-gold hover:text-gold-bright">
                  <FaTwitch className="w-5 h-5"/>
                </a>
              </li>
          )}
          {socialprofiles.insta && (
              <li className="block text-center mb-2.5">
                <a href={socialprofiles.insta} className="text-gold hover:text-gold-bright">
                  <FaInstagram className="w-5 h-5"/>
                </a>
              </li>
          )}
        </ul>
        <div className="w-px h-10 bg-gold mt-2.5"></div>
        <p className="text-gold text-xs font-semibold whitespace-nowrap -rotate-90 mt-14">
          {t("social.follow_me")}
        </p>
      </div>
  );
};
