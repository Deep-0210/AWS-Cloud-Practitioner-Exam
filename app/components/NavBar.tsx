"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function NavBar() {
  const { dark, toggle } = useTheme();

  return (
    <nav className="bg-[#232f3e] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold text-[#ff9900] flex items-center gap-2">
          <span className="text-2xl">☁️</span> AWS Practice Tests
        </Link>
        <Link href="/results" className="hover:text-[#ff9900] transition-colors text-sm">
          📊 Results
        </Link>
      </div>
      <button
        onClick={toggle}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-xl"
        aria-label="Toggle theme"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
