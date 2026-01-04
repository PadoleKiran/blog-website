import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Link to={`/blogs/${post.slug}`} className="group block rounded-xl border border-white/10 bg-zinc-900 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900">
      <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
        <span className="rounded bg-emerald-600/20 px-2 py-0.5 text-emerald-400">{post.category}</span>
        <div className="flex gap-3">
          <span>{post.readingTime} min read</span>
          <span className={`rounded px-2 py-0.5 ${post.difficulty === "Beginner" ? "bg-green-500/20 text-green-400" : post.difficulty === "Intermediate" ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`}>{post.difficulty}</span>
        </div>
      </div>
      <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-zinc-100 group-hover:text-emerald-400">{post.title}</h3>
      <p className="line-clamp-3 text-sm text-zinc-400">{post.description}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
        <span>{post.language}</span>
        <span>•</span>
        <span>{post.topic}</span>
      </div>
    </Link>
  );
}
