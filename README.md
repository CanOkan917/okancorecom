# 🚀 Okancore | Personal Portfolio Website

![Project Status](https://img.shields.io/badge/status-active-success)
![Build](https://img.shields.io/badge/build-vite-646cff)
![Tech](https://img.shields.io/badge/stack-react%20%7C%20typescript-blue)

This repository contains the source code for my personal portfolio website, **[okancore.com](https://okancore.com)**. It showcases my projects, professional experience, and technical skills as a Software Engineer.

The project is built with a focus on performance, clean architecture, and modern UI/UX principles using **Vite** and **React**.

## ✨ Features

* **Modern UI/UX:** Glassmorphism effects, gradient borders, and smooth transitions.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
* **Interactive Components:**
    * Custom Image Gallery with Zoom & Keyboard navigation (Swiper.js).
    * Testimonial Slider.
    * Smooth scrolling navigation with Active State detection.
* **Dark Mode:** Default dark theme with neon accents (Cyan/Purple).
* **Performance:** High-performance static build using Vite.

## 🛠️ Tech Stack

* **Core:** [React](https://reactjs.org/) (v19), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations/Sliders:** [Swiper.js](https://swiperjs.com/)

## ⚙️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/canokan917/okancore-portfolio.git
    cd okancore-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static assets (HTML, CSS, JS).

## 🚀 Deployment (Apache / cPanel)

Since this is a Single Page Application (SPA) built with Vite, special configuration is needed for Apache servers (standard cPanel hosting) to handle client-side routing.

1.  Upload the contents of the `dist` folder to your `public_html`.
2.  Create/Edit the `.htaccess` file in the root directory with the following content to prevent 404 errors on page refresh:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## 📂 Project Structure

```bash
src/
├── assets/          # Static images and icons
├── components/      # Reusable UI components (Navbar, Footer, SectionTitle)
├── pages/           # Page views (Home, About, Privacy, Terms)
├── styles/          # Global styles and Tailwind directives
├── App.tsx          # Main application component
└── main.tsx         # Entry point
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="[https://okancore.com](https://okancore.com)">Can Okan</a>
</p>