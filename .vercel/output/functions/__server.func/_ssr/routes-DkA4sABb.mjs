import { C as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DxWxNcod.mjs";
import { n as formatShowTime, t as formatShowDate } from "./format-Cd_nuLaQ.mjs";
import { a as MapPin, c as ArrowRight, s as Calendar } from "../_libs/lucide-react.mjs";
import { u as Route$11 } from "./router-CQg7A0l5.mjs";
import { n as SiteShell } from "./site-shell-CDjp89lU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DkA4sABb.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { upcoming, reviews, settings, albums } = Route$11.useLoaderData();
	const latest = albums[0];
	const featured = reviews.filter((r) => r.featured).slice(0, 3);
	const nextShows = upcoming.slice(0, 4);
	const heroWide = settings.heroImage || "/media/hero-wide.jpg";
	const heroMobile = settings.heroImageMobile || heroWide;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[78vh] overflow-hidden bg-walnut md:min-h-[72vh]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						media: "(min-width: 768px)",
						srcSet: heroWide
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroMobile,
						alt: "A guitar and harmonica on a canoe looking toward downtown Lakefield, Ontario",
						className: "absolute inset-0 h-full w-full object-cover object-[50%_48%] md:object-[52%_58%]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/35 to-ink/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:min-h-[72vh]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.22em] text-surface/80",
								children: "Burlington, Ontario"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-surface md:mt-3 md:text-6xl md:leading-[1.05]",
								children: "John & Sheila Ludgate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-base leading-relaxed text-surface/85 md:mt-5 md:text-lg",
								children: "Folk songs and family harmony."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3 md:mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shows",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										children: "See upcoming shows"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/music",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "secondary",
										className: "border-surface/20 bg-surface/10 text-surface hover:bg-surface/20",
										children: "Listen now"
									})
								})]
							})
						]
					})
				]
			}),
			settings.announcement ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line bg-pine text-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: latest.cover,
							alt: "",
							className: "hidden size-12 shrink-0 rounded-md object-cover ring-1 ring-surface/20 sm:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-surface/75",
									children: "Latest news"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm leading-snug text-surface",
									children: settings.announcement
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 flex flex-wrap gap-x-3 text-xs font-medium md:hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: latest.appleUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-2",
										children: "Apple Music"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://open.spotify.com/search/John%20%26%20Sheila%20Ludgate%20Folk%20Rock",
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-2",
										children: "Spotify"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden shrink-0 flex-wrap items-center gap-2 md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: latest.appleUrl,
								target: "_blank",
								rel: "noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "bg-surface text-pine hover:bg-paper",
									children: "Apple Music"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://open.spotify.com/search/John%20%26%20Sheila%20Ludgate%20Folk%20Rock",
								target: "_blank",
								rel: "noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									className: "border-surface/25 bg-surface/10 text-surface hover:bg-surface/20",
									children: "Spotify"
								})
							})]
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-pine",
							children: "On the calendar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight",
							children: "Upcoming shows"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Nearly a thousand rooms since 2009. Here is what is next."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 divide-y divide-line border-y border-line",
							children: nextShows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-6 text-sm text-muted",
								children: "New dates will be posted here."
							}) : nextShows.map((show) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-pine",
									children: formatShowDate(show.showDate)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: show.venue
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 flex flex-wrap items-center gap-x-3 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), show.city]
									}), show.showTime ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }), formatShowTime(show.showTime)]
									}) : null]
								})] })]
							}, show.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shows",
							className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-dark",
							children: ["Full show list ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-pine",
						children: "Latest recording"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 overflow-hidden rounded-xl border border-line bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: latest.cover,
							alt: `${latest.title} album cover`,
							className: "aspect-square w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-faint",
									children: latest.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl font-semibold",
									children: latest.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: latest.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: latest.appleUrl,
										target: "_blank",
										rel: "noreferrer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											children: "Apple Music"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/music",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "secondary",
											children: "All albums"
										})
									})]
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-pine",
							children: "In their words"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight",
							children: "What people write"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-5 md:grid-cols-3",
							children: featured.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-xl border border-line bg-surface p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-base leading-relaxed text-ink",
									children: [
										"“",
										review.quote,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-4 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: review.attribution
									}), review.publication ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · ", review.publication] }) : null]
								})]
							}, review.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/reviews",
							className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-dark",
							children: ["All press ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
