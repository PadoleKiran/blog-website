import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useTheme } from "../context/ThemeContext";

const nav = [
  { to: "/courses", label: "Courses" },
  { to: "/tutorials", label: "Tutorials" },
  { to: "/practice", label: "Practice" },
  { to: "/blogs", label: "Blogs" },
  { to: "/notes", label: "Notes" },
  { to: "/jobs", label: "Jobs" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="grid grid-cols-12 items-center gap-3 md:gap-4">
          {/* Left: Logo */}
          <div className="col-span-6 md:col-span-2 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-emerald-500" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">DevVerse</span>
            </Link>
          </div>

          {/* Right controls (mobile only) */}
          <div className="col-span-6 flex items-center justify-end gap-2 md:hidden">
            <button aria-label="Toggle theme" onClick={toggle} className="rounded-full border border-zinc-300 p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">{theme === "dark" ? "🌙" : "☀️"}</button>
            <Link to="/auth" className="rounded-full bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">Sign In</Link>
          </div>

          {/* Center: SearchBar (full width on mobile, constrained on desktop) */}
          <div className="order-3 col-span-12 min-w-0 md:order-none md:col-span-6 lg:col-span-5">
            <div className="mx-auto max-w-lg lg:mx-0">
              <SearchBar placeholder="Search topics, tags, and articles" />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="col-span-12 hidden items-center justify-end gap-4 md:col-span-4 lg:col-span-5 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-sm ${isActive ? "text-emerald-600 dark:text-emerald-500" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"}`}>
                {n.label}
              </NavLink>
            ))}
            <button aria-label="Toggle theme" onClick={toggle} className="rounded-full border border-zinc-300 p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <button aria-label="Notifications" className="rounded-full border border-zinc-300 p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">🔔</button>
            <Link to="/auth" className="rounded-full bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-500">Sign In</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
