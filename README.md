# 1aym Beta Signup - Landing Page

A modern, animated coming soon landing page for 1aym beta signups, built during a 72-hour hackathon.

## Features

- ⏱️ **72-Hour Countdown Timer** - Real-time countdown to hackathon completion
- 🎨 **Animated Feature Vault** - Interactive showcase of upcoming features
- 📝 **Typeform-Style Waitlist** - Multi-step form for beta signups
- 📊 **Social Proof Counter** - Live signup stats and recent activity feed
- 🚀 **Hackathon Progress Tracker** - Real-time development milestone tracking
- 🎯 **1aym Branding** - Matches the main 1aym.com design language

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** CSS animations + React state

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
1aym-signup/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   ├── CountdownTimer.tsx      # 72-hour countdown
│   ├── FeatureVault.tsx        # Animated feature showcase
│   ├── WaitlistForm.tsx        # Multi-step signup form
│   ├── SocialProof.tsx         # Live stats & activity
│   └── HackathonProgress.tsx   # Development tracker
└── public/               # Static assets
```

## Customization

### Countdown Timer

Edit the `hackathonEnd` date in `components/CountdownTimer.tsx`:

```typescript
const hackathonEnd = new Date('2026-02-03T00:00:00').getTime();
```

### Features

Modify the features array in `components/FeatureVault.tsx` to showcase your own features.

### Form Submission

Replace the form submission logic in `components/WaitlistForm.tsx` with your actual API endpoint:

```typescript
// In handleSubmit function
await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- Railway
- Render
- AWS Amplify

## Design Philosophy

The design matches 1aym.com's aesthetic:
- **Dark mode** with slate/blue color scheme
- **Gradient accents** (cyan to purple)
- **Trust signals** (SSL, GDPR, response times)
- **Metrics-driven** (real-time stats, progress tracking)
- **Interactive elements** (hover effects, animations)

## License

MIT

## Credits

Built for 1aym during a 72-hour hackathon sprint.
