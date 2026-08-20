import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { o as FileText } from "../_libs/lucide-react.mjs";
import { o as Route$5 } from "./router-CQg7A0l5.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CDjp89lU.mjs";
import { n as EARLIER_CREDITS, s as STREAMING } from "./content-C7zs6QT1.mjs";
import { t as PdfModal } from "./pdf-modal-CyZhRcal.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/music-CBP0M34m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MusicPage() {
	const { settings, albums } = Route$5.useLoaderData();
	const [open, setOpen] = (0, import_react.useState)(albums[0]?.slug ?? null);
	const [pdf, setPdf] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "The records",
				title: "CDs over the years",
				children: "Nine official albums — seven studio, two live. Single discs are $10. Click a cover for tracks, credits and lyrics."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-8 flex max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6",
				children: STREAMING.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: s.href,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-pine hover:bg-paper hover:text-pine-dark",
					children: s.label
				}, s.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 pb-10 sm:px-6 md:grid-cols-2",
				children: albums.map((album) => {
					const isOpen = open === album.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-xl border border-line bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "grid w-full gap-0 text-left sm:grid-cols-[10rem_1fr]",
							onClick: () => setOpen(isOpen ? null : album.slug),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: album.cover,
								alt: "",
								className: "aspect-square w-full object-cover sm:h-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs uppercase tracking-[0.16em] text-faint",
										children: [
											album.year,
											" · ",
											album.kind === "live" ? "Live" : "Studio"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 font-display text-2xl font-semibold leading-tight",
										children: album.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: album.blurb
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("border-t border-line px-5 py-4", isOpen ? "block" : "hidden"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-1.5 text-sm",
								children: album.tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mr-2 tabular-nums text-faint",
										children: String(t.n).padStart(2, "0")
									}), t.title] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-faint",
										children: t.duration
									})]
								}, t.n))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: album.appleUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "text-pine hover:text-pine-dark",
										children: "Listen on Apple Music"
									}),
									album.creditsPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-pine hover:text-pine-dark",
										onClick: () => setPdf({
											title: `${album.title} — credits`,
											src: album.creditsPdf
										}),
										children: "Credits"
									}) : null,
									album.lyricsPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-pine hover:text-pine-dark",
										onClick: () => setPdf({
											title: `${album.title} — lyrics`,
											src: album.lyricsPdf
										}),
										children: "Lyrics"
									}) : null
								]
							})]
						})]
					}, album.slug);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-pine",
						children: "Earlier records"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl font-semibold tracking-tight",
						children: "More liner notes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Older CDs and collections. Click one to read the track listing and credits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-3 sm:grid-cols-2",
						children: EARLIER_CREDITS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPdf({
								title: item.title,
								src: item.href
							}),
							className: "flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-left hover:bg-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5 shrink-0 text-pine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: item.title
							})]
						}) }, item.href))
					})
				]
			}),
			pdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfModal, {
				title: pdf.title,
				src: pdf.src,
				onClose: () => setPdf(null)
			}) : null
		]
	});
}
//#endregion
export { MusicPage as component };
