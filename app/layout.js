import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura Note — Turn Your Notes Into Study Power",
  description:
    "AI-powered summaries, flashcards, and smarter studying for students. Join the early access waitlist.",
  openGraph: {
    title: "Aura Note — Turn Your Notes Into Study Power",
    description:
      "AI-powered summaries, flashcards, and smarter studying for students. Join the early access waitlist.",
    url: "https://aura-note.com",
    siteName: "Aura Note",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Note — Turn Your Notes Into Study Power",
    description:
      "AI-powered summaries, flashcards, and smarter studying for students. Join the early access waitlist.",
    creator: "@auranote",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
