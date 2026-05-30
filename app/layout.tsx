import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import NavBar from "./components/NavBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWS Cloud Practitioner Practice Tests – Free MCQ Exams 2026",
  description:
    "Free AWS Certified Cloud Practitioner (CLF-C02) practice exams with 23 full-length tests and 1,000+ MCQ questions. Study AWS core services, pricing, security, and cloud concepts to pass on your first attempt.",
  keywords: [
    "AWS Cloud Practitioner practice test",
    "CLF-C02 practice exam",
    "AWS Certified Cloud Practitioner questions",
    "AWS practice MCQ",
    "AWS cloud practitioner free exam",
    "AWS CLF-C02 mock test",
    "AWS certification practice",
  ],
  openGraph: {
    title: "AWS Cloud Practitioner Practice Tests – Free MCQ Exams 2026",
    description:
      "23 full-length AWS CLF-C02 practice exams with 1,000+ questions. Free, no sign-up required.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased min-h-screen`}>
        <ThemeProvider>
          <NavBar />
          <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
