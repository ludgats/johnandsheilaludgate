import { createServerFn } from "@tanstack/react-start";
import { getSql, type Sql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";
import { SEED_ALBUMS, SEED_SHOWS } from "./seed-data";
import {
  DEFAULT_SETTINGS,
  SEED_PHOTOS,
  SEED_REVIEWS,
  SEED_VIDEOS,
} from "./content";

export type ShowRow = {
  id: number;
  showDate: string;
  showTime: string | null;
  venue: string;
  address: string | null;
  city: string | null;
  province: string | null;
  notes: string | null;
};

export type ReviewRow = {
  id: number;
  quote: string;
  attribution: string;
  publication: string | null;
  featured: boolean;
};

export type VideoRow = {
  id: number;
  title: string;
  youtubeId: string;
  note: string | null;
};

export type PhotoRow = {
  id: number;
  src: string;
  caption: string | null;
};

export type MessageRow = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  body: string;
  createdAt: string;
};

export type SiteSettings = {
  phone: string;
  email: string;
  city: string;
  announcement: string;
  homeQuote: string;
  homeQuoteBy: string;
  heroImage: string;
  heroImageMobile: string;
};

const seedLock = { done: false };

async function ensureSeeded(sql: Sql) {
  if (seedLock.done) return;
  const existing = await sql<{ c: number }>`select count(*)::int as c from shows`;
  if ((existing[0]?.c ?? 0) > 0) {
    seedLock.done = true;
    return;
  }

  for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
    await sql`insert into site_settings (key, value) values (${key}, ${value}) on conflict (key) do nothing`;
  }

  for (const s of SEED_SHOWS) {
    await sql`
      insert into shows (show_date, show_time, venue, address, city, province)
      values (${s.date}, ${s.time}, ${s.venue}, ${s.address}, ${s.city}, ${s.province})
    `;
  }

  let i = 0;
  for (const r of SEED_REVIEWS) {
    await sql`
      insert into reviews (quote, attribution, publication, featured, sort_order)
      values (${r.quote}, ${r.attribution}, ${r.publication}, ${r.featured}, ${i})
    `;
    i += 1;
  }

  i = 0;
  for (const v of SEED_VIDEOS) {
    await sql`
      insert into videos (title, youtube_id, note, sort_order)
      values (${v.title}, ${v.youtubeId}, ${v.note}, ${i})
    `;
    i += 1;
  }

  i = 0;
  for (const p of SEED_PHOTOS) {
    await sql`
      insert into photos (src, caption, sort_order)
      values (${p.src}, ${p.caption}, ${i})
    `;
    i += 1;
  }

  seedLock.done = true;
}

async function requireAdmin(sql: Sql, userId: string) {
  const admins = await sql<{ userId: string }>`select user_id as "userId" from site_admins`;
  if (admins.length === 0) {
    await sql`insert into site_admins (user_id) values (${userId})`;
    return;
  }
  if (!admins.some((a) => a.userId === userId)) {
    throw new Error("This sign-in is not allowed to update the site.");
  }
}

async function readSettings(sql: Sql): Promise<SiteSettings> {
  const rows = await sql<{ key: string; value: string }>`select key, value from site_settings`;
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  return {
    phone: map.phone ?? DEFAULT_SETTINGS.phone,
    email: map.email ?? DEFAULT_SETTINGS.email,
    city: map.city ?? DEFAULT_SETTINGS.city,
    announcement: map.announcement || DEFAULT_SETTINGS.announcement,
    homeQuote: map.homeQuote || DEFAULT_SETTINGS.homeQuote,
    homeQuoteBy: map.homeQuoteBy || DEFAULT_SETTINGS.homeQuoteBy,
    heroImage: map.heroImage || DEFAULT_SETTINGS.heroImage,
    heroImageMobile: map.heroImageMobile || DEFAULT_SETTINGS.heroImageMobile,
  };
}

export const getPublicSite = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  await ensureSeeded(sql);
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = await sql<ShowRow>`
    select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
    from shows
    where show_date >= ${today}
    order by show_date asc, show_time asc
  `;
  const recent = await sql<ShowRow>`
    select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
    from shows
    where show_date < ${today}
    order by show_date desc
    limit 8
  `;
  const reviews = await sql<ReviewRow>`
    select id, quote, attribution, publication, featured
    from reviews
    order by sort_order asc, id asc
  `;
  const videos = await sql<VideoRow>`
    select id, title, youtube_id as "youtubeId", note
    from videos
    order by sort_order asc, id asc
  `;
  const photos = await sql<PhotoRow>`
    select id, src, caption from photos order by sort_order asc, id asc
  `;
  const settings = await readSettings(sql);
  const unread = await sql<{ c: number }>`select count(*)::int as c from messages`;
  return {
    upcoming,
    recent,
    reviews,
    videos,
    photos,
    settings,
    albums: SEED_ALBUMS,
    messageCount: unread[0]?.c ?? 0,
  };
});

export const getAdminBundle = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    await ensureSeeded(sql);
    await requireAdmin(sql, context.userId);
    const today = new Date().toISOString().slice(0, 10);
    const upcoming = await sql<ShowRow>`
      select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
      from shows where show_date >= ${today}
      order by show_date asc, show_time asc
    `;
    const past = await sql<ShowRow>`
      select id, show_date as "showDate", show_time as "showTime", venue, address, city, province, notes
      from shows where show_date < ${today}
      order by show_date desc
    `;
    const reviews = await sql<ReviewRow>`
      select id, quote, attribution, publication, featured from reviews order by sort_order, id
    `;
    const videos = await sql<VideoRow>`
      select id, title, youtube_id as "youtubeId", note from videos order by sort_order, id
    `;
    const photos = await sql<PhotoRow>`
      select id, src, caption from photos order by sort_order asc, id asc
    `;
    const messages = await sql<MessageRow>`
      select id, name, email, phone, body, created_at as "createdAt"
      from messages order by created_at desc
    `;
    return {
      upcoming,
      past,
      reviews,
      videos,
      photos,
      messages,
      settings: await readSettings(sql),
    };
  });

export const addShow = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { date: string; time: string; venue: string; address: string; city: string; notes: string }) => d)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    if (!data.venue.trim() || !data.date) throw new Error("Please add a date and a place.");
    await sql`
      insert into shows (show_date, show_time, venue, address, city, province, notes)
      values (${data.date}, ${data.time || null}, ${data.venue.trim()}, ${data.address.trim() || null}, ${data.city.trim() || null}, ${"ON"}, ${data.notes.trim() || null})
    `;
    return { ok: true };
  });

export const updateShow = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { id: number; date: string; time: string; venue: string; address: string; city: string; notes: string }) => d)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    await sql`
      update shows
      set show_date = ${data.date},
          show_time = ${data.time || null},
          venue = ${data.venue.trim()},
          address = ${data.address.trim() || null},
          city = ${data.city.trim() || null},
          notes = ${data.notes.trim() || null}
      where id = ${data.id}
    `;
    return { ok: true };
  });

export const deleteShow = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: number) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    await sql`delete from shows where id = ${id}`;
    return { ok: true };
  });

export const saveSettings = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: SiteSettings) => d)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    for (const [key, value] of Object.entries(data)) {
      await sql`
        insert into site_settings (key, value) values (${key}, ${value})
        on conflict (key) do update set value = excluded.value
      `;
    }
    return { ok: true };
  });

export const addReview = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { quote: string; attribution: string; publication: string }) => d)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    if (!data.quote.trim()) throw new Error("Please paste the review.");
    await sql`
      insert into reviews (quote, attribution, publication, featured, sort_order)
      values (${data.quote.trim()}, ${data.attribution.trim() || "Reviewer"}, ${data.publication.trim() || null}, ${false}, ${0})
    `;
    return { ok: true };
  });

export const deleteReview = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: number) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    await sql`delete from reviews where id = ${id}`;
    return { ok: true };
  });

export const addVideo = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { title: string; youtube: string; note: string }) => d)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    const id = extractYoutubeId(data.youtube);
    if (!id) throw new Error("Paste a YouTube link or video ID.");
    if (!data.title.trim()) throw new Error("Please add a song title.");
    await sql`
      insert into videos (title, youtube_id, note, sort_order)
      values (${data.title.trim()}, ${id}, ${data.note.trim() || null}, ${0})
    `;
    return { ok: true };
  });

export const deleteVideo = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: number) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    await sql`delete from videos where id = ${id}`;
    return { ok: true };
  });

export const addPhoto = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { src: string; caption: string }) => d)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    const src = data.src.trim();
    if (!src.startsWith("data:image/") && !src.startsWith("/")) {
      throw new Error("Please choose a photo from your computer.");
    }
    if (src.length > 2_000_000) {
      throw new Error("That photo is too large. Try a smaller one.");
    }
    await sql`
      insert into photos (src, caption, sort_order)
      values (${src}, ${data.caption.trim() || null}, ${0})
    `;
    return { ok: true };
  });

export const deletePhoto = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: number) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    const settings = await readSettings(sql);
    const rows = await sql<PhotoRow>`select id, src, caption from photos where id = ${id}`;
    const gone = rows[0];
    await sql`delete from photos where id = ${id}`;
    if (gone) {
      const next: SiteSettings = { ...settings };
      if (settings.heroImage === gone.src) next.heroImage = DEFAULT_SETTINGS.heroImage;
      if (settings.heroImageMobile === gone.src) next.heroImageMobile = DEFAULT_SETTINGS.heroImageMobile;
      if (next.heroImage !== settings.heroImage || next.heroImageMobile !== settings.heroImageMobile) {
        for (const [key, value] of Object.entries(next)) {
          await sql`
            insert into site_settings (key, value) values (${key}, ${value})
            on conflict (key) do update set value = excluded.value
          `;
        }
      }
    }
    return { ok: true };
  });

export const sendMessage = createServerFn({ method: "POST" })
  .validator((d: { name: string; email: string; phone: string; body: string }) => d)
  .handler(async ({ data }) => {
    const sql = await getSql();
    await ensureSeeded(sql);
    if (!data.name.trim() || !data.email.trim() || !data.body.trim()) {
      throw new Error("Please fill in your name, email and message.");
    }
    await sql`
      insert into messages (name, email, phone, body)
      values (${data.name.trim()}, ${data.email.trim()}, ${data.phone.trim() || null}, ${data.body.trim()})
    `;
    return { ok: true };
  });

export const deleteMessage = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: number) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    await sql`delete from messages where id = ${id}`;
    return { ok: true };
  });

function extractYoutubeId(input: string): string | null {
  const raw = input.trim();
  if (/^[\w-]{11}$/.test(raw)) return raw;
  try {
    const u = new URL(raw);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).slice(0, 11) || null;
    const v = u.searchParams.get("v");
    if (v && /^[\w-]{11}$/.test(v)) return v;
    const parts = u.pathname.split("/");
    const idx = parts.findIndex((p) => p === "embed" || p === "shorts");
    if (idx >= 0 && parts[idx + 1] && /^[\w-]{11}$/.test(parts[idx + 1])) return parts[idx + 1];
  } catch {
    /* ignore */
  }
  return null;
}
