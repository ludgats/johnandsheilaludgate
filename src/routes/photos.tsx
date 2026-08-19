import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { getPublicSite } from "@/lib/site/queries";

export const Route = createFileRoute("/photos")({
  loader: () => getPublicSite(),
  component: PhotosPage,
});

function PhotosPage() {
  const { settings, photos } = Route.useLoaderData();
  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="Pictures" title="Images">
        The duo, the family band, and a few nights on stage.
      </PageIntro>
      <div className="mx-auto columns-1 gap-4 px-4 pb-16 sm:columns-2 sm:px-6 lg:columns-3 max-w-6xl">
        {photos.length === 0 ? (
          <p className="text-sm text-muted">New pictures will appear here.</p>
        ) : (
          photos.map((photo) => (
            <figure key={photo.id} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-line bg-surface">
              <img src={photo.src} alt={photo.caption ?? ""} className="w-full object-cover" />
              {photo.caption ? (
                <figcaption className="px-3 py-2 text-sm text-muted">{photo.caption}</figcaption>
              ) : null}
            </figure>
          ))
        )}
      </div>
    </SiteShell>
  );
}
