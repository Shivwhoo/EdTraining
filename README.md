# 📚 EdTraining — Online Education Platform

<div align="center">

![EdTraining Banner](https://img.shields.io/badge/EdTraining-Online%20Education%20Platform-FEF08A?style=for-the-badge&labelColor=1C1C1C)

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-ed--training.vercel.app-1C1C1C?style=for-the-badge)](https://ed-training.vercel.app)
[![Backend](https://img.shields.io/badge/⚙️%20Backend%20API-edtraining.onrender.com-4A4A4A?style=for-the-badge)](https://edtraining.onrender.com/health)

</div>

---

## 🌟 Overview

**EdTraining** is a full-stack online education platform offering structured academic programs for students from Grade 8 through competitive exam preparation. It features a seamless lead generation system, online subscription & payment flow, and a fully responsive, modern UI.

---

## ✨ Features

### 🎓 Academic Programs
- **Grade 8–10** — All Boards (CBSE, ICSE, State Boards)
- **Grade 11–12** — All Boards with Science/Commerce tracks
- **Competitive Exams** — JEE, NEET, and more
- **Engineering (All Branches)** — Specialized engineering prep
- **Home Schooling** — Personalized curriculum for home-schooled students
- **Career Guidance** — One-on-one counseling and roadmap planning

### 📋 Lead Generation & Forms
- **Demo Class Booking** — Students can book a free demo session with full form validation
- **Contact Form** — General enquiry form with email notification to admin
- **Home Schooling Consultation** — Dedicated consultation request form
- All forms powered by **React Hook Form + Zod** schema validation

### 💳 Online Subscription & Payments
- Course subscription plans with Razorpay payment gateway integration
- Webhook handling for payment verification
- Order creation & payment confirmation flow
- Subscription records stored in MongoDB

### 📧 Email Notifications
- Admin email alerts on every form submission via **Resend**
- Professionally formatted HTML emails with lead details
- "Return to Website" CTA button in emails pointing to the live frontend

### 🔒 Security & Reliability
- **Rate limiting** — Max 5 API requests per IP per hour (prevents spam)
- **Zod validation** on all backend routes
- **CORS policy** — Allows only the production Vercel domain + preview deployments
- Environment-based configuration (no secrets in source code)

### 🎨 UI / UX
- **Brutalist / Tactile Notebook** design theme — bold borders, paper textures, rotated stamps
- **Framer Motion** animations — hover lifts, page transitions, micro-interactions
- **Active navbar** — highlights the current page automatically
- **Scroll-to-top** on every page navigation
- Fully **responsive** — mobile, tablet, desktop
- Toast notifications via **Sonner**
- SEO meta tags on every page via **React Helmet Async**

### 📄 Legal Pages
- Privacy Policy
- Terms & Conditions

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **React Router DOM v6** | Client-side routing & active nav |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |
| **Sonner** | Toast notifications |
| **React Helmet Async** | SEO meta tags |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js + Express** | REST API server |
| **MongoDB + Mongoose** | Database & ODM |
| **Resend** | Transactional email delivery |
| **Razorpay** | Payment gateway |
| **Zod** | Request body validation |
| **express-rate-limit** | API rate limiting |
| **CORS** | Cross-origin request handling |
| **dotenv** | Environment variable management |

### Infrastructure
| Service | Purpose |
|---------|---------|
| **Vercel** | Frontend hosting & deployment |
| **Render** | Backend hosting & deployment |
| **MongoDB Atlas** | Cloud database |
| **GitHub** | Source control & CI/CD |

---

## 📁 Project Structure

```
EdTraining/
├── frontend/
│   ├── public/                  # Static assets (logos, images)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Navbar with active state
│   │   │   ├── Footer.jsx       # Footer with links
│   │   │   ├── Layout.jsx       # Page wrapper
│   │   │   └── ScrollToTop.jsx  # Scroll reset on navigation
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Grade8To10.jsx
│   │   │   ├── Grade11To12.jsx
│   │   │   ├── CompetitiveExams.jsx
│   │   │   ├── EngineeringAllBranches.jsx
│   │   │   ├── HomeSchooling.jsx
│   │   │   ├── CareerGuidance.jsx
│   │   │   ├── DemoBooking.jsx
│   │   │   ├── OnlineSubscription.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── LegalPrivacy.jsx
│   │   │   └── TermsAndConditions.jsx
│   │   ├── App.jsx              # Routes & Toaster setup
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env                     # VITE_API_URL
│   ├── .gitignore
│   └── package.json
│
└── backend/
    ├── models/
    │   ├── Submission.js         # Lead/form submission model
    │   └── SubscriptionPayment.js# Payment record model
    ├── routes/
    │   ├── api.js               # Contact, demo booking, homeschool routes
    │   └── payment.js           # Razorpay order & webhook routes
    ├── .env                     # Secrets & config
    └── server.js                # Express app + CORS + rate limiting
```



---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/Shivwhoo/EdTraining.git
cd EdTraining
```

### 2. Start the Backend
```bash
cd backend
# Create .env with the variables listed above
npm install
npm run dev
# Runs on http://localhost:5000
```

### 3. Start the Frontend
```bash
cd frontend
# Create .env with VITE_API_URL=http://localhost:5000
npm install
npm run dev
# Runs on http://localhost:5173
```

---

## 🌐 Deployment

| Layer | Platform | Auto-deploy |
|-------|----------|-------------|
| Frontend | [Vercel](https://vercel.com) | ✅ On every `git push` to `main` |
| Backend | [Render](https://render.com) | ✅ On every `git push` to `main` |
| Database | MongoDB Atlas | — Always-on cloud cluster |

> Set all environment variables in the respective platform dashboards — **Vercel → Settings → Environment Variables** and **Render → Environment**.

---

## 🤝 Partners

- [EdMentor](https://theedmentor.com)
- [EdCompass](https://theedcompass.com)
- [MeraMinds](https://meraminds.com)

---

<div align="center">

Made with ❤️ by **Shivam Kishore**

[![GitHub](https://img.shields.io/badge/GitHub-Shivwhoo-1C1C1C?style=flat-square&logo=github)](https://github.com/Shivwhoo)

</div>
