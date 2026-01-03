# Boardroom Bandit Restaurant Website

A modern, responsive restaurant website built with Next.js, TypeScript, and Tailwind CSS. This project showcases the Boardroom Bandit restaurant's menu, reservation system, and brand identity.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans, Bebas Neue (locally hosted)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/3nxni8/Bandit.git
cd Bandit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Bandit/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── menu/              # Menu page
│   ├── reservations/      # Reservations page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── menu/             # Menu-specific components
│   ├── reservation/      # Reservation form components
│   └── ui/               # Reusable UI components
├── constants/            # Application constants
├── data/                 # Static data and content
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── Fonts/           # Custom font files
├── types/                # TypeScript type definitions
└── next.config.ts        # Next.js configuration
```

## 🎨 Features

- **Responsive Design:** Fully responsive across all devices
- **Interactive Menu:** Dynamic menu with category filtering
- **Reservation System:** Online table booking form
- **Modern UI:** Clean, professional design with custom branding
- **Performance Optimized:** Built with Next.js for optimal performance
- **Type-Safe:** Full TypeScript implementation
- **Accessibility:** Semantic HTML and ARIA labels

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript compiler check
```

## 🏗️ Building for Production

```bash
npm run build
npm start
```

The production build will be optimized and ready for deployment.

## 🚢 Deployment

This project can be easily deployed on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**
- Any platform supporting Node.js

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/3nxni8/Bandit)

## 📝 Environment Variables

Currently, this project doesn't require environment variables. If you add external services (like form submissions, analytics, etc.), create a `.env.local` file:

```bash
# Example
# NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Authors

- **3nxni8** - Initial work

## 📞 Support

For support, please open an issue in the GitHub repository.

## 🔍 Additional Documentation

- [Frontend Engineering Review](./FRONTEND_ENGINEERING_REVIEW.md) - Comprehensive review of frontend practices
- [Improvements Action Plan](./IMPROVEMENTS_ACTION_PLAN.md) - Prioritized list of improvements

---

**Note:** This is a restaurant website project. For the best experience, view it on a modern browser with JavaScript enabled.
