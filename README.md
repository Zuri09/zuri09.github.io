# Devansh Patel Portfolio

Personal cybersecurity portfolio for Devansh Patel, published with GitHub Pages at:

https://zuri09.github.io

The site presents my work across bug bounty research, Web/API VAPT, digital forensics, security operations, GRC, projects, certifications, and responsible disclosure recognition.

## Tech Stack

- React
- Tailwind CSS
- Create React App
- Lucide React icons
- GitHub Pages

## Repository Branches

This repository intentionally uses two branches:

- `source` - editable React source code
- `main` - built static files served by GitHub Pages

GitHub may show a "Compare & pull request" banner after pushing to `source`. That is expected. Do not merge `source` into `main`; `main` should contain the production build output only.

## Project Structure

```text
public/
  Devansh_Patel_CV.pdf
  logos/
  profile.png
src/
  Portfolio.js
  index.css
```

Most portfolio content is managed in `src/Portfolio.js`, including experience, projects, skills, certifications, links, and the "Found Vulnerabilities In" logo grid.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Deployment Workflow

Build from the `source` branch:

```bash
git switch source
npm run build
```

Then copy the generated `build/` output to the `main` branch worktree and push both branches:

```bash
git push origin source
git push origin main
```

In this local setup, the `main` deploy worktree is located at:

```text
/private/tmp/portfolio-main
```

## Updating Content

- Resume: replace `public/Devansh_Patel_CV.pdf`
- Profile image: replace `public/profile.png`
- Vulnerability recognition logos: add images to `public/logos/` and update `DATA.hof` in `src/Portfolio.js`
- Hero/social links: update `DATA.cta` in `src/Portfolio.js`
- Experience, education, projects, skills, and certifications: update the relevant arrays in `src/Portfolio.js`

## Live Site

After pushing the deployed `main` branch, GitHub Pages may take a few minutes to refresh:

https://zuri09.github.io
