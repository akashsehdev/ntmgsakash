# New Talent Models Grooming School

React website for New Talent Models Grooming School (NTMGS), including course and mentor information, talent portfolios, registration/contact forms, Firebase persistence, and a serverless email endpoint.

## Technology

- React 18, React Router 6, and Create React App (`react-scripts` 5)
- Tailwind CSS 3 plus project CSS
- Firebase Firestore, Storage, and Analytics
- Vercel serverless function with Nodemailer
- Axios, Framer Motion, Swiper, React Slick, and Pure React Carousel

## Requirements

- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+
- Internet access for remote media, Google Fonts, Firebase, and hosted form services
- A Gmail App Password if the email API is used

The project was verified with Node.js `v24.8.0` and npm `11.6.0`.

## Installation

```bash
git clone <repository-url>
cd ntmgsakash
npm ci
```

Use `npm ci` for a reproducible install from `package-lock.json`. Use `npm install` only when intentionally changing dependencies.

## Environment configuration

Create `.env.local` in the project root for the serverless email endpoint:

```dotenv
ADMIN_EMAIL=your-gmail-address@gmail.com
ADMIN_PASS=your-16-character-gmail-app-password
```

Do not commit `.env.local` or Gmail credentials. `ADMIN_PASS` must be an App Password, not the normal Gmail password.

The browser Firebase configuration is currently in `src/firebase.js`. Firebase web API keys are identifiers rather than server secrets, but Firestore and Storage must be protected by suitable Security Rules. The contact form writes to `contacts`; registration writes to `registrations`.

## Run locally

### Frontend development server

```bash
npm start
```

Open <http://localhost:3000>. To bind explicitly to localhost or use another port:

```bash
HOST=127.0.0.1 PORT=3001 npm start
```

`npm start` serves only React. It does **not** execute `api/sendEmail.js`, so the registration email request requires a Vercel-compatible runtime.

### Full stack with email API

After creating `.env.local`, run:

```bash
npx vercel dev
```

Open the URL printed by Vercel CLI, normally <http://localhost:3000>. This runs the frontend and `POST /api/sendEmail`.

The endpoint accepts JSON in this shape:

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "phone": "+91 9000000000",
  "message": "Optional message",
  "courses": ["Course name"]
}
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the React development server |
| `npm run build` | Create an optimized bundle in `build/` |
| `npm test -- --watchAll=false` | Run Jest once |
| `npm test` | Run Jest in watch mode |
| `npx vercel dev` | Run the frontend and serverless API locally |
| `npm run eject` | Permanently expose CRA configuration; normally avoid |

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About NTMGS |
| `/tarun-rajput` | Tarun Rajput profile |
| `/model-training` | Model training |
| `/pageant-training` | Pageant training |
| `/portfolio` | Portfolio development |
| `/talent` | Talent listing |
| `/talent/:category/:id` | Talent details |
| `/contact` | Contact form |
| `/register` | Registration form |
| `/programspage` | Programs landing page |
| `/programs` | Programs listing |
| `/programs/:slug` | Program details |

Valid program slugs are `online-modelling-classes`, `online-mentoring-program`, `group-batch`, `special-batch`, `personal-batch`, `talentxclusive-batch`, `portfolio-development`, and `modelling-essentials`.

The app uses `BrowserRouter`, so a static production host must rewrite unknown paths to `/index.html`. Otherwise refreshing a nested route such as `/talent/men/1` returns a host-level 404.

## Forms and external services

- Contact writes submissions to the Firebase `contacts` collection.
- Registration writes to `registrations`, then calls `/api/sendEmail`.
- Model-training, pageant-training, and portfolio forms post to a separately hosted Netlify endpoint hard-coded in their components.
- Many images and videos load from jsDelivr, GitHub, and other remote hosts; offline use is incomplete.
- Firebase Analytics initializes in the browser. Privacy tools may block analytics without breaking the main UI.

For a new environment, configure minimum-access Firestore rules and test submissions without real personal data.

## Production and deployment

```bash
npm run build
npx serve -s build
```

The first command writes the optimized site to `build/`; the second previews that static bundle.

For Vercel:

1. Import the repository.
2. Use `npm run build` and output directory `build` if not auto-detected.
3. Add `ADMIN_EMAIL` and `ADMIN_PASS` as environment variables.
4. Ensure SPA routes rewrite to `index.html`.
5. Test Firebase writes, `/api/sendEmail`, nested-route refreshes, and remote media.

Deploying only `build/` elsewhere does not include the Vercel API. Host an equivalent backend and update the registration URL, or use a platform that supports the `api/` function.

## Project structure

```text
api/sendEmail.js        Vercel email function
public/                 Static assets and HTML template
src/assets/             Bundled images
src/components/         Shared sections and forms
src/data/               Programs and talent datasets
src/pages/              Route-level pages
src/App.js              Router configuration
src/firebase.js         Firebase initialization
tailwind.config.js      Tailwind configuration
```

## Verification status

Verified on 30 August 2026:

- `npm run build` completes successfully.
- The development server compiles and runs at <http://127.0.0.1:3000>.
- Every static route above and representative dynamic program/talent routes return HTTP 200.
- The build reports existing ESLint warnings, mainly unused code, loose equality checks, and `javascript:` links.
- `src/App.test.js` currently fails while importing `react-slick` because jsdom lacks `window.matchMedia`. Once mocked, its unchanged CRA assertion for “learn react” must also be replaced.
- Live forms were not submitted because that would write external Firebase data and send email. Test them separately with authorized test credentials.

## Troubleshooting

### `matchMedia not present` during tests

Add a `window.matchMedia` mock to `src/setupTests.js`, then replace the default CRA test with a current application smoke test.

### Registration saves but email fails locally

Use `npx vercel dev`, verify both admin variables, and use a Gmail App Password. Plain `npm start` cannot serve `/api/sendEmail`.

### Firebase permission error

Check the project configuration, collection names, and deployed Security Rules. Do not leave production data globally writable.

### Nested route returns 404 after deployment

Configure SPA fallback so every non-file route serves `/index.html`.

### Missing images or video

Check network access and external asset URLs. A significant part of the media library is not bundled locally.
