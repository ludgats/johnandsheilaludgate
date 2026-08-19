import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, U as require_react, b as Navigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as signOut } from "./client-sGid3STf.mjs";
import { n as useCurrentUserState, t as useCurrentUser } from "./use-current-user-DZ7NZd4-.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { t as Button } from "./button-DxWxNcod.mjs";
import { n as Label, r as Textarea, t as Input } from "./input-BvSu_vpZ.mjs";
import { n as formatShowTime, t as formatShowDate } from "./format-Cd_nuLaQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as updateShow, _ as deleteReview, b as getAdminBundle, d as addPhoto, f as addReview, g as deletePhoto, h as deleteMessage, m as addVideo, p as addShow, v as deleteShow, x as saveSettings, y as deleteVideo } from "./router-CWDFWft-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BAMUoJBp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* Auth is ON by default (including the sandbox live preview, which does real
* sign-in). Visitors are signed out until they authenticate. The shared dev
* user only appears when auth is explicitly disabled (`VITE_AUTH_ENABLED=false`).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of).
*/
function UserButton() {
	const user = useCurrentUser();
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void signOut(),
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline",
				children: "Sign out"
			})
		]
	});
}
/** Shrink a photo in the browser so it can be stored with the rest of the site. */
async function compressImage(file) {
	if (!file.type.startsWith("image/")) throw new Error("Please choose a photo.");
	if (file.size > 15728640) throw new Error("That photo is too large. Try one under 15 MB.");
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
	const width = Math.max(1, Math.round(bitmap.width * scale));
	const height = Math.max(1, Math.round(bitmap.height * scale));
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) {
		bitmap.close();
		throw new Error("Could not read that photo.");
	}
	ctx.drawImage(bitmap, 0, 0, width, height);
	bitmap.close();
	for (const quality of [
		.82,
		.7,
		.58
	]) {
		const url = canvas.toDataURL("image/jpeg", quality);
		if (url.length <= 18e5) return url;
	}
	throw new Error("That photo is still too large. Try a smaller one.");
}
var TABS = [
	"Shows",
	"News",
	"Photos",
	"Contact",
	"Videos",
	"Reviews",
	"Messages"
];
function AdminGate() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg text-muted",
		children: "Loading…"
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPage, {});
}
function AdminPage() {
	const [tab, setTab] = (0, import_react.useState)("Shows");
	const [bundle, setBundle] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	async function reload() {
		setLoading(true);
		try {
			const next = await getAdminBundle();
			setBundle(next);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not load the editor.");
		} finally {
			setLoading(false);
		}
	}
	(0, import_react.useEffect)(() => {
		reload();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-line bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-semibold",
					children: "Update the site"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Big buttons. Plain language. Take your time."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-pine hover:underline",
						children: "View the public site"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(t),
					className: cn("rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap", tab === t ? "bg-pine text-surface" : "bg-paper text-ink hover:bg-line"),
					children: [t, t === "Messages" && bundle?.messages.length ? ` (${bundle.messages.length})` : ""]
				}, t))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 py-8",
			children: [
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-lg border border-danger/30 bg-surface px-4 py-3 text-sm text-danger",
					children: error
				}) : null,
				loading && !bundle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Loading your pages…"
				}) : null,
				bundle && tab === "Shows" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowsTab, {
					upcoming: bundle.upcoming,
					past: bundle.past,
					onChange: reload
				}) : null,
				bundle && tab === "News" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteTab, {
					announcement: bundle.settings.announcement,
					onChange: reload,
					settings: bundle.settings
				}) : null,
				bundle && tab === "Photos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotosTab, {
					photos: bundle.photos,
					settings: bundle.settings,
					onChange: reload
				}) : null,
				bundle && tab === "Contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactTab, {
					settings: bundle.settings,
					onChange: reload
				}) : null,
				bundle && tab === "Videos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideosTab, {
					videos: bundle.videos,
					onChange: reload
				}) : null,
				bundle && tab === "Reviews" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsTab, {
					reviews: bundle.reviews,
					onChange: reload
				}) : null,
				bundle && tab === "Messages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesTab, {
					messages: bundle.messages,
					onChange: reload
				}) : null
			]
		})]
	});
}
function ShowsTab({ upcoming, past, onChange }) {
	const [editing, setEditing] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: editing ? "Edit this show" : "Add a show"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Date, time, and the name of the place. That is enough."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowForm, {
						initial: editing,
						onCancel: () => setEditing(null),
						onSaved: async () => {
							setEditing(null);
							await onChange();
						}
					}, editing?.id ?? "new")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-2xl font-semibold",
				children: [
					"Coming up (",
					upcoming.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowList, {
				rows: upcoming,
				onEdit: setEditing,
				onDelete: async (id) => {
					if (!confirm("Remove this show?")) return;
					await deleteShow({ data: id });
					toast.success("Removed.");
					await onChange();
				}
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: "Already played"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowList, {
				rows: past,
				onEdit: setEditing,
				onDelete: async (id) => {
					if (!confirm("Remove this show?")) return;
					await deleteShow({ data: id });
					toast.success("Removed.");
					await onChange();
				}
			})] })
		]
	});
}
function ShowForm({ initial, onSaved, onCancel }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-5 grid gap-4 sm:grid-cols-2",
		onSubmit: async (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			const payload = {
				date: String(fd.get("date") ?? ""),
				time: String(fd.get("time") ?? ""),
				venue: String(fd.get("venue") ?? ""),
				address: String(fd.get("address") ?? ""),
				city: String(fd.get("city") ?? ""),
				notes: String(fd.get("notes") ?? "")
			};
			setBusy(true);
			try {
				if (initial) await updateShow({ data: {
					id: initial.id,
					...payload
				} });
				else await addShow({ data: payload });
				toast.success(initial ? "Show updated." : "Show added.");
				e.target.reset();
				await onSaved();
			} catch (err) {
				toast.error(err instanceof Error ? err.message : "Could not save.");
			} finally {
				setBusy(false);
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "date",
				children: "Date"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "date",
				name: "date",
				type: "date",
				required: true,
				defaultValue: initial?.showDate ?? ""
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "time",
				children: "Time"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "time",
				name: "time",
				type: "time",
				defaultValue: initial?.showTime ?? "14:00"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "venue",
					children: "Place name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "venue",
					name: "venue",
					required: true,
					defaultValue: initial?.venue ?? "",
					placeholder: "The Kensington"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "address",
				children: "Street address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "address",
				name: "address",
				defaultValue: initial?.address ?? ""
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "city",
				children: "City"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "city",
				name: "city",
				defaultValue: initial?.city ?? "",
				placeholder: "Burlington"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "notes",
					children: "Note (optional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "notes",
					name: "notes",
					defaultValue: initial?.notes ?? "",
					placeholder: "Tickets at the door"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: busy,
					children: busy ? "Saving…" : initial ? "Save changes" : "Add this show"
				}), initial ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					onClick: onCancel,
					children: "Cancel"
				}) : null]
			})
		]
	});
}
function ShowList({ rows, onEdit, onDelete }) {
	if (rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-sm text-muted",
		children: "Nothing here yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 divide-y divide-line border-y border-line",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex flex-wrap items-start justify-between gap-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-pine",
					children: [formatShowDate(row.showDate), row.showTime ? ` · ${formatShowTime(row.showTime)}` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: row.venue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: [row.address, row.city].filter(Boolean).join(", ")
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => onEdit(row),
					children: "Edit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => onDelete(row.id),
					children: "Remove"
				})]
			})]
		}, row.id))
	});
}
function NoteTab({ announcement, settings, onChange }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "max-w-2xl rounded-xl border border-line bg-surface p-5",
		onSubmit: async (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			setBusy(true);
			try {
				await saveSettings({ data: {
					...settings,
					announcement: String(fd.get("announcement") ?? "")
				} });
				toast.success("News saved.");
				await onChange();
			} catch (err) {
				toast.error(err instanceof Error ? err.message : "Could not save.");
			} finally {
				setBusy(false);
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: "Latest news on the home page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "A short banner under the main picture. A new CD, a radio play, or anything people should see first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "announcement",
					children: "The note"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "announcement",
					name: "announcement",
					rows: 4,
					defaultValue: announcement
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-4",
				disabled: busy,
				children: busy ? "Saving…" : "Save note"
			})
		]
	});
}
function PhotosTab({ photos, settings, onChange }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [caption, setCaption] = (0, import_react.useState)("");
	const [previews, setPreviews] = (0, import_react.useState)([]);
	async function setHero(kind, src) {
		setBusy(true);
		try {
			await saveSettings({ data: {
				...settings,
				heroImage: kind === "mobile" ? settings.heroImage : src,
				heroImageMobile: kind === "wide" ? settings.heroImageMobile : src
			} });
			toast.success(kind === "mobile" ? "Phone picture updated." : "Home picture updated.");
			await onChange();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Add photos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Choose pictures from your computer. They will show on the Photos page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-5 grid gap-4",
						onSubmit: async (e) => {
							e.preventDefault();
							if (previews.length === 0) {
								toast.error("Choose at least one photo.");
								return;
							}
							setBusy(true);
							try {
								for (const preview of previews) await addPhoto({ data: {
									src: preview.src,
									caption
								} });
								toast.success(previews.length === 1 ? "Photo added." : `${previews.length} photos added.`);
								setPreviews([]);
								setCaption("");
								await onChange();
							} catch (err) {
								toast.error(err instanceof Error ? err.message : "Could not add.");
							} finally {
								setBusy(false);
							}
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "photo-files",
								children: "Choose photos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "photo-files",
								name: "photos",
								type: "file",
								accept: "image/*",
								multiple: true,
								onChange: async (e) => {
									const files = Array.from(e.target.files ?? []);
									e.target.value = "";
									if (files.length === 0) return;
									setBusy(true);
									try {
										const next = [];
										for (const file of files) next.push({
											name: file.name,
											src: await compressImage(file)
										});
										setPreviews((prev) => [...prev, ...next]);
									} catch (err) {
										toast.error(err instanceof Error ? err.message : "Could not read that photo.");
									} finally {
										setBusy(false);
									}
								}
							})] }),
							previews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2 sm:grid-cols-4",
								children: previews.map((preview) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "overflow-hidden rounded-lg border border-line",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: preview.src,
										alt: preview.name,
										className: "aspect-square w-full object-cover"
									})
								}, preview.src.slice(-24)))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "photo-caption",
								children: "Caption (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "photo-caption",
								value: caption,
								onChange: (e) => setCaption(e.target.value),
								placeholder: "On stage in Burlington"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: busy || previews.length === 0,
									children: busy ? "Working…" : previews.length > 1 ? `Add ${previews.length} photos` : "Add photo"
								}), previews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									onClick: () => setPreviews([]),
									children: "Clear"
								}) : null]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Home page picture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Computers and phones can use different pictures so faces stay in the frame."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "overflow-hidden rounded-lg border border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: settings.heroImage,
								alt: "Computer home picture",
								className: "aspect-video w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-3 py-2 text-sm text-muted",
								children: "Computer"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "overflow-hidden rounded-lg border border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: settings.heroImageMobile,
								alt: "Phone home picture",
								className: "aspect-[2/3] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-3 py-2 text-sm text-muted",
								children: "Phone"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-2xl font-semibold",
				children: [
					"On the Photos page (",
					photos.length,
					")"
				]
			}), photos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Nothing here yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-xl border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.caption ?? "",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-4",
						children: [photo.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: photo.caption
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									disabled: busy,
									onClick: () => setHero("both", photo.src),
									children: "Use on home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									disabled: busy,
									onClick: () => setHero("wide", photo.src),
									children: "Computer only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									disabled: busy,
									onClick: () => setHero("mobile", photo.src),
									children: "Phone only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									disabled: busy,
									onClick: async () => {
										if (!confirm("Remove this photo?")) return;
										setBusy(true);
										try {
											await deletePhoto({ data: photo.id });
											toast.success("Removed.");
											await onChange();
										} catch (err) {
											toast.error(err instanceof Error ? err.message : "Could not remove.");
										} finally {
											setBusy(false);
										}
									},
									children: "Remove"
								})
							]
						})]
					})]
				}, photo.id))
			})] })
		]
	});
}
function ContactTab({ settings, onChange }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "max-w-lg rounded-xl border border-line bg-surface p-5",
		onSubmit: async (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			setBusy(true);
			try {
				await saveSettings({ data: {
					...settings,
					phone: String(fd.get("phone") ?? ""),
					email: String(fd.get("email") ?? ""),
					city: String(fd.get("city") ?? "")
				} });
				toast.success("Contact details saved.");
				await onChange();
			} catch (err) {
				toast.error(err instanceof Error ? err.message : "Could not save.");
			} finally {
				setBusy(false);
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-semibold",
			children: "Phone and email"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "phone",
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "phone",
					name: "phone",
					defaultValue: settings.phone
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "email",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					name: "email",
					type: "email",
					defaultValue: settings.email
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "city",
					children: "City"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "city",
					name: "city",
					defaultValue: settings.city
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: busy,
					children: busy ? "Saving…" : "Save"
				})
			]
		})]
	});
}
function VideosTab({ videos, onChange }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-xl border border-line bg-surface p-5",
			onSubmit: async (e) => {
				e.preventDefault();
				const fd = new FormData(e.currentTarget);
				setBusy(true);
				try {
					await addVideo({ data: {
						title: String(fd.get("title") ?? ""),
						youtube: String(fd.get("youtube") ?? ""),
						note: String(fd.get("note") ?? "")
					} });
					toast.success("Video added.");
					e.target.reset();
					await onChange();
				} catch (err) {
					toast.error(err instanceof Error ? err.message : "Could not add.");
				} finally {
					setBusy(false);
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Add a YouTube video"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Paste the whole YouTube link. No special codes needed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "title",
							children: "Song title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "title",
							name: "title",
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "youtube",
							children: "YouTube link"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "youtube",
							name: "youtube",
							required: true,
							placeholder: "https://www.youtube.com/watch?v=…"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "note",
							children: "Short note (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "note",
							name: "note",
							placeholder: "A Kitchen Table Recording"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: busy ? "Adding…" : "Add video"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-line border-y border-line",
			children: videos.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: v.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: v.note
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: async () => {
						if (!confirm("Remove this video?")) return;
						await deleteVideo({ data: v.id });
						toast.success("Removed.");
						await onChange();
					},
					children: "Remove"
				})]
			}, v.id))
		})]
	});
}
function ReviewsTab({ reviews, onChange }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-xl border border-line bg-surface p-5",
			onSubmit: async (e) => {
				e.preventDefault();
				const fd = new FormData(e.currentTarget);
				setBusy(true);
				try {
					await addReview({ data: {
						quote: String(fd.get("quote") ?? ""),
						attribution: String(fd.get("attribution") ?? ""),
						publication: String(fd.get("publication") ?? "")
					} });
					toast.success("Review added.");
					e.target.reset();
					await onChange();
				} catch (err) {
					toast.error(err instanceof Error ? err.message : "Could not add.");
				} finally {
					setBusy(false);
				}
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: "Add a review"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "quote",
						children: "What they wrote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "quote",
						name: "quote",
						required: true,
						rows: 4
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "attribution",
						children: "Who wrote it"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "attribution",
						name: "attribution",
						placeholder: "Joe Ross"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "publication",
						children: "Newspaper or magazine"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "publication",
						name: "publication",
						placeholder: "Penguin Eggs"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: busy,
						children: busy ? "Adding…" : "Add review"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed",
					children: [
						"“",
						r.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [r.attribution, r.publication ? ` · ${r.publication}` : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: async () => {
							if (!confirm("Remove this review?")) return;
							await deleteReview({ data: r.id });
							toast.success("Removed.");
							await onChange();
						},
						children: "Remove"
					})]
				})]
			}, r.id))
		})]
	});
}
function MessagesTab({ messages, onChange }) {
	if (messages.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "No notes yet. They will appear here when someone writes from the contact page."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3",
		children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-xl border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: m.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-pine",
						href: `mailto:${m.email}`,
						children: m.email
					}), m.phone ? ` · ${m.phone}` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					children: m.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					className: "mt-3",
					onClick: async () => {
						await deleteMessage({ data: m.id });
						toast.success("Removed.");
						await onChange();
					},
					children: "Remove"
				})
			]
		}, m.id))
	});
}
//#endregion
export { AdminGate as component };
