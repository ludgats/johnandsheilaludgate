import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-BvSu_vpZ.js
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg border border-line bg-surface px-3 text-base text-ink", "placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/35", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-lg border border-line bg-surface px-3 py-2 text-base text-ink", "placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/35", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-ink", className),
		...props
	});
}
//#endregion
export { Label as n, Textarea as r, Input as t };
