import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react, f as useRouterState, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { i as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-ruR6AEs8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/bio",
		label: "Bio"
	},
	{
		to: "/music",
		label: "Music"
	},
	{
		to: "/videos",
		label: "Videos"
	},
	{
		to: "/photos",
		label: "Photos"
	},
	{
		to: "/shows",
		label: "Shows"
	},
	{
		to: "/reviews",
		label: "Press"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteShell({ children, phone, email }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-ink",
		"data-app": "ludgate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/80 bg-bg/92 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group min-w-0",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl",
								children: "Ludgate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted",
								children: "John & Sheila"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-0.5 lg:flex",
							children: NAV.map((item) => {
								const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors", active ? "bg-paper text-ink" : "text-muted hover:bg-paper hover:text-ink"),
									children: item.label
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-lg border border-line bg-surface text-ink lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-line bg-surface px-4 py-3 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-1",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-paper",
							onClick: () => setOpen(false),
							children: item.label
						}) }, item.to))
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-20 border-t border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: "Ludgate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-sm leading-relaxed text-muted",
							children: "John and Sheila Ludgate — folk, roots and family songs from Burlington, Ontario."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.16em] text-faint",
								children: "Get in touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-pine",
									href: `tel:${phone.replace(/\s/g, "")}`,
									children: phone
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-pine",
									href: `mailto:${email}`,
									children: email
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Burlington, Ontario"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-faint",
							children: "Listen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-pine",
									href: "https://music.apple.com/us/artist/john-sheila-ludgate/1681456803",
									target: "_blank",
									rel: "noreferrer",
									children: "Apple Music"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-pine",
									href: "https://open.spotify.com/search/John%20%26%20Sheila%20Ludgate",
									target: "_blank",
									rel: "noreferrer",
									children: "Spotify"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:text-pine",
									href: "https://www.reverbnation.com/johnandsheilaludgate",
									target: "_blank",
									rel: "noreferrer",
									children: "ReverbNation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/lyrics",
									className: "hover:text-pine",
									children: "Lyrics"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "mt-4 text-xs text-faint hover:text-muted",
									children: "Family sign-in"
								})
							]
						})] })
					]
				})
			})
		]
	});
}
function PageIntro({ kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14",
		children: [
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-pine",
				children: kicker
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl",
				children: title
			}),
			children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children
			}) : null
		]
	});
}
//#endregion
export { SiteShell as n, PageIntro as t };
