import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const PER_PAGE = 9;

export default function Blogs() {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(params.get("page") || "1"));
  const [language, setLanguage] = useState(params.get("language") || "all");
  const [topic, setTopic] = useState(params.get("topic") || "all");
  const [difficulty, setDifficulty] = useState(params.get("difficulty") || "all");
  const q = (params.get("q") || "").toLowerCase();

  const javaRoadmap = useMemo(() => blogs.find((b) => b.slug === "java-roadmap-2026"), []);

  const languages = useMemo(() => ["JavaScript","Java","Python","C++"], []);
  const topics = useMemo(() => Array.from(new Set(blogs.map(b=>b.topic))), []);

  const filtered = useMemo(() => {
    return blogs.filter(b => {
      if (b.slug === "java-roadmap-2026") return false;
      if (language !== "all" && b.language !== language) return false;
      if (topic !== "all" && b.topic !== topic) return false;
      if (difficulty !== "all" && b.difficulty !== difficulty) return false;
      if (q && !(b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [language, topic, difficulty, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const items = filtered.slice(start, start + PER_PAGE);

  function updateParam(key, value) {
    const next = new URLSearchParams(params);
    if (value === "all" || value === "") next.delete(key); else next.set(key, value);
    next.set("page", "1");
    setParams(next);
    setPage(1);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
      <h1 className="mb-6 text-2xl font-semibold text-zinc-100">Explore Articles</h1>

      {javaRoadmap && (
        <section className="mb-6 rounded-3xl bg-gradient-to-br from-sky-100 to-rose-100 p-4 shadow-sm ring-1 ring-black/5 dark:from-zinc-800 dark:to-zinc-800">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-1 text-xs font-semibold tracking-wide text-sky-700 dark:text-emerald-200">FEATURED</div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Java Roadmap (2026)</h2>
              <p className="mt-1 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">{javaRoadmap.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/70 px-3 py-1 text-zinc-700 ring-1 ring-black/5 dark:bg-zinc-900/60 dark:text-zinc-200">{javaRoadmap.readingTime} min read</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-zinc-700 ring-1 ring-black/5 dark:bg-zinc-900/60 dark:text-zinc-200">{javaRoadmap.difficulty}</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-zinc-700 ring-1 ring-black/5 dark:bg-zinc-900/60 dark:text-zinc-200">{javaRoadmap.language}</span>
              </div>
            </div>
            <Link to={`/blogs/${javaRoadmap.slug}`} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-500 dark:bg-emerald-600 dark:hover:bg-emerald-500">
              Read Roadmap
            </Link>
          </div>
        </section>
      )}

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <select className="w-full min-w-0 rounded-lg border border-white/10 bg-zinc-900 p-2 text-sm text-zinc-200" value={language} onChange={(e)=>{setLanguage(e.target.value);updateParam("language", e.target.value);}}>
          <option value="all">All Languages</option>
          {languages.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select className="w-full min-w-0 rounded-lg border border-white/10 bg-zinc-900 p-2 text-sm text-zinc-200" value={topic} onChange={(e)=>{setTopic(e.target.value);updateParam("topic", e.target.value);}}>
          <option value="all">All Topics</option>
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select className="w-full min-w-0 rounded-lg border border-white/10 bg-zinc-900 p-2 text-sm text-zinc-200" value={difficulty} onChange={(e)=>{setDifficulty(e.target.value);updateParam("difficulty", e.target.value);}}>
          <option value="all">All Difficulty</option>
          {['Beginner','Intermediate','Advanced'].map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <Link to="/" className="w-full rounded-lg border border-white/10 bg-zinc-900 p-2 text-center text-sm text-zinc-200 hover:bg-zinc-800">Reset</Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {items.map(p => <BlogCard key={p.id} post={p} />)}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button disabled={page<=1} onClick={()=>{setPage(p=>p-1);setParams({...Object.fromEntries(params), page: String(page-1)})}} className="rounded border border-white/10 px-3 py-1 text-sm text-zinc-200 disabled:opacity-50">Prev</button>
        <span className="text-sm text-zinc-400">Page {page} of {totalPages}</span>
        <button disabled={page>=totalPages} onClick={()=>{setPage(p=>p+1);setParams({...Object.fromEntries(params), page: String(page+1)})}} className="rounded border border-white/10 px-3 py-1 text-sm text-zinc-200 disabled:opacity-50">Next</button>
      </div>
    </div>
  );
}
