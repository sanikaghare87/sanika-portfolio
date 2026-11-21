# Sanika Ghare - Personal Portfolio Website

A modern, elegant, and responsive personal portfolio website crafted for **Sanika Ghare**, an Artificial Intelligence & Data Science Engineering student at Dr. D. Y. Patil College of Engineering and Innovation, Pune.

Designed with a **Lavender and White** visual identity tailored for college opportunities, internships, and the Incubation Mentorship Program.

---

## 🎨 Design & Highlights

- **Theme**: Lavender, soft purple, and crisp white palette with subtle glassmorphism, soft ambient blurs, and elegant cards.
- **Typography**: Clean, professional layout utilizing the Google Font *Plus Jakarta Sans*.
- **Hero Section**: Eye-catching introduction with status badge, tagline, profile photo frame, and quick call-to-action buttons.
- **About Me**: Highlights academic focus, problem-solving mindset, and continuous innovation.
- **Education**: Detailed education card representing the B.Tech AI & Data Science journey.
- **Technical Skills**: Modern skill cards with crisp vector icons (**no fake percentages or proficiency bars**).
- **Projects**: Dedicated project cards with custom bespoke illustrations:
  1. *Personal Finance Advisor Bot* (Python, HTML, CSS, JavaScript, Google Gemini AI)
  2. *NexaCare – AI Healthcare Platform*
  3. *RoadMind AI*
- **Certifications**: Minimalist, clean cards featuring exclusively the five verified certificates:
  1. Bajaj Manufacturing System
  2. Internal Smart India Hackathon
  3. NASSCOM FutureSkills Prime
  4. Imarticus Learning
  5. Eureka!
- **Contact Section**: Clean, interactive contact form with editable placeholders for Email, LinkedIn, and GitHub.
- **Responsiveness**: Fully adaptive across mobile phones, tablets, and desktop displays.

---

## 📁 Project Structure

```text
sanika-portfolio/
├── index.html              # Main HTML5 structure with semantic sections
├── styles.css              # Lavender & White theme styles, layout, and animations
├── script.js               # Navigation spy, mobile menu toggle, form handler & modal
├── README.md               # Documentation and deployment guide
└── assets/
    ├── profile-avatar.svg  # Elegant vector placeholder for your profile picture
    ├── project-finance.svg # Bespoke illustration for Personal Finance Advisor Bot
    ├── project-nexacare.svg# Bespoke illustration for NexaCare AI Healthcare Platform
    └── project-roadmind.svg# Bespoke illustration for RoadMind AI
```

---

## 🚀 How to Run & Preview Locally

You can preview the website immediately using any of these simple methods:

### Method 1: Direct File Open (Instant)
1. Navigate to the portfolio folder:  
   `C:\Users\LENOVO\.gemini\antigravity\scratch\sanika-portfolio`
2. Double-click `index.html`. It will instantly open in your default web browser (Chrome, Edge, Firefox, Brave).

### Method 2: Using the Included Local Server
Run this directly in PowerShell inside the folder:
```powershell
.\start-server.bat
```
or:
```powershell
powershell -ExecutionPolicy Bypass -File "serve.ps1"
```
It will automatically launch your browser to `http://localhost:8000/`.

### Method 3: VS Code / Cursor "Live Server" Extension
1. Open the folder in VS Code or Antigravity IDE.
2. Right-click on `index.html` and select **"Open with Live Server"**.

---

## ✏️ Profile & Links Configured

- **Email**: `sanikaghare87@gmail.com`
- **LinkedIn**: `https://www.linkedin.com/in/sanika-ghare-99186b384`
- **GitHub**: `https://github.com/sanikaghare87`

### Optional Customizations:
1. **Profile Picture**:
   - Save your actual photo (e.g. `sanika.jpg` or `photo.png`) into the `assets/` folder.
   - In `index.html`, locate line ~110 and update:
     ```html
     <!-- Change src="assets/profile-avatar.svg" to: -->
     <img src="assets/sanika.jpg" alt="Sanika Ghare Profile Picture">
     ```

2. **Project Links**:
   - In `index.html`, look for `<a href="#" class="project-btn" ...>` inside the `#projects` section.
   - Replace `#` with your actual GitHub repository URL or deployed web link:
     ```html
     <a href="https://github.com/sanikaghare87/finance-advisor-bot" target="_blank" class="project-btn">
     ```
   - Remove `data-placeholder="true"` once you add your live URL so it opens directly.

---

## 🌐 How to Deploy Online (Free Hosting)

### Option 1: GitHub Pages (Recommended for Students)
1. Create a free account at [github.com](https://github.com) if you don't already have one.
2. Create a new repository named `sanika-portfolio` (or `<your-username>.github.io`).
3. Push all files from `sanika-portfolio/` to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sanika-portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages**.
5. Under **Branch**, select `main` and root `/`, then click **Save**.
6. In 1–2 minutes, your website will be live at:
   `https://<your-username>.github.io/sanika-portfolio/`

### Option 2: Vercel (Fast & One-Click)
1. Sign up at [vercel.com](https://vercel.com).
2. Connect your GitHub repository or drag and drop the `sanika-portfolio` folder directly onto the Vercel Dashboard.
3. Click **Deploy**. Vercel will provide an instant HTTPS link (e.g., `https://sanika-ghare.vercel.app`).

### Option 3: Netlify (Drag and Drop)
1. Visit [netlify.com](https://netlify.com) and log in.
2. Go to the **Sites** tab and drag the entire `sanika-portfolio` directory onto the upload box.
3. It will deploy within seconds with a live URL.
