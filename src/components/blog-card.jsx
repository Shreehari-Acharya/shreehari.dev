export default function BlogCard({ title, brief, url, readTime }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-shell block"
    >
      <div className="flex h-full flex-col gap-4 py-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-xl text-base font-semibold tracking-[-0.03em] text-slate-100 md:text-lg">
            {title}
          </h3>
          <span className="status-chip shrink-0">
            {readTime} min
          </span>
        </div>

        <p className="max-w-[62ch] text-sm leading-7 text-slate-300/80">
          {brief}
        </p>
      </div>
    </a>
  );
}
