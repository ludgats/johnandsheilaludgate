import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, S as useRouter, U as require_react, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn, s as __exportAll } from "./ssr.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { t as authMiddleware } from "./middleware-b_CfhXXs.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as auth } from "./server-BboNXPKd.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-hf7sWz4n.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getPublicSite = createServerFn({ method: "GET" }).handler(createSsrRpc("15d94654242c9ff40679a1d61b4762ca86f94f5ace54c64699e97803d74dd93a"));
var getAdminBundle = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("1e6c9fdd573bdf61c19013e22c69b6c0da80e6eca5bcee1d3d3749ef33998338"));
var addShow = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createSsrRpc("b33a67da5ebaa0b430c9ac44c9dbe5f1ca82b25cfd448e663db3fddae1ce9d6b"));
var updateShow = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createSsrRpc("d204bbdcfd24177e59d9e2c2d69a0e13c35d04d686137aef7df1f5c4537c5122"));
var deleteShow = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("78d3c7916488559d764ab9e439c42b755e0e40734328d4bdf95e215713089948"));
var saveSettings = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createSsrRpc("9caee72ed020d09adf61fb5a5f2e4cc284318b6130f1811ed0eed9e8d5dc9292"));
var addReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createSsrRpc("333f4d51e5f118663f9eeea10531fd5b6c3a21f87af7dfc9b687866cae0e4cab"));
var deleteReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("b69cadb3a19c1b497d2bc9b87a0b4fc30cbd701544f4a2dc831e8bbe6d8846c0"));
var addVideo = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createSsrRpc("50f0faf4436f48e54d0418d8c9f63e34f6f7059c69558e1d23b81e3a9d8c213c"));
var deleteVideo = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("397d0a1c1c0ed8b43d8aca0858d24b17edf8a5d9ad3fa64f73a6dc7ddc6d89ca"));
var addPhoto = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createSsrRpc("77792732f6795856114b3324d8a20f68c776c34bf1741d066a401ccca190e945"));
var deletePhoto = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("851510ecf54edf1d6ca9fb480b663d262c374038ce860d7dedb407c2277eace6"));
var sendMessage = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("667b333ed73061ecd588c4aeb3b28ada7312c778ffabb7797ee9a39aa13288c0"));
var deleteMessage = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("e4ebc3866f491a35fc10b806d0ca04fc174abb16cac56dd4bad93007f192b041"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CQg7A0l5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-xl font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DA47qaIk.css";
var APP_NAME = "John & Sheila Ludgate";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Official site of John and Sheila Ludgate — folk and family songs from Burlington, Ontario. Shows, albums, videos and how to buy CDs."
			},
			{
				name: "theme-color",
				content: "#f3eee4"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				richColors: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$10 = () => import("./routes-DkA4sABb.mjs");
var Route$11 = createFileRoute("/")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./admin-BAMUoJBp.mjs");
var Route$10 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./bio-Bbi59f97.mjs");
var Route$9 = createFileRoute("/bio")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-B6TYfHQt.mjs");
var Route$8 = createFileRoute("/contact")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./login-DiEFAmWb.mjs");
var Route$7 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./lyrics-CB-BM9PM.mjs");
var Route$6 = createFileRoute("/lyrics")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./music-CBP0M34m.mjs");
var Route$5 = createFileRoute("/music")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./photos-Fh957IIN.mjs");
var Route$4 = createFileRoute("/photos")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./reviews-2MlDuswJ.mjs");
var Route$3 = createFileRoute("/reviews")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./shows-82XKuO50.mjs");
var Route$2 = createFileRoute("/shows")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./videos-CjMLuMTB.mjs");
var Route$1 = createFileRoute("/videos")({
	loader: () => getPublicSite(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AdminRoute: Route$10.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$12
	}),
	BioRoute: Route$9.update({
		id: "/bio",
		path: "/bio",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	LoginRoute: Route$7.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$12
	}),
	LyricsRoute: Route$6.update({
		id: "/lyrics",
		path: "/lyrics",
		getParentRoute: () => Route$12
	}),
	MusicRoute: Route$5.update({
		id: "/music",
		path: "/music",
		getParentRoute: () => Route$12
	}),
	PhotosRoute: Route$4.update({
		id: "/photos",
		path: "/photos",
		getParentRoute: () => Route$12
	}),
	ReviewsRoute: Route$3.update({
		id: "/reviews",
		path: "/reviews",
		getParentRoute: () => Route$12
	}),
	ShowsRoute: Route$2.update({
		id: "/shows",
		path: "/shows",
		getParentRoute: () => Route$12
	}),
	VideosRoute: Route$1.update({
		id: "/videos",
		path: "/videos",
		getParentRoute: () => Route$12
	}),
	ApiAuthSplatRoute: Route.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { updateShow as C, sendMessage as S, deleteReview as _, Route$4 as a, getAdminBundle as b, Route$8 as c, addPhoto as d, addReview as f, deletePhoto as g, deleteMessage as h, Route$3 as i, Route$9 as l, addVideo as m, Route$1 as n, Route$5 as o, addShow as p, Route$2 as r, Route$6 as s, router_exports as t, Route$11 as u, deleteShow as v, saveSettings as x, deleteVideo as y };
