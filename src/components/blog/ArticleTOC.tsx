import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

const ArticleTOC = ({ slug }: { slug: string | undefined }) => {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Build TOC from h2 elements inside the article each time the slug changes
  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    const collect = () => {
      const article = document.querySelector("article");
      if (!article) return false;
      const headings = Array.from(article.querySelectorAll<HTMLHeadingElement>("h2"));
      if (headings.length === 0) return false;
      const next: TocItem[] = headings.map((h, i) => {
        if (!h.id) {
          h.id = `section-${i + 1}-${(h.textContent || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
            .slice(0, 60)}`;
        }
        h.style.scrollMarginTop = "120px";
        return { id: h.id, text: h.textContent?.trim() || "" };
      });
      if (!cancelled) setItems(next);
      return true;
    };

    // Article content is lazy-loaded; retry briefly
    let tries = 0;
    const interval = window.setInterval(() => {
      tries += 1;
      if (collect() || tries > 20) window.clearInterval(interval);
    }, 150);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [slug]);

  // Scroll spy
  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return <aside aria-hidden className="hidden lg:block" />;

  return (
    <aside className="hidden lg:block">
      <nav aria-label="Sommaire" className="sticky top-28">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Sommaire
        </p>
        <ol className="space-y-2.5 border-l border-border">
          {items.map((it, idx) => {
            const active = activeId === it.id;
            return (
              <li key={it.id} className="text-sm leading-snug">
                <a
                  href={`#${it.id}`}
                  className={`block pl-4 -ml-px border-l-2 transition-colors ${
                    active
                      ? "border-primary text-primary font-medium"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-muted-foreground/60 mr-1.5">{idx + 1}.</span>
                  {it.text}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
};

export default ArticleTOC;