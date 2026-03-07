# Hi there 👋

## Live Demo: [https://resume-pink-nine.vercel.app](https://resume-pink-nine.vercel.app)

## Features

This is my personal interactive resume designed to showcase my skills and projects. It features a cyberpunk-inspired UI and includes a fully functional "Hire Me" modal with real-time email routing, allowing recruiters to send job offers directly to my inbox.

## 🛠️ Tools & Tech Stack

- **Core:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Integrations:** Resend (Email API) + Server Actions

## 🗂️ Structure

- **Hero Section:** Quick introduction, dynamic background, and the "Hire Me" action trigger.
- **Timeline & Projects:** A structured view of my commercial experience and interactive cards for my pet projects.
- **Footer:** Copyright and essential links.

## 🤪 What I Learned

- Deepened my knowledge of Tailwind CSS (complex gradients, grid layouts).
- Successfully integrated a real-world email service (Resend) using Next.js backend capabilities.
- Leveled up my animation skills with Framer Motion (scroll-driven effects, staggered appearances).
- Improved overall Next.js project architecture and component isolation.

## 🤔 Future Improvements

- Implementing even smoother, highly complex animations.
- Adding more micro-interactions for better user engagement.
- Adding unit and integration tests.
- Implementing dark/light theme toggle.

## 🛜 How to Run Locally

If you want to run this project on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/M1g3l14Ka/pet-projects.git
   cd pet-projects/Next-projects/resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory
   - Copy the contents from `.env.example`
   - Add your Resend API key and email configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   RECIPIENT_EMAIL=your_email@example.com
   FROM_EMAIL=Portfolio Contact <your-verified-domain@yourdomain.com>
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

