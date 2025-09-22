# Neutrawise

Neutrawise is a modern web application designed to promote sustainability and environmental awareness, featuring a comprehensive carbon footprint calculator. Built with React, TypeScript, Vite, and Tailwind CSS, it features a clean, responsive UI and modular architecture for easy scalability and maintainability.

## Features

### Carbon Footprint Calculator
- 🌍 Comprehensive household emissions calculation
- 📊 Detailed breakdown of emission sources
- 💾 Data persistence with Supabase backend
- 🔄 Real-time calculations and updates
- 📱 Mobile-responsive interface
- 📈 Interactive data visualization
- 💡 Personalized recommendations
- 📑 Exportable reports in JSON format

### Core Platform Features
- **Landing Page**: Engaging hero section, features overview, testimonials, and pricing preview
- **Dashboard**: Interactive dashboard for user insights and analytics
- **Blog**: Informative articles and updates on sustainability topics
- **About & Contact**: Company information and contact form
- **Reusable UI Components**: Comprehensive collection of UI components
- **Custom Hooks**: For mobile detection and toast notifications
- **Asset Management**: Optimized images and SVGs for fast loading

### Calculator Components
- Vehicle emissions tracking
- Home energy consumption analysis
- Waste and recycling impact
- Upgrade recommendations
- Maintenance savings calculator

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS
- **Linting**: ESLint

## Project Structure

```
Neutrawise/
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── placeholder.svg
│   ├── robots.txt
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── business-meeting.jpg
│   │   ├── dashboard-preview.jpg
│   │   ├── green-office.jpg
│   │   ├── hero-earth.jpg
│   │   ├── neutrawise-logo.png
│   │   ├── renewable-energy.jpg
│   │   ├── report-cover.jpg
│   │   ├── team-working.jpg
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PricingPreviewSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── use-toast.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   ├── lib/
│   │   ├── utils.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Bun (optional, for bun.lockb)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/madnansultandotme/Neutrawise.git
   cd Neutrawise
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   bun install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   bun run dev
   ```
4. **Open in browser:**
   Visit `http://localhost:5173` (default Vite port)

### Build for Production
```sh
npm run build
# or
bun run build
```

### Linting
```sh
npm run lint
```

## Configuration Files
- `vite.config.ts`: Vite configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `eslint.config.js`: ESLint configuration
- `tsconfig*.json`: TypeScript configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Changelog

### [1.1.0] - 2025-09-22
#### Added
- Carbon Footprint Calculator
  - Comprehensive household emissions tracking
  - Vehicle emissions calculator
  - Home energy consumption analysis
  - Waste and recycling impact calculator
  - Upgrade recommendations system
- Supabase Integration
  - User authentication system
  - Data persistence for calculator results
  - Secure data storage
- Export Functionality
  - JSON report generation
  - Detailed emissions breakdown
  - Personalized recommendations

### [1.0.0] - 2025-09-15
#### Added
- Initial release of the Neutrawise platform
- Landing page with hero section
- Features overview
- Testimonials section
- Pricing preview
- Blog functionality
- About and contact pages
- Mobile responsiveness
- UI component library

#### Technical Updates
- React 18 implementation
- TypeScript integration
- Vite build system
- Tailwind CSS styling
- ESLint configuration
- PostCSS setup

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact [madnansultandotme](mailto:your-email@example.com).

---

**Neutrawise** — Empowering sustainability through technology.
