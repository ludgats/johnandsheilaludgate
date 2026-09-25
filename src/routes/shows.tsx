import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { formatShowDate, formatShowTime } from "@/lib/site/format";
import { getPublicSite } from "@/lib/site/queries";
import type { ShowRow } from "@/lib/site/queries";

export const Route = createFileRoute("/shows")({
  loader: () => getPublicSite(),
  component: ShowsPage,
});

function mapsHref(show: ShowRow) {
  const q = [show.venue, show.address, show.city, show.province].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function ShowsPage() {
  const { settings, upcoming, recent } = Route.useLoaderData();
  const all = useMemo(() => [...upcoming, ...recent], [upcoming, recent]);
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? all.filter((show) =>
        [show.venue, show.city, show.address, show.province, show.showDate, formatShowDate(show.showDate)]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q),
      )
    : all;

  const years = [...new Set(filtered.map((show) => show.showDate.slice(0, 4)))];

  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <PageIntro kicker="On the road" title="Shows">
        {all.length} shows from 2009 on. Click any date to open it in Google Maps. John updates this
        list from the site.
      </PageIntro>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">Find a show</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Venue, city, or year"
            className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 text-base text-ink outline-none focus:border-pine"
          />
        </label>

        <nav className="mt-4 flex flex-wrap gap-2" aria-label="Years">
          {years.map((year) => (
            <a
              key={year}
              href={`#year-${year}`}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink hover:border-pine hover:text-pine"
            >
              {year}
            </a>
          ))}
        </nav>

        <p className="mt-4 text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? "show" : "shows"}
          {q ? ` matching “${query.trim()}”` : ""}
        </p>

        {years.map((year) => {
          const rows = filtered.filter((show) => show.showDate.startsWith(year));
          return (
            <section key={year} id={`year-${year}`} className="mt-10 scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold">{year}</h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {rows.map((show) => (
                  <li key={show.id}>
                    <a
                      href={mapsHref(show)}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:items-baseline"
                    >
                      <p className="text-sm font-medium text-pine">{formatShowDate(show.showDate)}</p>
                      <div>
                        <h3 className="text-lg font-medium group-hover:text-pine">{show.venue}</h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3.5 shrink-0" />
                            {[show.address, show.city, show.province].filter(Boolean).join(", ") || "Map"}
                          </span>
                          {show.showTime ? <span>{formatShowTime(show.showTime)}</span> : null}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </SiteShell>
  );
}
