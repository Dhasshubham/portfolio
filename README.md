[text](README.md)# Creative Portfolio Website

A modern, responsive portfolio website built with Next.js and React, featuring dynamic project displays, interactive animations, and a clean, professional design.

Your Name - [shubhamdhas123@gmail.com](mailto:shubhamdhas123@gmail.com)

Project Link: [https://github.com/Dhasshubham/portfolio](https://github.com/Dhasshubham/portfolio)

Live Demo: [https://portfolio-shubhamdhas-projects.vercel.app/](https://portfolio-shubhamdhas-projects.vercel.app/)

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework with custom design tokens

### UI Components

- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, customizable icons
- **Custom Hooks** - useIntersectionObserver, useTypingEffect for animations

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Vercel** - Deployment and hosting platform

### APIs & Data

- **JSON Data** - Local project data storage
- **GitHub API** - Dynamic repository fetching (optional)
- **Fetch API** - Modern HTTP client for API calls

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd creative-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🧪 Challenges Faced & Solutions

### 1. **Smooth Animations Performance**

- **Challenge**: Ensuring animations don't impact performance on lower-end devices
- **Solution**: Used CSS transforms and opacity for GPU acceleration, implemented intersection observer for scroll-triggered animations only when elements are visible

### 2. **Responsive Design Complexity**

- **Challenge**: Making complex layouts work seamlessly across all device sizes
- **Solution**: Adopted mobile-first approach with Tailwind's responsive utilities, tested extensively on various screen sizes

### 3. **Type Safety with Dynamic Data**

- **Challenge**: Maintaining TypeScript safety while working with JSON data and API responses
- **Solution**: Created proper TypeScript interfaces for all data structures and implemented runtime type checking

### 4. **Dark Mode Implementation**

- **Challenge**: Ensuring consistent theming across all components and smooth transitions
- **Solution**: Used CSS custom properties with Tailwind's dark mode, implemented context for state management
