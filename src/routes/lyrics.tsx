import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FileText } from "lucide-react";
import { PdfModal } from "@/components/pdf-modal";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { SEED_LYRICS } from "@/lib/site/content";
import { getPublicSite } from "@/lib/site/queries";

export const Route = createFileRoute("/lyrics")({
  loader: () => getPublicSite(),
  component: LyricsPage,
});

function LyricsPage() {
  const { settings } = Route.useLoaderData();
  const [pdf, setPdf] = useState<{ title: string; src: string } | null>(null);

  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="The words" title="Lyrics">
        Click a record to open the lyric booklet. Credits and liner notes for every CD are also on the{" "}
        <Link to="/music" className="font-medium text-pine hover:text-pine-dark">
          Music
        </Link>{" "}
        page.
      </PageIntro>
      <ul className="mx-auto max-w-xl space-y-3 px-4 pb-16 sm:px-6">
        {SEED_LYRICS.map((item) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => setPdf({ title: item.title, src: item.href })}
              className="flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-4 text-left hover:bg-paper"
            >
              <FileText className="size-5 text-pine" />
              <span className="font-medium">{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
      {pdf ? <PdfModal title={pdf.title} src={pdf.src} onClose={() => setPdf(null)} /> : null}
    </SiteShell>
  );
}
