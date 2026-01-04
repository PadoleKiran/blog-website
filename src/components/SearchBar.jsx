import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar({ className = "", placeholder = "Search..." }) {
  const [params] = useSearchParams();
  const [q, setQ] = useState(params.get("q") || "");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const query = q.trim();
    navigate(`/blogs${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  }

  return (
    <form onSubmit={submit} className={`w-full ${className}`} role="search">
      <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 shadow-sm transition focus-within:ring-2 focus-within:ring-emerald-500 dark:bg-zinc-900 dark:border-zinc-700">
        <input
          className="w-full bg-transparent outline-none placeholder-zinc-400"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />
        <button className="rounded-full bg-emerald-600 px-4 py-1.5 text-white hover:bg-emerald-500">Search</button>
      </div>
    </form>
  );
}
