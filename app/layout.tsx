import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Suman - dev",
  description:
    "Frontend Engineer and Web Designer, currently at Synauris. Focused on interfaces and experiences, working remotely from Bhubaneswar, India.",
  generator: "Next.js",
  applicationName: "Suman Dey",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Suman Dey — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Synauris. Focused on interfaces and experiences, working remotely from Bhubaneswar, India.",
    url: "https://www.sumanfolio-v3.vercel.app/",
    siteName: "www.sumanfolio-v3.vercel.app/",
    images: [
      {
        url: "https://drive.google.com/file/d/12iQoZ0KgZoQt7_85iI4Xx3SxTkbTwTGS/view?usp=sharing",
        width: 1200,
        height: 630,
        alt: "Suman Dey — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Dey — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Synauris. Focused on interfaces and experiences, working remotely from Bhubaneswar, India.",
    creator: "sumandey__",
    creatorId: "1243720976552144897",
    images: [
      "https://drive.google.com/file/d/12iQoZ0KgZoQt7_85iI4Xx3SxTkbTwTGS/view?usp=sharing",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
