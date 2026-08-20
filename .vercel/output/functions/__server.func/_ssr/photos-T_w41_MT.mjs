import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$4 } from "./router-B_eQrcAw.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-ruR6AEs8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/photos-T_w41_MT.js
var import_jsx_runtime = require_jsx_runtime();
function PhotosPage() {
	const { settings, photos } = Route$4.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Pictures",
			title: "Images",
			children: "The duo, the family band, and a few nights on stage."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto columns-1 gap-4 px-4 pb-16 sm:columns-2 sm:px-6 lg:columns-3 max-w-6xl",
			children: photos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "New pictures will appear here."
			}) : photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mb-4 break-inside-avoid overflow-hidden rounded-xl border border-line bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.src,
					alt: photo.caption ?? "",
					className: "w-full object-cover"
				}), photo.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "px-3 py-2 text-sm text-muted",
					children: photo.caption
				}) : null]
			}, photo.id))
		})]
	});
}
//#endregion
export { PhotosPage as component };
