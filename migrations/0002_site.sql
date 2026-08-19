create table if not exists site_admins (
  user_id text primary key,
  created_at timestamptz not null default now()
);

create table if not exists site_settings (
  key text primary key,
  value text not null
);

create table if not exists shows (
  id serial primary key,
  show_date date not null,
  show_time text,
  venue text not null,
  address text,
  city text,
  province text,
  notes text,
  created_at timestamptz not null default now()
);
create index if not exists shows_date_idx on shows (show_date);

create table if not exists reviews (
  id serial primary key,
  quote text not null,
  attribution text not null,
  publication text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists videos (
  id serial primary key,
  title text not null,
  youtube_id text not null,
  note text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists photos (
  id serial primary key,
  src text not null,
  caption text,
  sort_order integer not null default 0
);

create table if not exists messages (
  id serial primary key,
  name text not null,
  email text not null,
  phone text,
  body text not null,
  created_at timestamptz not null default now()
);
