import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as FileText } from "../_libs/lucide-react.mjs";
import { s as Route$6 } from "./router-CWDFWft-.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CDjp89lU.mjs";
import { r as SEED_LYRICS } from "./content-C7zs6QT1.mjs";
import { t as PdfModal } from "./pdf-modal-CyZhRcal.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lyrics-zffdcB9T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LyricsPage() {
	const { settings } = Route$6.useLoaderData();
	const [pdf, setPdf] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageIntro, {
				kicker: "The words",
				title: "Lyrics",
				children: [
					"Click a record to open the lyric booklet. Credits and liner notes for every CD are also on the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/music",
						className: "font-medium text-pine hover:text-pine-dark",
						children: "Music"
					}),
					" ",
					"page."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto max-w-xl space-y-3 px-4 pb-16 sm:px-6",
				children: SEED_LYRICS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setPdf({
						title: item.title,
						src: item.href
					}),
					className: "flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-4 text-left hover:bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5 text-pine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: item.title
					})]
				}) }, item.title))
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
export { LyricsPage as component };
