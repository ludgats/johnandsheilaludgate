import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { authClient } from "./client-BoQ21ulK.mjs";
import { n as isFamilyAdminEmail, t as FAMILY_ADMIN_EMAILS } from "./admins-BfKTxyPC.mjs";
import { n as useCurrentUserState } from "./use-current-user-B42il0rW.mjs";
import { t as Button } from "./button-DxWxNcod.mjs";
import { n as Label, t as Input } from "./input-BvSu_vpZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BIjWeebR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const [firstTime, setFirstTime] = (0, import_react.useState)(false);
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
					children: "Family sign-in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "Only John and Sheila can update the website. Visitors should use Contact instead."
				}),
				null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-3",
					onSubmit: async (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const email = String(fd.get("email") ?? "").trim();
						const password = String(fd.get("password") ?? "");
						const name = String(fd.get("name") ?? "John or Sheila");
						if (!isFamilyAdminEmail(email)) {
							toast.error("That email cannot update the site.");
							return;
						}
						setBusy(true);
						try {
							if (firstTime) {
								const { error } = await authClient.signUp.email({
									email,
									password,
									name
								});
								if (error) throw new Error(error.message ?? "Could not create the family login");
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
						firstTime ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Your name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							placeholder: "Sheila Ludgate"
						})] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Family email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email",
							defaultValue: FAMILY_ADMIN_EMAILS[0]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							name: "password",
							type: "password",
							required: true,
							autoComplete: firstTime ? "new-password" : "current-password"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: busy ? "Please wait…" : firstTime ? "Create family login" : "Sign in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 text-sm text-muted underline-offset-4 hover:underline",
					onClick: () => setFirstTime((v) => !v),
					children: firstTime ? "Already set up? Sign in" : "First time? Create the family password"
				})
			]
		})
	});
}
//#endregion
export { Login as component };
