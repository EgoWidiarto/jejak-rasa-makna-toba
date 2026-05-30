create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  rating smallint not null check (rating between 1 and 5),
  name text not null,
  comment text not null,
  created_at timestamptz not null default now()
);

alter table public.testimonials enable row level security;

create policy "Allow public read testimonials"
  on public.testimonials
  for select
  using (true);

create policy "Allow public insert testimonials"
  on public.testimonials
  for insert
  with check (true);
