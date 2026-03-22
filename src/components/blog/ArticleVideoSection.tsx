interface ArticleVideoSectionProps {
  videoId: string;
  summary: React.ReactNode;
}

const ArticleVideoSection = ({ videoId, summary }: ArticleVideoSectionProps) => (
  <section className="mb-12">
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
      <div className="w-full max-w-[280px] mx-auto md:mx-0">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50" style={{ aspectRatio: '9/16' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="YouTube Short"
            loading="lazy"
            allowFullScreen
            className="w-full h-full border-none"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold text-foreground font-display mb-3 flex items-center gap-2">
            🎬 Résumé vidéo
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-2">
            {summary}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ArticleVideoSection;
