import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

export default function Notes(){
  const notes = blogs.filter(b=>b.type==="note");
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold text-zinc-100">Developer Notes</h1>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {notes.map(p => <BlogCard key={p.id} post={p} />)}
      </div>
    </div>
  );
}
