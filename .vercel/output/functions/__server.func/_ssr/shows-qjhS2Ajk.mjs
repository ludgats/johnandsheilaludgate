import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatShowTime, t as formatShowDate } from "./format-Cd_nuLaQ.mjs";
import { a as MapPin, s as Calendar } from "../_libs/lucide-react.mjs";
import { r as Route$2 } from "./router-ZMc0cNyu.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-B075kL8E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shows-qjhS2Ajk.js
var import_jsx_runtime = require_jsx_runtime();
function ShowsPage() {
	const { settings, upcoming, recent } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "On the road",
			title: "Shows",
			children: "2009 to now — 962 shows and counting. John updates this list himself. If you would like them at your room, call or write from the contact page."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 pb-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Coming up"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-6 text-sm text-muted",
						children: "No future dates posted yet."
					}) : upcoming.map((show) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-pine",
								children: formatShowDate(show.showDate)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-lg font-medium",
								children: show.venue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex flex-wrap gap-x-4 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), [
										show.address,
										show.city,
										show.province
									].filter(Boolean).join(", ")]
								}), show.showTime ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }), formatShowTime(show.showTime)]
								}) : null]
							}),
							show.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: show.notes
							}) : null
						]
					}, show.id))
				}),
				recent.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 font-display text-2xl font-semibold",
					children: "Recently played"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: recent.map((show) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-faint",
							children: formatShowDate(show.showDate)
						}),
						" — ",
						show.venue,
						", ",
						show.city
					] }, show.id))
				})] }) : null
			]
		})]
	});
}
//#endregion
export { ShowsPage as component };
