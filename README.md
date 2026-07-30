# Frontend Bundle Builder

A multi-step bundle builder with a live review panel, built as a frontend take-home assignment.

## Tech Stack
- **React** (with Context API & Hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS**

---

## Installation & Local Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>

Install dependencies:

npm install
# or
yarn install

Run the development server:

Bash
npm run dev
# or
yarn dev
Open http://localhost:5173 in your browser to view the application.

## Live Demo
You can view the live project here: 
[Frontend Bundle Builder on Vercel](https://frontend-bundle-builder-delta.vercel.app/)

## Design & Technical Notes / Decisions
*Typography: The original Figma design uses the Gilroy font family. Since it is a proprietary commercial typeface and was not included in the assets, I substituted it with Inter as a clean, open-source alternative to ensure visual hierarchy and consistency.

*Initial State: Pre-selected items and default loaded products (including promotional/free items) are handled via internal initial state upon first load to match the target design state.

*Single-Variant Products: For products that do not feature multiple color options, they were structured with a single default variant to keep the quantity stepper and cart logic fully uniform and scalable.

*Image Assets: Some product images retain the exact resolution provided directly from the Figma source assets.

*Persistence: Client-side persistence (localStorage) is implemented to support the "Save my system for later" feature, allowing users to restore their exact bundle configuration upon reloading or returning.