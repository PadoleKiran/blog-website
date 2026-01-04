import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import CodeBlock from "../components/CodeBlock";

function slugify(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");}

export default function BlogDetail(){
  const { slug } = useParams();
  const post = blogs.find(b=>b.slug===slug);
  if(!post) return <div className="mx-auto max-w-5xl px-4 py-10 text-zinc-200">Not found</div>;
  const headings = post.content.filter(b=>b.type==="heading").map(h=>({text:h.text,id:slugify(h.text)}));

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-10 md:grid md:grid-cols-12">
      <aside className="order-2 md:order-1 md:col-span-3">
        <div className="sticky top-24 space-y-2 rounded-xl border border-white/10 bg-zinc-900 p-4">
          <div className="mb-2 text-sm font-medium text-zinc-300">On this page</div>
          {headings.map(h => (
            <a key={h.id} href={`#${h.id}`} className="block text-sm text-zinc-400 hover:text-emerald-400">{h.text}</a>
          ))}
        </div>
      </aside>

      <article className="order-1 md:order-2 md:col-span-9">
        <h1 className="mb-2 text-3xl font-semibold text-zinc-100">{post.title}</h1>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <span>Last updated: {post.updatedAt}</span>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <div className="flex gap-2">
            <button className="rounded bg-zinc-800 px-2 py-1">🔗</button>
            <button className="rounded bg-zinc-800 px-2 py-1">🐦</button>
            <button className="rounded bg-zinc-800 px-2 py-1">💼</button>
          </div>
        </div>
        <div className="prose prose-invert max-w-none">
          {post.content.map((block, i) => {
            if(block.type === "heading") return <h2 id={slugify(block.text)} key={i}>{block.text}</h2>;
            if(block.type === "p") return <p key={i}>{block.text}</p>;
            if(block.type === "ul") return <ul key={i}>{block.items.map((it,j)=>(<li key={j}>{it}</li>))}</ul>;
            if(block.type === "img") return <img key={i} src={block.src} alt={block.alt || ""} />;
            if(block.type === "code") return <CodeBlock key={i} language={block.language} value={block.code} />;
            return null;
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {post.related?.map(r => (
            <Link key={r} to={`/blogs/${r}`} className="rounded-lg border border-white/10 bg-zinc-900 p-4 text-emerald-400 hover:text-emerald-300">Related: {r.replaceAll('-', ' ')}</Link>
          ))}
        </div>
      </article>
    </div>
  );
}
