import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { getPublicSite } from "@/lib/site/queries";

export const Route = createFileRoute("/reviews")({
  loader: () => getPublicSite(),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { settings, reviews } = Route.useLoaderData();
  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="Press" title="Reviews, radio and write-ups">
        From Penguin Eggs and Roots Music Canada to kitchen-table listeners overseas.
      </PageIntro>
      <div className="mx-auto max-w-3xl space-y-5 px-4 pb-16 sm:px-6">
        {reviews.map((review) => (
          <blockquote key={review.id} className="rounded-xl border border-line bg-surface p-6">
            <p className="text-[15px] leading-relaxed">“{review.quote}”</p>
            <footer className="mt-4 text-sm text-muted">
              <span className="font-medium text-ink">{review.attribution}</span>
              {review.publication ? <span> · {review.publication}</span> : null}
            </footer>
          </blockquote>
        ))}
      </div>
    </SiteShell>
  );
}
