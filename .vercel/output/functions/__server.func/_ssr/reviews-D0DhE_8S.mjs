import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$3 } from "./router-B_eQrcAw.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-ruR6AEs8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-D0DhE_8S.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
	const { settings, reviews } = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Press",
			title: "Reviews, radio and write-ups",
			children: "From Penguin Eggs and Roots Music Canada to kitchen-table listeners overseas."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-5 px-4 pb-16 sm:px-6",
			children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "rounded-xl border border-line bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[15px] leading-relaxed",
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
		})]
	});
}
//#endregion
export { ReviewsPage as component };
