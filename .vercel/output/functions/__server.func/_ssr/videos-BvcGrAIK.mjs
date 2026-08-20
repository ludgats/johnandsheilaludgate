import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Play } from "../_libs/lucide-react.mjs";
import { n as Route$1 } from "./router-B_eQrcAw.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-ruR6AEs8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/videos-BvcGrAIK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VideosPage() {
	const { settings, videos } = Route$1.useLoaderData();
	const [active, setActive] = (0, import_react.useState)(videos[0]?.id ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Watch",
			title: "Video gallery",
			children: "Kitchen-table sessions, live rooms, and the songs themselves. Tap a picture to play."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3",
			children: videos.map((video) => {
				const playing = active === video.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-video bg-ink",
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: video.title,
							src: `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`,
							className: "h-full w-full",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "group relative h-full w-full",
							onClick: () => setActive(video.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
								alt: "",
								className: "h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-full bg-surface/95 text-ink shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5 fill-current" })
								})
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-medium leading-snug",
							children: video.title
						}), video.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: video.note
						}) : null]
					})]
				}, video.id);
			})
		})]
	});
}
//#endregion
export { VideosPage as component };
