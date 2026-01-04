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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur dark:bg-zinc-950/70">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-4 py-3">
        <div className="col-span-2 flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-emerald-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">DevVerse</span>
          </Link>
        </div>
        <div className="col-span-6">
          <SearchBar placeholder="Search topics, tags, and articles" />
        </div>
        <nav className="col-span-4 hidden items-center justify-end gap-4 md:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-sm ${isActive ? "text-emerald-500" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"}`}>
              {n.label}
            </NavLink>
          ))}
          <button aria-label="Toggle theme" onClick={toggle} className="rounded-full border border-zinc-700 p-2 text-zinc-200 hover:bg-zinc-900">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button aria-label="Notifications" className="rounded-full border border-zinc-700 p-2 text-zinc-200 hover:bg-zinc-900">🔔</button>
          <Link to="/auth" className="rounded-full bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-500">Sign In</Link>
        </nav>
      </div>
    </header>
  );
}
