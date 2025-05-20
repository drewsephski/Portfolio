# 🚀 My Portfolio Website

## **3D Animations Portfolio**

A modern, interactive portfolio built with cutting-edge web technologies and featuring smooth animations and real-time interactions.

- Interactive 3D animations using Spline
- Smooth scrolling with Lenis
- Real-time cursor tracking with Socket.IO
- Modern UI components with Shadcn UI
- Responsive design with Tailwind CSS
- Type-safe with TypeScript
- Optimized performance with Next.js

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animation**: Framer Motion
- **3D**: Spline Tool
- **Real-time**: Socket.IO
- **Scrolling**: Lenis
- **State Management**: React Context
- **Development Tools**: ESLint, Prettier

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/drewsephski/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Install the Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy your project:
```bash
vercel
```

Or deploy directly from GitHub:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"

### Deploy to Netlify

1. Install the Netlify CLI (optional):
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy your project:
```bash
netlify deploy
```

Or deploy directly from GitHub:
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Select "GitHub" as your repository provider
4. Connect your GitHub account
5. Select this repository
6. Click "Deploy site"

### Deployment Configuration

For both platforms, ensure your repository has these environment variables set:

- `NEXT_PUBLIC_VERCEL_ENV`: Automatically set by Vercel
- `NEXT_PUBLIC_VERCEL_URL`: Automatically set by Vercel
- `NODE_VERSION`: Node.js version (18.x recommended)

The deployment process will automatically handle:
- Building the Next.js application
- Optimizing assets
- Setting up proper routing
- Configuring SSL certificates

After deployment, your site will be available at your chosen domain (e.g., `yourname.vercel.app` or `yourname.netlify.app`).

## Project Structure

```
src/
├── components/        # React components
├── contexts/         # React Context providers
├── data/            # Static data and configurations
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## License

MIT License - feel free to use this code as a reference for your own projects.

## Author

Drew Sepeczi
- GitHub: [drewsephski](https://github.com/drewsephski)
- Portfolio: [drewsephski.vercel.app](https://drewsephski.vercel.app)
