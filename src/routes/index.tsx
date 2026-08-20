import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getPublicSite } from "@/lib/site/queries";
import { formatShowDate, formatShowTime } from "@/lib/site/format";

export const Route = createFileRoute("/")({
  loader: () => getPublicSite(),
  component: Home,
});

function Home() {
  const { upcoming, reviews, settings, albums } = Route.useLoaderData();
  const latest = albums[0];
  const featured = reviews.filter((r) => r.featured).slice(0, 3);
  const nextShows = upcoming.slice(0, 4);
  const heroWide = `${settings.heroImage}${settings.heroImage.includes("?") || settings.heroImage.startsWith("data:") ? "" : "?v=12"}`;
  const heroMobile = `${settings.heroImageMobile}${settings.heroImageMobile.includes("?") || settings.heroImageMobile.startsWith("data:") ? "" : "?v=12"}`;

  return (
    <SiteShell phone={settings.phone} email={settings.email}>
      <section className="relative overflow-hidden bg-walnut aspect-[9/16] max-h-[78vh] md:aspect-video md:max-h-none">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroWide} />
          <img
            src={heroWide}
            alt="Guitars and drums on the Burlington Canal pier looking toward the lift bridge, Skyway, and Hamilton"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/92 via-ink/60 via-40% to-transparent to-[62%]" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-start px-4 pt-20 sm:px-6 md:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-surface/80">
            Burlington, Ontario
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-surface sm:text-4xl md:mt-3 md:text-6xl md:leading-[1.05]">
            John & Sheila Ludgate
          </h1>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
            <Link to="/shows">
              <Button size="lg">See upcoming shows</Button>
            </Link>
            <Link to="/music">
              <Button
                size="lg"
                variant="secondary"
                className="border-surface/25 bg-surface/15 text-surface hover:bg-surface/25"
              >
                Listen now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {settings.announcement ? (
        <section className="border-b border-line bg-pine text-surface">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-3.5">
            <img
              src={latest.cover}
              alt=""
              className="hidden size-12 shrink-0 rounded-md object-cover ring-1 ring-surface/20 sm:block"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-surface/75">
                Latest news
              </p>
              <p className="mt-0.5 text-sm leading-snug text-surface">
                {settings.announcement}
              </p>
              <p className="mt-1.5 flex flex-wrap gap-x-3 text-xs font-medium md:hidden">
                <a href={latest.appleUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                  Apple Music
                </a>
                <a
                  href="https://open.spotify.com/search/John%20%26%20Sheila%20Ludgate%20Folk%20Rock"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Spotify
                </a>
              </p>
            </div>
            <div className="hidden shrink-0 flex-wrap items-center gap-2 md:flex">
              <a href={latest.appleUrl} target="_blank" rel="noreferrer">
                <Button size="sm" className="bg-surface text-pine hover:bg-paper">
                  Apple Music
                </Button>
              </a>
              <a
                href="https://open.spotify.com/search/John%20%26%20Sheila%20Ludgate%20Folk%20Rock"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="border-surface/25 bg-surface/10 text-surface hover:bg-surface/20"
                >
                  Spotify
                </Button>
              </a>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">On the calendar</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Upcoming shows</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {nextShows.length === 0 ? (
              <li className="py-6 text-sm text-muted">New dates will be posted here.</li>
            ) : (
              nextShows.map((show) => (
                <li key={show.id} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:items-baseline">
                  <p className="text-sm font-medium text-pine">{formatShowDate(show.showDate)}</p>
                  <div>
                    <p className="font-medium">{show.venue}</p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        {show.city}
                      </span>
                      {show.showTime ? (
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {formatShowTime(show.showTime)}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </li>
              ))
            )}
          </ul>
          <Link to="/shows" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-dark">
            Full show list <ArrowRight className="size-4" />
          </Link>
        </div>

        <aside className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">Latest recording</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface">
            <img src={latest.cover} alt={`${latest.title} album cover`} className="aspect-square w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-faint">{latest.year}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold">{latest.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{latest.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={latest.appleUrl} target="_blank" rel="noreferrer">
                  <Button size="sm">Apple Music</Button>
                </a>
                <Link to="/music">
                  <Button size="sm" variant="secondary">
                    All albums
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">In their words</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">What people write</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featured.map((review) => (
              <blockquote key={review.id} className="rounded-xl border border-line bg-surface p-6">
                <p className="text-base leading-relaxed text-ink">“{review.quote}”</p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-medium text-ink">{review.attribution}</span>
                  {review.publication ? <span> · {review.publication}</span> : null}
                </footer>
              </blockquote>
            ))}
          </div>
          <Link to="/reviews" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-dark">
            All press <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
