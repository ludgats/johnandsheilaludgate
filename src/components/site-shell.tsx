import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/bio", label: "Bio" },
  { to: "/music", label: "Music" },
  { to: "/videos", label: "Videos" },
  { to: "/photos", label: "Photos" },
  { to: "/shows", label: "Shows" },
  { to: "/reviews", label: "Press" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({
  children,
  phone,
  email,
}: {
  children: ReactNode;
  phone: string;
  email: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="group min-w-0" onClick={() => setOpen(false)}>
            <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Ludgate
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              John & Sheila
            </p>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors",
                    active ? "bg-paper text-ink" : "text-muted hover:bg-paper hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-line bg-surface text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <nav className="border-t border-line bg-surface px-4 py-3 lg:hidden">
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-paper"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">Ludgate</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              John and Sheila Ludgate — folk, roots and family songs from Burlington, Ontario.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">Get in touch</p>
            <p className="mt-3 text-sm">
              <a className="hover:text-pine" href={`tel:${phone.replace(/\s/g, "")}`}>
                {phone}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a className="hover:text-pine" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted">Burlington, Ontario</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">Listen</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                className="hover:text-pine"
                href="https://music.apple.com/us/artist/john-sheila-ludgate/1681456803"
                target="_blank"
                rel="noreferrer"
              >
                Apple Music
              </a>
              <a
                className="hover:text-pine"
                href="https://open.spotify.com/search/John%20%26%20Sheila%20Ludgate"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
              <a
                className="hover:text-pine"
                href="https://www.reverbnation.com/johnandsheilaludgate"
                target="_blank"
                rel="noreferrer"
              >
                ReverbNation
              </a>
              <Link to="/lyrics" className="hover:text-pine">
                Lyrics
              </Link>
              <Link to="/admin" className="mt-4 text-xs text-faint hover:text-muted">
                Update the site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">{kicker}</p>
      ) : null}
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {children ? <div className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{children}</div> : null}
    </div>
  );
}
