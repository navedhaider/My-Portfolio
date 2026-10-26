# Professional Full Stack .NET Developer Portfolio

A developer portfolio engineered for a **Full Stack .NET Developer**. Built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Clean Component Architecture**, featuring a dark aesthetic, interactive code mockups, project modals, categorized skill matrix, and configurable data structures.

---

## 🌟 Highlights & Features

- **Aesthetic**:
  - Dark mode by default with electric blue, navy, and purple accents.
  - Persistent Light/Dark theme toggle synced with `localStorage`.
  - Glassmorphism navigation, cards, and glowing borders.
- **Hero & Dynamic Specialization**:
  - Cycling animated roles ("ASP.NET Core Specialist", "RESTful API Architect", "React & Modern UI Builder", "SQL Server & Database Engineer").
  - Live `.NET 8 / C#` terminal code preview card with dependency injection and endpoint mockups.
  - Call-to-actions: *View Projects*, *Contact Me*, and *Download Resume*.
- **Interactive Technical Skills Matrix**:
  - Filter by category: **Backend (.NET)**, **Frontend**, **Database**, **Architecture & Security**, **Tools & DevOps**.
  - Contextual proficiency tags (*Primary Core*, *Production*, *Architectural*).
- **Featured Projects & Architecture Modal**:
  - **DocQuick Appointment Management System** (ASP.NET Core Web API, React, MySQL, JWT RBAC).
  - **MedSense Healthcare Reporting System** (ASP.NET Core, SQL Server, Stored Procedures, Dapper).
  - **Personal Portfolio & Engineering Showcase** (React 19, Tailwind CSS, Framer Motion).
  - Interactive deep-dive modal detailing Problem Solved, Architecture Highlights, and Key Features.
- **Career Journey & Services**:
  - Timeline-based experience section with responsibilities and key engineering insights.
  - 5 core service offerings with collaboration requests.
- **Contact & Opportunity Pipelines**:
  - Client-side validated contact form with celebratory confetti.
  - Configurable **EmailJS** integration with safe mailto fallback.
  - Dedicated **"Hire Me"** opportunity dialog with role selector.
  - One-click email copy with instant toast notifications.

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg              # Modern developer SVG favicon
│   └── resume.pdf               # Downloadable resume PDF
├── src/
│   ├── assets/                  # Static assets and icons
│   ├── components/
│   │   ├── about/               # About section & education cards
│   │   ├── common/              # Navbar, Footer, Button, Modal, Badge, ThemeToggle, SocialIcons
│   │   ├── contact/             # Contact section, ContactForm, HireMeModal
│   │   ├── experience/          # Work experience timeline
│   │   ├── hero/                # Hero section, terminal mockup, stats
│   │   ├── projects/            # ProjectCard, ProjectModal, ProjectVisual, Projects container
│   │   ├── resume/              # ResumeSection & ResumeModal
│   │   ├── services/            # Service cards & collaboration flows
│   │   └── skills/              # Categorized skills grid & filtering
│   ├── context/
│   │   ├── ThemeContext.jsx     # Dark/light theme provider with localStorage sync
│   │   └── ToastContext.jsx     # Animated toast notification manager
│   ├── data/
│   │   └── portfolioData.js     # Single configuration file for all portfolio content
│   ├── hooks/
│   │   └── useScrollSpy.js      # Scrollspy hook for active navbar section
│   ├── pages/
│   │   ├── HomePage.jsx         # Main one-page portfolio layout
│   │   └── NotFoundPage.jsx     # Custom 404 route page
│   ├── App.css                  # Clean utility stylesheet
│   ├── App.jsx                  # Root router & provider configuration
│   ├── index.css                # Tailwind CSS v4, glassmorphism, scrollbars, animations
│   └── main.jsx                 # Vite React entry point
├── .env.example                 # Environment variables template for EmailJS
├── index.html                   # SEO metadata, OpenGraph tags, Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration with @tailwindcss/vite
└── README.md                    # Project documentation & deployment guide
```

---

## 🚀 Quickstart: Installation & Local Run

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

All portfolio content is centralized in **`src/data/portfolioData.js`**. You do not need to hunt through component files to customize your personal information.

### 1. Personal & Contact Details
Open `src/data/portfolioData.js` and edit the `personal` object:
```javascript
personal: {
  name: "Your Name",
  shortName: "Your First Name",
  initials: "YN",
  role: "Full Stack .NET Developer",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "Your City / Remote",
  ...
}
```

### 2. Updating Resume PDF
1. Save your resume as `resume.pdf`.
2. Place it directly inside the `public/` folder (`public/resume.pdf`).
3. The "Download Resume" buttons will immediately download your file.

### 3. Projects & Repositories
Update the `projects` array in `src/data/portfolioData.js`:
- Add your real GitHub repository URL in `links.github`.
- Add your live demo link in `links.live`.
- Set `isConfigured: true` once your links are live.

### 4. Optional: Connecting EmailJS for Direct Contact Form Submissions
1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/) (Free tier available).
2. Create an Email Service (e.g. Gmail) and copy your **Service ID**.
3. Create an Email Template with variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, and copy your **Template ID**.
4. Retrieve your **Public Key** from Account Settings.
5. Create a file named `.env` in the root folder with:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
> **Note**: If you don't configure EmailJS, the form gracefully falls back to creating a pre-filled draft in the visitor's default email client (`mailto:`) with all fields intact.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [https://vercel.com/](https://vercel.com/) and log in with GitHub.
3. Click **Add New Project** and import your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. (Optional) Add your EmailJS environment variables in the Vercel dashboard under **Project Settings > Environment Variables**.
7. Click **Deploy**.

> **Single Page App Routing on Vercel**:
> If you need deep routing support on Vercel, create a `vercel.json` file in the root with:
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
> }
> ```

---

### Deploy to Netlify
1. Push your repository to GitHub.
2. Go to [https://www.netlify.com/](https://www.netlify.com/) and click **Add new site > Import an existing project**.
3. Select your repository.
4. Set build settings:
   - **Base directory**: (leave blank)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. (Optional) Add environment variables in **Site settings > Environment variables**.
6. Create a `public/_redirects` file with the following line for SPA routing:
   ```text
   /*    /index.html   200
   ```
7. Click **Deploy Site**.

---

## ✅ Quality & Testing Checklist

- [x] **Navigation**: Sticky glassmorphism header, smooth scroll to `#home`, `#about`, `#skills`, `#projects`, `#experience`, `#services`, `#contact`.
- [x] **Theme Toggle**: Functional dark & light theme toggle with persistent `localStorage` preference and smooth color transition.
- [x] **Mobile Responsiveness**: Verified on mobile (375px), tablet (768px), and desktop (1280px+).
- [x] **Hero Section**: Dynamic specialization role rotator, status pill, CTA buttons, and interactive `.NET Program.cs` code terminal mockup.
- [x] **Skills Matrix**: Interactive category filtering (*Backend, Frontend, Database, Architecture, Tools, All*).
- [x] **Projects & Modal**: Filterable project gallery with deep-dive modal detailing problem, architecture, features, and stack.
- [x] **Experience Timeline**: Structured career timeline with responsibilities and engineering insights.
- [x] **Services**: 5 developer service cards with collaboration inquiry triggers.
- [x] **Resume Download**: Modal with preview summary, direct PDF download, and configuration instructions.
- [x] **Contact Form**: Client-side field validation, EmailJS integration with safe mailto fallback, and confetti animation.
- [x] **Accessibility & Motion**: Proper semantic elements, ARIA labels, keyboard focus rings, and `prefers-reduced-motion` compliance.
