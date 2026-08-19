import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { getPublicSite } from "@/lib/site/queries";

export const Route = createFileRoute("/videos")({
  loader: () => getPublicSite(),
  component: VideosPage,
});

function VideosPage() {
  const { settings, videos } = Route.useLoaderData();
  const [active, setActive] = useState<number | null>(videos[0]?.id ?? null);

  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="Watch" title="Video gallery">
        Kitchen-table sessions, live rooms, and the songs themselves. Tap a picture to play.
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const playing = active === video.id;
          return (
            <article key={video.id} className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="relative aspect-video bg-ink">
                {playing ? (
                  <iframe
                    title={video.title}
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="group relative h-full w-full"
                    onClick={() => setActive(video.id)}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid size-12 place-items-center rounded-full bg-surface/95 text-ink shadow-sm">
                        <Play className="size-5 fill-current" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <div className="p-4">
                <h2 className="font-medium leading-snug">{video.title}</h2>
                {video.note ? <p className="mt-1 text-sm text-muted">{video.note}</p> : null}
              </div>
            </article>
          );
        })}
      </div>
    </SiteShell>
  );
}
