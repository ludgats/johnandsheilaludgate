import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { formatShowDate, formatShowTime } from "@/lib/site/format";
import { getPublicSite } from "@/lib/site/queries";

export const Route = createFileRoute("/shows")({
  loader: () => getPublicSite(),
  component: ShowsPage,
});

function ShowsPage() {
  const { settings, upcoming, recent } = Route.useLoaderData();
  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="On the road" title="Shows">
        2009 to now — 962 shows and counting. John updates this list himself. If you would like them
        at your room, call or write from the contact page.
      </PageIntro>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold">Coming up</h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {upcoming.length === 0 ? (
            <li className="py-6 text-sm text-muted">No future dates posted yet.</li>
          ) : (
            upcoming.map((show) => (
              <li key={show.id} className="py-5">
                <p className="text-sm font-medium text-pine">{formatShowDate(show.showDate)}</p>
                <h3 className="mt-1 text-lg font-medium">{show.venue}</h3>
                <p className="mt-1 flex flex-wrap gap-x-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {[show.address, show.city, show.province].filter(Boolean).join(", ")}
                  </span>
                  {show.showTime ? (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-3.5" />
                      {formatShowTime(show.showTime)}
                    </span>
                  ) : null}
                </p>
                {show.notes ? <p className="mt-2 text-sm text-muted">{show.notes}</p> : null}
              </li>
            ))
          )}
        </ul>

        {recent.length > 0 ? (
          <>
            <h2 className="mt-12 font-display text-2xl font-semibold">Recently played</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {recent.map((show) => (
                <li key={show.id}>
                  <span className="text-faint">{formatShowDate(show.showDate)}</span>
                  {" — "}
                  {show.venue}, {show.city}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </SiteShell>
  );
}
