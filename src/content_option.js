// This file is kept for backward compatibility
// All text content has been moved to the i18n locale files
// All non-text content has been moved to config_option.js

import {
  contactConfig,
  introdata,
  pics_landscape,
  pics_portrait,
  socialprofiles,
  stills_nyc,
} from "./config_option";

// These exports are deprecated and should be replaced with i18n translations
// or imports from config_option.js
export {
  introdata,
  pics_portrait,
  pics_landscape,
  stills_nyc,
  contactConfig,
  socialprofiles,
};

// For backward compatibility, re-export empty objects or references to config_option.js
export const meta = {};
export const dataabout = {};
export const worktimeline = [];
export const skills = [];
export const languages = [];
export const other_interests = [];
export const logotext = "";
