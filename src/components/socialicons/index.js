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

export const SocialIcons = ({className = "", vertical = false}) => {
  const {t} = useTranslation();

  const icons = [
    {name: "twitter", icon: <FaTwitter className="w-5 h-5"/>, url: socialprofiles.twitter},
    {name: "github", icon: <FaGithub className="w-5 h-5"/>, url: socialprofiles.github},
    {name: "facebook", icon: <FaFacebookF className="w-5 h-5"/>, url: socialprofiles.facebook},
    {name: "linkedin", icon: <FaLinkedin className="w-5 h-5"/>, url: socialprofiles.linkedin},
    {name: "youtube", icon: <FaYoutube className="w-5 h-5"/>, url: socialprofiles.youtube},
    {name: "twitch", icon: <FaTwitch className="w-5 h-5"/>, url: socialprofiles.twitch},
    {name: "insta", icon: <FaInstagram className="w-5 h-5"/>, url: socialprofiles.insta},
  ].filter(p => p.url);

  if (icons.length === 0) {
    return null;
  }

  return (
      <div
          className={`flex items-center ${vertical ? "flex-col"
              : "flex-col sm:flex-row gap-4"} ${className}`}>
        {vertical ? (
            <>
              <ul className="list-none p-0 m-0 flex flex-col items-center gap-2.5">
                {icons.map(p => (
                    <li key={p.name}>
                      <a href={p.url}
                         className="text-gold hover:text-gold-bright transition-colors duration-200">
                        {p.icon}
                      </a>
                    </li>
                ))}
              </ul>
              <div className="w-px h-10 bg-gold mt-2.5"></div>
              <p className="text-gold text-xs font-semibold whitespace-nowrap writing-vertical rotate-180 mt-8 uppercase tracking-widest">
                {t("social.follow_me")}
              </p>
            </>
        ) : (
            <>
              <p className="text-gold text-xs font-semibold whitespace-nowrap uppercase tracking-widest">
                {t("social.follow_me")}
              </p>
              <div className="w-10 h-px bg-gold"></div>
              <ul className="list-none p-0 m-0 flex flex-row items-center gap-4">
                {icons.map(p => (
                    <li key={p.name}>
                      <a href={p.url}
                         className="text-gold hover:text-gold-bright transition-colors duration-200">
                        {p.icon}
                      </a>
                    </li>
                ))}
              </ul>
            </>
        )}
      </div>
  );
};
