# NEVA Estudio - Architecture Website

A modern, professional website for NEVA Estudio, an architecture firm based in Gijón, Asturias. Built with Next.js, React, TypeScript, and Tailwind CSS.

![NEVA Estudio](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🏗️ About NEVA Estudio

NEVA Estudio is an architecture firm with over 10 years of experience, specializing in residential and commercial projects throughout Asturias, Spain. The studio focuses on humanistic and close architecture that adapts to clients' needs and the environment.

## ✨ Features

### 🎨 Modern Design
- **Minimalist Architecture Aesthetic** - Clean, professional design
- **Responsive Layout** - Optimized for all devices
- **Smooth Animations** - Powered by Framer Motion
- **Professional Typography** - Architectural-inspired font choices

### 🖼️ Project Showcase
- **Interactive Image Carousel** - Hero section with project highlights
- **Project Gallery** - Detailed project modals with image navigation
- **Expandable Image View** - Toggle between normal and expanded image modes
- **Thumbnail Navigation** - Easy browsing through project images

### 🏢 Services Section
- **Detailed Service Modals** - Comprehensive information for each service
- **Residential Services** - Viviendas unifamiliares, colectivas, cambios de uso, reformas
- **Commercial Services** - Locales comerciales, proyectos de actividad
- **Certifications** - Certificados de obra nueva antigua y eficiencia energética
- **Urban Planning** - Proyectos urbanísticos y parcelación

### 👥 About & Team
- **Studio Information** - History, philosophy, and approach
- **Team Profiles** - Andrés Suárez and Laín Fernández
- **Interactive Modal** - Tabbed interface with detailed content
- **Professional Photography** - High-quality team and studio images

### 📞 Contact & Communication
- **Contact Form** - With validation and success/error handling
- **Individual Contact Info** - Direct contact for each architect
- **Location Details** - Studio address in Gijón
- **Social Links** - LinkedIn profiles for team members

### 🌐 Technical Features
- **Spanish Language Support** - Complete localization
- **SEO Optimized** - Proper metadata and structure
- **Performance Optimized** - Next.js static generation
- **Accessibility** - WCAG compliant design
- **Legal Pages** - Privacy policy, cookies, accessibility policy

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Zod validation
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Javierlozo/neva-estudio.git
   cd neva-estudio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
neva-estudio/
├── public/
│   ├── hero/                 # Hero carousel images
│   ├── Casa NVP/           # Project images
│   ├── Casa RDV/            # Project images
│   ├── Loft Rural/          # Project images
│   ├── estudio/             # Team photos
│   └── *.svg                # Logos and icons
├── src/
│   ├── app/
│   │   ├── [locale]/        # Internationalized routes
│   │   ├── aviso-legal/     # Legal pages
│   │   └── layout.tsx       # Root layout
│   ├── components/
│   │   ├── HeroSection.tsx  # Hero carousel
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ServiceModal.tsx
│   │   └── AboutModal.tsx
│   └── hooks/
│       └── useTranslations.ts
├── messages/                # Translation files
└── tailwind.config.ts       # Tailwind configuration
```

## 🎯 Key Components

### HeroSection
- Animated logo and branding
- Image carousel with auto-advance
- Smooth transitions and professional animations

### ProjectsSection
- Project grid with filtering
- Expandable project modals
- Image navigation with thumbnails
- Expandable image view toggle

### ServicesSection
- Service cards with detailed information
- Modal system for comprehensive service details
- "Ver más" buttons for specific services

### AboutSection
- Studio information and philosophy
- Interactive modal with tabbed content
- Team member profiles and contact info

## 🌍 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **GitHub Pages**: Requires static export configuration
- **Traditional Hosting**: Build and upload dist folder

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Design System

### Colors
- **Primary**: Gray scale (900, 800, 700, 600, 500, 400, 300, 200, 100, 50)
- **Accent**: Yellow-400 (carousel indicators)
- **Background**: White and Gray-50

### Typography
- **Headings**: Font-thin for architectural aesthetic
- **Body**: Font-light for readability
- **Tracking**: Tight spacing for modern look

### Spacing
- **Sections**: py-32 (128px vertical padding)
- **Containers**: max-w-7xl with responsive padding
- **Grid**: Consistent gap-8 spacing

## 📄 Legal Pages

The website includes comprehensive legal pages:
- **Política de Privacidad** - Privacy policy
- **Política de Cookies** - Cookie policy  
- **Política de Accesibilidad** - Accessibility policy
- **Aviso Legal** - Legal notice

## 🤝 Contributing

This is a client project for NEVA Estudio. For any issues or suggestions, please contact the development team.

## 📞 Contact

**NEVA Estudio**
- **Location**: Calle Decano Prendes Pando 20, 1°E, Gijón, Asturias
- **Email**: estudio@nevaestudio.com
- **Website**: [nevaestudio.com](https://nevaestudio.com)

**Team Members**:
- **Andrés Suárez**: asuarez@nevaestudio.com
- **Laín Fernández**: lainff@nevaestudio.com

## 📜 License

This project is proprietary to NEVA Estudio. All rights reserved.

---

Built with ❤️ for NEVA Estudio by [Luis Lozoya](https://github.com/Javierlozo)