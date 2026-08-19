import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { RedirectToSignIn, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { formatShowDate, formatShowTime } from "@/lib/site/format";
import {
  addPhoto,
  addReview,
  addShow,
  addVideo,
  deleteMessage,
  deletePhoto,
  deleteReview,
  deleteShow,
  deleteVideo,
  getAdminBundle,
  saveSettings,
  updateShow,
  type PhotoRow,
  type ShowRow,
} from "@/lib/site/queries";
import { compressImage } from "@/lib/site/compress-image";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/admin")({
  component: AdminGate,
});

const TABS = ["Shows", "News", "Photos", "Contact", "Videos", "Reviews", "Messages"] as const;
type Tab = (typeof TABS)[number];

function AdminGate() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="grid min-h-dvh place-items-center bg-bg text-muted">Loading…</div>;
  }
  if (!user) return <RedirectToSignIn />;
  return <AdminPage />;
}

function AdminPage() {
  const [tab, setTab] = useState<Tab>("Shows");
  const [bundle, setBundle] = useState<Awaited<ReturnType<typeof getAdminBundle>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    void reload();
  }, []);

  return (
    <div className="min-h-dvh bg-bg">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div>
            <p className="font-display text-xl font-semibold">Update the site</p>
            <p className="text-sm text-muted">Big buttons. Plain language. Take your time.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-pine hover:underline">
              View the public site
            </Link>
            <UserButton />
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap",
                tab === t ? "bg-pine text-surface" : "bg-paper text-ink hover:bg-line",
              )}
            >
              {t}
              {t === "Messages" && bundle?.messages.length ? ` (${bundle.messages.length})` : ""}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8">
        {error ? (
          <p className="rounded-lg border border-danger/30 bg-surface px-4 py-3 text-sm text-danger">{error}</p>
        ) : null}
        {loading && !bundle ? <p className="text-sm text-muted">Loading your pages…</p> : null}
        {bundle && tab === "Shows" ? <ShowsTab upcoming={bundle.upcoming} past={bundle.past} onChange={reload} /> : null}
        {bundle && tab === "News" ? (
          <NoteTab announcement={bundle.settings.announcement} onChange={reload} settings={bundle.settings} />
        ) : null}
        {bundle && tab === "Photos" ? (
          <PhotosTab photos={bundle.photos} settings={bundle.settings} onChange={reload} />
        ) : null}
        {bundle && tab === "Contact" ? <ContactTab settings={bundle.settings} onChange={reload} /> : null}
        {bundle && tab === "Videos" ? <VideosTab videos={bundle.videos} onChange={reload} /> : null}
        {bundle && tab === "Reviews" ? <ReviewsTab reviews={bundle.reviews} onChange={reload} /> : null}
        {bundle && tab === "Messages" ? <MessagesTab messages={bundle.messages} onChange={reload} /> : null}
      </div>
    </div>
  );
}

function ShowsTab({
  upcoming,
  past,
  onChange,
}: {
  upcoming: ShowRow[];
  past: ShowRow[];
  onChange: () => Promise<void>;
}) {
  const [editing, setEditing] = useState<ShowRow | null>(null);

  return (
    <div className="grid gap-8">
      <section className="rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl font-semibold">{editing ? "Edit this show" : "Add a show"}</h2>
        <p className="mt-1 text-sm text-muted">Date, time, and the name of the place. That is enough.</p>
        <ShowForm
          key={editing?.id ?? "new"}
          initial={editing}
          onCancel={() => setEditing(null)}
          onSaved={async () => {
            setEditing(null);
            await onChange();
          }}
        />
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold">Coming up ({upcoming.length})</h2>
        <ShowList
          rows={upcoming}
          onEdit={setEditing}
          onDelete={async (id) => {
            if (!confirm("Remove this show?")) return;
            await deleteShow({ data: id });
            toast.success("Removed.");
            await onChange();
          }}
        />
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold">Already played</h2>
        <ShowList
          rows={past}
          onEdit={setEditing}
          onDelete={async (id) => {
            if (!confirm("Remove this show?")) return;
            await deleteShow({ data: id });
            toast.success("Removed.");
            await onChange();
          }}
        />
      </section>
    </div>
  );
}

function ShowForm({
  initial,
  onSaved,
  onCancel,
}: {
  initial: ShowRow | null;
  onSaved: () => Promise<void>;
  onCancel: () => void;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="mt-5 grid gap-4 sm:grid-cols-2"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const payload = {
          date: String(fd.get("date") ?? ""),
          time: String(fd.get("time") ?? ""),
          venue: String(fd.get("venue") ?? ""),
          address: String(fd.get("address") ?? ""),
          city: String(fd.get("city") ?? ""),
          notes: String(fd.get("notes") ?? ""),
        };
        setBusy(true);
        try {
          if (initial) await updateShow({ data: { id: initial.id, ...payload } });
          else await addShow({ data: payload });
          toast.success(initial ? "Show updated." : "Show added.");
          (e.target as HTMLFormElement).reset();
          await onSaved();
        } catch (err) {
          toast.error(err instanceof Error ? err.message : "Could not save.");
        } finally {
          setBusy(false);
        }
      }}
    >
      <div>
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" required defaultValue={initial?.showDate ?? ""} />
      </div>
      <div>
        <Label htmlFor="time">Time</Label>
        <Input id="time" name="time" type="time" defaultValue={initial?.showTime ?? "14:00"} />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="venue">Place name</Label>
        <Input id="venue" name="venue" required defaultValue={initial?.venue ?? ""} placeholder="The Kensington" />
      </div>
      <div>
        <Label htmlFor="address">Street address</Label>
        <Input id="address" name="address" defaultValue={initial?.address ?? ""} />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input id="city" name="city" defaultValue={initial?.city ?? ""} placeholder="Burlington" />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="notes">Note (optional)</Label>
        <Input id="notes" name="notes" defaultValue={initial?.notes ?? ""} placeholder="Tickets at the door" />
      </div>
      <div className="flex flex-wrap gap-2 sm:col-span-2">
        <Button type="submit" disabled={busy}>
          {busy ? "Saving…" : initial ? "Save changes" : "Add this show"}
        </Button>
        {initial ? (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        ) : null}
      </div>
    </form>
  );
}

function ShowList({
  rows,
  onEdit,
  onDelete,
}: {
  rows: ShowRow[];
  onEdit: (row: ShowRow) => void;
  onDelete: (id: number) => void;
}) {
  if (rows.length === 0) return <p className="mt-3 text-sm text-muted">Nothing here yet.</p>;
  return (
    <ul className="mt-4 divide-y divide-line border-y border-line">
      {rows.map((row) => (
        <li key={row.id} className="flex flex-wrap items-start justify-between gap-3 py-3">
          <div>
            <p className="text-sm text-pine">
              {formatShowDate(row.showDate)}
              {row.showTime ? ` · ${formatShowTime(row.showTime)}` : ""}
            </p>
            <p className="font-medium">{row.venue}</p>
            <p className="text-sm text-muted">{[row.address, row.city].filter(Boolean).join(", ")}</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onClick={() => onEdit(row)}>
              Edit
            </Button>
            <Button size="sm" variant="ghost" onClick={() => onDelete(row.id)}>
              Remove
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function NoteTab({
  announcement,
  settings,
  onChange,
}: {
  announcement: string;
  settings: Awaited<ReturnType<typeof getAdminBundle>>["settings"];
  onChange: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="max-w-2xl rounded-xl border border-line bg-surface p-5"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setBusy(true);
        try {
          await saveSettings({
            data: { ...settings, announcement: String(fd.get("announcement") ?? "") },
          });
          toast.success("News saved.");
          await onChange();
        } catch (err) {
          toast.error(err instanceof Error ? err.message : "Could not save.");
        } finally {
          setBusy(false);
        }
      }}
    >
      <h2 className="font-display text-2xl font-semibold">Latest news on the home page</h2>
      <p className="mt-1 text-sm text-muted">
        A short banner under the main picture. A new CD, a radio play, or anything people should see first.
      </p>
      <div className="mt-4">
        <Label htmlFor="announcement">The note</Label>
        <Textarea id="announcement" name="announcement" rows={4} defaultValue={announcement} />
      </div>
      <Button type="submit" className="mt-4" disabled={busy}>
        {busy ? "Saving…" : "Save note"}
      </Button>
    </form>
  );
}

function PhotosTab({
  photos,
  settings,
  onChange,
}: {
  photos: PhotoRow[];
  settings: Awaited<ReturnType<typeof getAdminBundle>>["settings"];
  onChange: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [caption, setCaption] = useState("");
  const [previews, setPreviews] = useState<{ name: string; src: string }[]>([]);

  async function setHero(kind: "wide" | "mobile" | "both", src: string) {
    setBusy(true);
    try {
      await saveSettings({
        data: {
          ...settings,
          heroImage: kind === "mobile" ? settings.heroImage : src,
          heroImageMobile: kind === "wide" ? settings.heroImageMobile : src,
        },
      });
      toast.success(kind === "mobile" ? "Phone picture updated." : "Home picture updated.");
      await onChange();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-8">
      <section className="rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl font-semibold">Add photos</h2>
        <p className="mt-1 text-sm text-muted">
          Choose pictures from your computer. They will show on the Photos page.
        </p>
        <form
          className="mt-5 grid gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (previews.length === 0) {
              toast.error("Choose at least one photo.");
              return;
            }
            setBusy(true);
            try {
              for (const preview of previews) {
                await addPhoto({ data: { src: preview.src, caption } });
              }
              toast.success(previews.length === 1 ? "Photo added." : `${previews.length} photos added.`);
              setPreviews([]);
              setCaption("");
              await onChange();
            } catch (err) {
              toast.error(err instanceof Error ? err.message : "Could not add.");
            } finally {
              setBusy(false);
            }
          }}
        >
          <div>
            <Label htmlFor="photo-files">Choose photos</Label>
            <Input
              id="photo-files"
              name="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={async (e) => {
                const files = Array.from(e.target.files ?? []);
                e.target.value = "";
                if (files.length === 0) return;
                setBusy(true);
                try {
                  const next: { name: string; src: string }[] = [];
                  for (const file of files) {
                    next.push({ name: file.name, src: await compressImage(file) });
                  }
                  setPreviews((prev) => [...prev, ...next]);
                } catch (err) {
                  toast.error(err instanceof Error ? err.message : "Could not read that photo.");
                } finally {
                  setBusy(false);
                }
              }}
            />
          </div>
          {previews.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {previews.map((preview) => (
                <figure key={preview.src.slice(-24)} className="overflow-hidden rounded-lg border border-line">
                  <img src={preview.src} alt={preview.name} className="aspect-square w-full object-cover" />
                </figure>
              ))}
            </div>
          ) : null}
          <div>
            <Label htmlFor="photo-caption">Caption (optional)</Label>
            <Input
              id="photo-caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="On stage in Burlington"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="submit" disabled={busy || previews.length === 0}>
              {busy ? "Working…" : previews.length > 1 ? `Add ${previews.length} photos` : "Add photo"}
            </Button>
            {previews.length > 0 ? (
              <Button type="button" variant="secondary" onClick={() => setPreviews([])}>
                Clear
              </Button>
            ) : null}
          </div>
        </form>
      </section>

      <section className="rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl font-semibold">Home page picture</h2>
        <p className="mt-1 text-sm text-muted">
          Computers and phones can use different pictures so faces stay in the frame.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-lg border border-line">
            <img src={settings.heroImage} alt="Computer home picture" className="aspect-video w-full object-cover" />
            <figcaption className="px-3 py-2 text-sm text-muted">Computer</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-line">
            <img src={settings.heroImageMobile} alt="Phone home picture" className="aspect-[2/3] w-full object-cover" />
            <figcaption className="px-3 py-2 text-sm text-muted">Phone</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold">On the Photos page ({photos.length})</h2>
        {photos.length === 0 ? (
          <p className="mt-3 text-sm text-muted">Nothing here yet.</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {photos.map((photo) => (
              <li key={photo.id} className="overflow-hidden rounded-xl border border-line bg-surface">
                <img src={photo.src} alt={photo.caption ?? ""} className="aspect-[4/3] w-full object-cover" />
                <div className="grid gap-3 p-4">
                  {photo.caption ? <p className="text-sm text-muted">{photo.caption}</p> : null}
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary" disabled={busy} onClick={() => setHero("both", photo.src)}>
                      Use on home
                    </Button>
                    <Button size="sm" variant="secondary" disabled={busy} onClick={() => setHero("wide", photo.src)}>
                      Computer only
                    </Button>
                    <Button size="sm" variant="secondary" disabled={busy} onClick={() => setHero("mobile", photo.src)}>
                      Phone only
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={busy}
                      onClick={async () => {
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
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function ContactTab({
  settings,
  onChange,
}: {
  settings: Awaited<ReturnType<typeof getAdminBundle>>["settings"];
  onChange: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="max-w-lg rounded-xl border border-line bg-surface p-5"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setBusy(true);
        try {
          await saveSettings({
            data: {
              ...settings,
              phone: String(fd.get("phone") ?? ""),
              email: String(fd.get("email") ?? ""),
              city: String(fd.get("city") ?? ""),
            },
          });
          toast.success("Contact details saved.");
          await onChange();
        } catch (err) {
          toast.error(err instanceof Error ? err.message : "Could not save.");
        } finally {
          setBusy(false);
        }
      }}
    >
      <h2 className="font-display text-2xl font-semibold">Phone and email</h2>
      <div className="mt-4 grid gap-4">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" defaultValue={settings.phone} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" defaultValue={settings.email} />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" defaultValue={settings.city} />
        </div>
        <Button type="submit" disabled={busy}>
          {busy ? "Saving…" : "Save"}
        </Button>
      </div>
    </form>
  );
}

function VideosTab({
  videos,
  onChange,
}: {
  videos: Awaited<ReturnType<typeof getAdminBundle>>["videos"];
  onChange: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="grid gap-8">
      <form
        className="rounded-xl border border-line bg-surface p-5"
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setBusy(true);
          try {
            await addVideo({
              data: {
                title: String(fd.get("title") ?? ""),
                youtube: String(fd.get("youtube") ?? ""),
                note: String(fd.get("note") ?? ""),
              },
            });
            toast.success("Video added.");
            (e.target as HTMLFormElement).reset();
            await onChange();
          } catch (err) {
            toast.error(err instanceof Error ? err.message : "Could not add.");
          } finally {
            setBusy(false);
          }
        }}
      >
        <h2 className="font-display text-2xl font-semibold">Add a YouTube video</h2>
        <p className="mt-1 text-sm text-muted">Paste the whole YouTube link. No special codes needed.</p>
        <div className="mt-4 grid gap-4">
          <div>
            <Label htmlFor="title">Song title</Label>
            <Input id="title" name="title" required />
          </div>
          <div>
            <Label htmlFor="youtube">YouTube link</Label>
            <Input id="youtube" name="youtube" required placeholder="https://www.youtube.com/watch?v=…" />
          </div>
          <div>
            <Label htmlFor="note">Short note (optional)</Label>
            <Input id="note" name="note" placeholder="A Kitchen Table Recording" />
          </div>
          <Button type="submit" disabled={busy}>
            {busy ? "Adding…" : "Add video"}
          </Button>
        </div>
      </form>
      <ul className="divide-y divide-line border-y border-line">
        {videos.map((v) => (
          <li key={v.id} className="flex items-start justify-between gap-3 py-3">
            <div>
              <p className="font-medium">{v.title}</p>
              <p className="text-sm text-muted">{v.note}</p>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={async () => {
                if (!confirm("Remove this video?")) return;
                await deleteVideo({ data: v.id });
                toast.success("Removed.");
                await onChange();
              }}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewsTab({
  reviews,
  onChange,
}: {
  reviews: Awaited<ReturnType<typeof getAdminBundle>>["reviews"];
  onChange: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="grid gap-8">
      <form
        className="rounded-xl border border-line bg-surface p-5"
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setBusy(true);
          try {
            await addReview({
              data: {
                quote: String(fd.get("quote") ?? ""),
                attribution: String(fd.get("attribution") ?? ""),
                publication: String(fd.get("publication") ?? ""),
              },
            });
            toast.success("Review added.");
            (e.target as HTMLFormElement).reset();
            await onChange();
          } catch (err) {
            toast.error(err instanceof Error ? err.message : "Could not add.");
          } finally {
            setBusy(false);
          }
        }}
      >
        <h2 className="font-display text-2xl font-semibold">Add a review</h2>
        <div className="mt-4 grid gap-4">
          <div>
            <Label htmlFor="quote">What they wrote</Label>
            <Textarea id="quote" name="quote" required rows={4} />
          </div>
          <div>
            <Label htmlFor="attribution">Who wrote it</Label>
            <Input id="attribution" name="attribution" placeholder="Joe Ross" />
          </div>
          <div>
            <Label htmlFor="publication">Newspaper or magazine</Label>
            <Input id="publication" name="publication" placeholder="Penguin Eggs" />
          </div>
          <Button type="submit" disabled={busy}>
            {busy ? "Adding…" : "Add review"}
          </Button>
        </div>
      </form>
      <ul className="space-y-3">
        {reviews.map((r) => (
          <li key={r.id} className="rounded-xl border border-line bg-surface p-4">
            <p className="text-sm leading-relaxed">“{r.quote}”</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-sm text-muted">
                {r.attribution}
                {r.publication ? ` · ${r.publication}` : ""}
              </p>
              <Button
                size="sm"
                variant="ghost"
                onClick={async () => {
                  if (!confirm("Remove this review?")) return;
                  await deleteReview({ data: r.id });
                  toast.success("Removed.");
                  await onChange();
                }}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MessagesTab({
  messages,
  onChange,
}: {
  messages: Awaited<ReturnType<typeof getAdminBundle>>["messages"];
  onChange: () => Promise<void>;
}) {
  if (messages.length === 0) {
    return (
      <p className="text-sm text-muted">
        No notes yet. They will appear here when someone writes from the contact page.
      </p>
    );
  }
  return (
    <ul className="space-y-3">
      {messages.map((m) => (
        <li key={m.id} className="rounded-xl border border-line bg-surface p-4">
          <p className="font-medium">{m.name}</p>
          <p className="text-sm text-muted">
            <a className="text-pine" href={`mailto:${m.email}`}>
              {m.email}
            </a>
            {m.phone ? ` · ${m.phone}` : ""}
          </p>
          <p className="mt-2 text-sm leading-relaxed">{m.body}</p>
          <Button
            size="sm"
            variant="ghost"
            className="mt-3"
            onClick={async () => {
              await deleteMessage({ data: m.id });
              toast.success("Removed.");
              await onChange();
            }}
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}
