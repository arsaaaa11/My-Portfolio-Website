# Full-Stack Portfolio — Next.js + Express + MongoDB

A clean, professional portfolio with a React (Next.js) frontend and a Node.js/Express API storing contact messages in MongoDB.

## Repo Structure
portfolio-fullstack/
  frontend/   # Next.js + Tailwind (port 3000)
  backend/    # Express API + MongoDB (port 5000)

## Quick Start (Local)
1) Backend
- cd backend
- cp .env.example .env (then edit MONGO_URI)
- npm install
- npm run dev

API: http://localhost:5000
Health: GET /api/health

2) Frontend
- cd ../frontend
- npm install
- (optional) create .env.local with: NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
- npm run dev
Open http://localhost:3000

## Deployment
Backend → Render (free) or Railway
- Create a Web Service from backend/
- Env Vars:
  - MONGO_URI = your MongoDB Atlas URI
  - ORIGIN = your frontend domain (e.g., https://your-portfolio.vercel.app)

Frontend → Vercel (best for Next.js)
- Import frontend/ as a project
- Env Vars:
  - NEXT_PUBLIC_API_BASE_URL = your backend URL (e.g., https://your-api.onrender.com)

## Customize
- Replace "Your Name", links, and images in frontend/components/*
- Replace images in frontend/public/
- Add projects in components/Projects.js

## Security
- CORS restricted by ORIGIN
- Rate limiting enabled (60 req/min)
- Helmet security headers
