# Art of Living - Great Noida Chapter Website

A modern, responsive website for the Art of Living Great Noida Chapter built with Next.js, TypeScript, and shadcn/ui.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Vercel** - Deployment platform

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm or yarn package manager
- Git

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd next_aol_gn_website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add input
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── navigation.tsx    # Navigation component
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings (usually auto-detected)
5. Click "Deploy"

## 🎯 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Clean, professional design with shadcn/ui
- **Type Safety** - Full TypeScript support
- **SEO Optimized** - Proper meta tags and structure
- **Fast Performance** - Optimized with Next.js
- **Accessible** - WCAG compliant components

## 📝 Customization

### Colors
The website uses a custom color scheme with indigo as the primary color. You can modify colors in:
- `src/app/globals.css` - CSS variables
- `tailwind.config.js` - Tailwind configuration

### Content
Update the content in:
- `src/app/page.tsx` - Homepage content
- `src/components/navigation.tsx` - Navigation menu
- `src/app/layout.tsx` - Site metadata

### Adding New Pages
1. Create a new file in `src/app/[page-name]/page.tsx`
2. Add navigation link in `src/components/navigation.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For questions or support, please contact the Art of Living Great Noida Chapter team.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for the Art of Living community.
