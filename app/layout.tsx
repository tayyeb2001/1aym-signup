import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1aym - Beta Access Coming Soon",
  description: "Join the waitlist for 1aym - Your AI Workforce. Deployed in Days. 72-hour hackathon in progress.",
  keywords: ["AI", "automation", "workforce", "beta", "1aym"],
  openGraph: {
    title: "1aym - Beta Access Coming Soon",
    description: "Your AI Workforce. Deployed in Days.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1aym - Beta Access Coming Soon",
    description: "Your AI Workforce. Deployed in Days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
