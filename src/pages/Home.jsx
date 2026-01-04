import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const tags = ["DSA", "Java", "React", "System Design", "AI"];

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 text-center text-zinc-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="mb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">Hello, What Do You Want To Learn?</h1>
          <div className="mx-auto max-w-2xl"><SearchBar placeholder="Search tutorials, blogs, notes" /></div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
            {tags.map(t => (
              <Link key={t} to={`/blogs?tag=${encodeURIComponent(t)}`} className="rounded-full border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 text-emerald-300 hover:bg-emerald-600/20">{t}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[{t:"1:1 Expert Sessions"},{t:"Personalized Feed"},{t:"Flexible Learning"},{t:"Build Your Network"}].map((c,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-6 text-center text-zinc-200 shadow-sm">
              <div className="mb-3 text-2xl">{["🧑‍🏫","✨","🧩","🤝"][i]}</div>
              <div className="font-medium">{c.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-100">Courses</h2>
          <Link to="#" className="text-sm text-emerald-400 hover:text-emerald-300">View All</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 text-zinc-200 shadow">
              <div className="mb-3 h-36 rounded-xl bg-zinc-700/40" />
              <div className="text-lg font-medium">Sample Course {i}</div>
              <div className="text-sm text-zinc-400">Beginner to Advanced</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
