import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DxWxNcod.mjs";
import { n as Label, r as Textarea, t as Input } from "./input-BvSu_vpZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as sendMessage, c as Route$8 } from "./router-B_eQrcAw.mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-ruR6AEs8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BvoTLa_3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { settings } = Route$8.useLoaderData();
	const [pending, setPending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		phone: settings.phone,
		email: settings.email,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Hello",
			title: "Contact & purchase",
			children: "John or Sheila will get back to you. For CDs, a phone call or a short note is the surest way."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Talk to us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-medium text-pine",
						href: `tel:${settings.phone.replace(/\s/g, "")}`,
						children: settings.phone
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-medium text-pine",
						href: `mailto:${settings.email}`,
						children: settings.email
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: settings.city
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl font-semibold",
					children: "Buy a CD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Any single-disc CD" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "$10"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Any 2 or 3 disc set" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "$15"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "“99 Songs” (6 discs)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "$20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Music Retrospective USB — about 800 tracks" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "$30"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: "The USB holds roughly 7GB: every official John & Sheila, John Ludgate and Ludgate release, plus a folder of unreleased “rejects” from 2006 to now. Some are diamonds. Some explain themselves."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-xl border border-line bg-surface p-5 sm:p-6",
				onSubmit: async (e) => {
					e.preventDefault();
					const form = e.currentTarget;
					const fd = new FormData(form);
					setPending(true);
					try {
						await sendMessage({ data: {
							name: String(fd.get("name") ?? ""),
							email: String(fd.get("email") ?? ""),
							phone: String(fd.get("phone") ?? ""),
							body: String(fd.get("body") ?? "")
						} });
						form.reset();
						toast.success("Sent — John or Sheila will be in touch.");
					} catch (err) {
						toast.error(err instanceof Error ? err.message : "Could not send.");
					} finally {
						setPending(false);
					}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Write a note"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Your name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							autoComplete: "name"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Phone (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							autoComplete: "tel"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "body",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "body",
							name: "body",
							required: true,
							rows: 5
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: pending,
							children: pending ? "Sending…" : "Send"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { ContactPage as component };
