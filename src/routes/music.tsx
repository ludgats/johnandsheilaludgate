import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText } from "lucide-react";
import { PdfModal } from "@/components/pdf-modal";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { EARLIER_CREDITS, STREAMING } from "@/lib/site/content";
import { getPublicSite } from "@/lib/site/queries";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/music")({
  loader: () => getPublicSite(),
  component: MusicPage,
});

function MusicPage() {
  const { settings, albums } = Route.useLoaderData();
  const [open, setOpen] = useState<string | null>(albums[0]?.slug ?? null);
  const [pdf, setPdf] = useState<{ title: string; src: string } | null>(null);

  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="The records" title="CDs over the years">
        Nine official albums — seven studio, two live. Single discs are $10. Click a cover for
        tracks, credits and lyrics.
      </PageIntro>

      <div className="mx-auto mb-8 flex max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6">
        {STREAMING.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-pine hover:bg-paper hover:text-pine-dark"
          >
            {s.label}
          </a>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 sm:px-6 md:grid-cols-2">
        {albums.map((album) => {
          const isOpen = open === album.slug;
          return (
            <article key={album.slug} className="overflow-hidden rounded-xl border border-line bg-surface">
              <button
                type="button"
                className="grid w-full gap-0 text-left sm:grid-cols-[10rem_1fr]"
                onClick={() => setOpen(isOpen ? null : album.slug)}
              >
                <img src={album.cover} alt="" className="aspect-square w-full object-cover sm:h-full" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-faint">
                    {album.year} · {album.kind === "live" ? "Live" : "Studio"}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold leading-tight">{album.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{album.blurb}</p>
                </div>
              </button>
              <div className={cn("border-t border-line px-5 py-4", isOpen ? "block" : "hidden")}>
                <ol className="space-y-1.5 text-sm">
                  {album.tracks.map((t) => (
                    <li key={t.n} className="flex items-baseline justify-between gap-4">
                      <span>
                        <span className="mr-2 tabular-nums text-faint">{String(t.n).padStart(2, "0")}</span>
                        {t.title}
                      </span>
                      <span className="tabular-nums text-faint">{t.duration}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                  <a
                    href={album.appleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pine hover:text-pine-dark"
                  >
                    Listen on Apple Music
                  </a>
                  {album.creditsPdf ? (
                    <button
                      type="button"
                      className="text-pine hover:text-pine-dark"
                      onClick={() => setPdf({ title: `${album.title} — credits`, src: album.creditsPdf! })}
                    >
                      Credits
                    </button>
                  ) : null}
                  {album.lyricsPdf ? (
                    <button
                      type="button"
                      className="text-pine hover:text-pine-dark"
                      onClick={() => setPdf({ title: `${album.title} — lyrics`, src: album.lyricsPdf! })}
                    >
                      Lyrics
                    </button>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">Earlier records</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">More liner notes</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Older CDs and collections. Click one to read the track listing and credits.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {EARLIER_CREDITS.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => setPdf({ title: item.title, src: item.href })}
                className="flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-left hover:bg-paper"
              >
                <FileText className="size-5 shrink-0 text-pine" />
                <span className="font-medium">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {pdf ? <PdfModal title={pdf.title} src={pdf.src} onClose={() => setPdf(null)} /> : null}
    </SiteShell>
  );
}
