### **Live Demo:** [resume-pink-nine.vercel.app](https://resume-pink-nine.vercel.app/)

## Features
This is my personal interactive resume designed to showcase my skills and projects. It features a cyberpunk-inspired UI and includes a fully functional **"Hire Me"** modal with real-time email routing, allowing recruiters to send job offers directly to my inbox.

## 🛠 Tools & Tech Stack
- **Core:** Next.js, TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Integrations:** Resend (Email API) + Server Actions

## Structure
- **Hero Section:** Quick introduction, dynamic background, and the "Hire Me" action trigger.
- **Timeline & Projects:** A structured view of my commercial experience and interactive cards for my pet projects.
- **Footer:** Copyright and essential links.

## What I Learned
- Deepened my knowledge of **Tailwind CSS** (complex gradients, grid layouts).
- Successfully integrated a real-world email service (**Resend**) using Next.js backend capabilities.
- Leveled up my animation skills with **Framer Motion** (scroll-driven effects, staggered appearances).
- Improved overall **Next.js** project architecture and component isolation.

## Future Improvements
- Implementing even smoother, highly complex animations.
- Adding more micro-interactions for better user engagement.

## How to Run Locally
If you want to run this project on your machine:
1. Download the archive with the project
2. Open the project in an editor that is convenient for you (I use Vs code)
3. Important:
- Create a .env.local file in the root directory and add your Resend API key to make the contact form work: RESEND_API_KEY=your_api_key_here
5. Open a terminal and type npm run dev
6. You will launch the project at http://localhost:3000/
