import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DxWxNcod.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/40", {
	variants: {
		variant: {
			primary: "bg-pine text-surface hover:bg-pine-dark",
			secondary: "border border-line bg-surface text-ink hover:bg-paper",
			ghost: "text-ink hover:bg-paper",
			danger: "bg-danger text-surface hover:opacity-90"
		},
		size: {
			sm: "h-9 rounded-md px-3 text-sm",
			md: "h-11 rounded-lg px-4 text-sm",
			lg: "h-12 rounded-lg px-5 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
