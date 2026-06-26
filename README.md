# Shreyash Dalvi | Software Developer Command Center Portfolio

A highly interactive, cinematic, and data-driven personal portfolio website built for software developers, backend engineers, and data engineers. The theme is **"Code. Data. Systems. Discipline."**, reflecting the intersection of technical engineering skills and athletic discipline.

## Features
- **Cinematic Boot sequence**: A custom log terminal boot simulator validating data shapes and checking components.
- **Metrics Dashboard**: Clear, data-driven representation of developer impact (50K+ records validated, GWR holder).
- **Interactive SVG Data Pipeline**: Dynamic flow diagrams mapping ingestion, transformation, storage, and presentation.
- **Case Study Project Accordion**: Deep-dives into concurrent reservations, token security, and model vectorizations in a **Problem ──> Solution ──> Tech Stack ──> Impact** layout.
- **Interactive CLI Contact Terminal**: A custom mock bash console supporting commands like `help`, `whoami`, `skills`, `projects`, `clear`, `theme`, and a step-by-step contact form input loop.
- **Live Local Time**: Keeps track of current local time in Pune, India.

---

## Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styles**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Compile Production Bundle
```bash
npm run build
```

---

## Customizing Content
All text content, experience records, metrics, and project definitions are decoupled from layout styles and stored as TypeScript models inside the `src/data/` directory:
- `src/data/projects.ts` - Case study structures
- `src/data/skills.ts` - Categorized lists and proficiency meters
- `src/data/experience.ts` - Work history descriptions
- `src/data/achievements.ts` - Sports records and Guinness World Record descriptions

To customize the downloadable resume, replace the PDF file located at `public/Shreyash_Dalvi_Resume.pdf`.

---

## Deployment to Vercel

1. Make sure you have the [Vercel CLI](https://vercel.com/cli) installed or connect your repository to Vercel.
2. Run the deployment command:
   ```bash
   vercel
   ```
3. For a production deployment:
   ```bash
   vercel --prod
   ```
