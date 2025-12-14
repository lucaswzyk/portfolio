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

### Deployment

This site is configured to deploy to GitHub Pages using GitHub Actions. The deployment workflow is
defined in `.github/workflows/deploy.yml`.

The site uses HashRouter for navigation, which is compatible with GitHub Pages. This ensures that
all routes work correctly when deployed to GitHub Pages.

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
- The deployment workflow builds the site and deploys it to the gh-pages branch
- Custom domain configuration is handled by adding a CNAME file to the build directory
- Internationalization is implemented using i18next and react-i18next
- All user-facing text should be accessed through the i18n system using the `t()` function

### Credits

This site was built using a React portfolio template. Thanks to the original creator for the
foundation.
