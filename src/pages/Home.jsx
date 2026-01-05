import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const tags = ["DSA", "Java", "React", "System Design", "AI"];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-rose-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 pt-10 md:pt-14">
          {/* Copy */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-b from-white/70 to-white/30 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:from-zinc-900/60 dark:to-zinc-900/20">
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm sm:text-4xl md:text-5xl dark:text-zinc-100">
                Unlock Your Potential
              </h1>
              <p className="mb-6 text-zinc-600 dark:text-zinc-300">Learn, Create, Innovate</p>
              <div className="max-w-md">
                <SearchBar placeholder="Search courses, blog posts, projects" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                {tags.map((t) => (
                  <Link key={t} to={`/blogs?tag=${encodeURIComponent(t)}`} className="rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-sky-700 hover:bg-sky-200 dark:border-emerald-700/40 dark:bg-emerald-900/30 dark:text-emerald-200">
                    {t}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link to="#" className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-500">Explore Courses</Link>
              </div>
            </div>
          </div>
          {/* Illustration */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-sky-100 to-rose-100 p-8 shadow-lg ring-1 ring-black/5 dark:from-zinc-800 dark:to-zinc-800">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-white/80 shadow-inner ring-1 ring-black/5 dark:bg-zinc-900/80">
                    {/* decorative cell */}
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/60 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Courses</h2>
          <Link to="#" className="text-sm text-sky-600 hover:text-sky-500 dark:text-emerald-300">View All</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[{t:"AI & Machine Learning", emoji:"🧠"},{t:"Web Development", emoji:"🚀"},{t:"Digital Art", emoji:"🎨"}].map((c,i)=> (
            <div key={i} className="group rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60">
              <div className="mb-3 flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-rose-100 text-3xl dark:from-zinc-800 dark:to-zinc-800">{c.emoji}</div>
              <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{c.t}</div>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">Learn concepts with bite-sized lessons and practical exercises.</p>
              <button className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-medium text-sky-700 shadow-sm hover:bg-sky-50 dark:border-emerald-700/40 dark:bg-zinc-800 dark:text-emerald-200">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h2>
          <Link to="#" className="text-sm text-sky-600 hover:text-sky-500 dark:text-emerald-300">Browse</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Coding Productivity","TheGreen VR","VR Experience","Eco Tech"].map((t,i)=> (
            <div key={i} className="rounded-3xl bg-white/70 p-5 text-zinc-900 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900/60 dark:text-zinc-100">
              <div className="mb-3 flex h-20 items-center justify-center rounded-full bg-gradient-to-br from-white to-sky-100 dark:from-zinc-800 dark:to-zinc-800">{["💬","🏙️","🎮","🌱"][i]}</div>
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">View Project</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
