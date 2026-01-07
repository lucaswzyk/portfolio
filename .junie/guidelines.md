# AI Assistant Guidelines

## Project-specific constraints

- This app is built on the **Aurelius** design kit. Design/LLM manifest:
  `node_modules/@lukeashford/aurelius/llms.md`.
- Keep the multi-page layout structure.
- When changing website content, update `src/content_option.js`.
- Keep `README.md` in sync with user-visible feature changes.

## UX / quality bar

- Responsive across pages/components.
- All user-facing text must support i18n.
- Follow WCAG accessibility practices.
- Handle user interaction errors (clear feedback, no crashes).
- Keep assets performant (optimize images, avoid unnecessary weight).

## Implementation conventions

- Prefer functional React components + hooks; follow React best practices.
- Use modern ES6+.
- Keep components small and single-purpose.
- Navigation uses React Router.
- Use React Helmet for document head / SEO.