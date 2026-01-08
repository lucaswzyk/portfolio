### Description

A personal portfolio website built with React.

### Features

- Fully Responsive
- Multi-Page Layout
- Contact Form With EmailJs
- React-Bootstrap
- Internationalization (i18n) Support
- Edit Content From One Place
- Legal notice page and footer link (Impressum)

### Setup

Install required dependencies

<pre>npm install</pre>

Start the server

<pre>npm start</pre>

### Content Management

#### Text Content

Text content is managed through the internationalization (i18n) system:

- English translations: `src/i18n/locales/en.json`
- German translations: `src/i18n/locales/de.json`

To add support for additional languages:

1. Create a new locale file in `src/i18n/locales/`
2. Update the i18n configuration in `src/i18n/i18n.js`

#### Non-Text Content

Non-text content (image URLs, email service configuration, etc.) is managed in
`src/config_option.js`.

- Legal notice address/email values live in `src/config_option.js` under `legalNotice`.

### Development Notes

- The site uses React Router with HashRouter for navigation
- Internationalization is implemented using i18next and react-i18next
- All user-facing text should be accessed through the i18n system using the `t()` function

### Credits

This site was built using a React portfolio template. Thanks to the original creator for the
foundation.
