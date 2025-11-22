export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-sm text-slate-500">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© 2025 Tristan Suplico. All rights reserved.</div>
        <div className="flex gap-4">
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
