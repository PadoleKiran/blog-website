export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/50 py-10 text-sm text-zinc-500 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} DevVerse</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-500">Privacy</a>
            <a href="#" className="hover:text-emerald-500">Terms</a>
            <a href="#" className="hover:text-emerald-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
