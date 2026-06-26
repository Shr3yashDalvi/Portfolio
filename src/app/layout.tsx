import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyash Dalvi | Backend + Data + ML Developer",
  description: "Personal portfolio of Shreyash Dalvi. B.Tech Information Technology student building reliable systems at the intersection of backend, data validation pipelines, and machine learning.",
  keywords: ["Shreyash Dalvi", "Software Developer", "Backend Developer", "Data Engineer", "FastAPI", "Python", "SQL", "Machine Learning", "Guinness World Record Holder", "Roll Ball", "Ice Hockey"],
  authors: [{ name: "Shreyash Dalvi" }],
  openGraph: {
    title: "Shreyash Dalvi | Software Developer Portfolio",
    description: "B.Tech IT student building reliable backend, data, and ML systems using Python, SQL, FastAPI, React, and scikit-learn.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#111111]">
        {children}
      </body>
    </html>
  );
}
