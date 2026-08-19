import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn, t as authClient } from "./client-sGid3STf.mjs";
import { n as useCurrentUserState } from "./use-current-user-DZ7NZd4-.mjs";
import { t as Button } from "./button-DxWxNcod.mjs";
import { n as Label, t as Input } from "./input-BvSu_vpZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as GROK_PROVIDERS } from "./server-BboNXPKd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DiEFAmWb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (!isPending && user) navigate({ to: "/admin" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-bg px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-line bg-surface p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-semibold",
					children: "Ludgate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-lg font-medium",
					children: "Update the website"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "This page is for John or Sheila. Visitors do not need to sign in to listen, read, or write a note."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-2",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => void signIn(p.providerId, { callbackURL: "/admin" }),
						children: ["Continue with ", p.label]
					}, p.providerId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-6 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-faint",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" }),
						"or email",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3",
					onSubmit: async (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const email = String(fd.get("email") ?? "");
						const password = String(fd.get("password") ?? "");
						const name = String(fd.get("name") ?? "John or Sheila");
						setBusy(true);
						try {
							if (mode === "up") {
								const { error } = await authClient.signUp.email({
									email,
									password,
									name
								});
								if (error) throw new Error(error.message ?? "Could not create account");
							} else {
								const { error } = await authClient.signIn.email({
									email,
									password
								});
								if (error) throw new Error(error.message ?? "Could not sign in");
							}
							await navigate({ to: "/admin" });
						} catch (err) {
							toast.error(err instanceof Error ? err.message : "Sign-in failed");
						} finally {
							setBusy(false);
						}
					},
					children: [
						mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Your name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							placeholder: "John Ludgate"
						})] }) : null,
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
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							name: "password",
							type: "password",
							required: true,
							autoComplete: mode === "up" ? "new-password" : "current-password"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: busy ? "Please wait…" : mode === "up" ? "Create account" : "Sign in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 text-sm text-muted underline-offset-4 hover:underline",
					onClick: () => setMode((m) => m === "in" ? "up" : "in"),
					children: mode === "in" ? "First time? Create an account" : "Already have an account? Sign in"
				})
			]
		})
	});
}
//#endregion
export { Login as component };
