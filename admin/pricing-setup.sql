-- ================================================================
-- Aged Care Pricing - Supabase setup
-- Run this ONCE in the Supabase SQL Editor:
--   https://supabase.com/dashboard/project/qliweczadyilywpftsbw/sql/new
-- Paste everything below, then click "Run".
-- ================================================================

-- 1. Table
-- Drop any earlier/partial version first so we always get the correct schema.
-- (Safe during setup - there is no real pricing data yet.)
drop table if exists public.aged_care_pricing cascade;

create table public.aged_care_pricing (
  id            uuid primary key default gen_random_uuid(),
  service              text not null,          -- e.g. "Personal Care"
  category             text,                   -- optional grouping, e.g. "Daily Living"
  rate                 numeric(10,2),          -- legacy single rate (mirrors weekday)
  rate_weekday         numeric(10,2),          -- e.g. 72.00  (required in admin)
  rate_saturday        numeric(10,2),          -- optional; blank shows "-" on site
  rate_sunday          numeric(10,2),          -- optional
  rate_public_holiday  numeric(10,2),          -- optional
  unit          text not null default 'per hour',
  notes         text,                          -- optional short description
  display_order int  not null default 0,       -- controls order on the page
  active        boolean not null default true, -- false = hidden from public site
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- 2. Row Level Security
alter table public.aged_care_pricing enable row level security;

-- Public website can read ACTIVE prices only
drop policy if exists "public read active pricing" on public.aged_care_pricing;
create policy "public read active pricing"
  on public.aged_care_pricing for select
  to anon using (active = true);

-- Logged-in admins can read everything (including hidden/inactive)
drop policy if exists "auth read all pricing" on public.aged_care_pricing;
create policy "auth read all pricing"
  on public.aged_care_pricing for select
  to authenticated using (true);

-- Logged-in admins can add / edit / remove prices
drop policy if exists "auth insert pricing" on public.aged_care_pricing;
create policy "auth insert pricing"
  on public.aged_care_pricing for insert
  to authenticated with check (true);

drop policy if exists "auth update pricing" on public.aged_care_pricing;
create policy "auth update pricing"
  on public.aged_care_pricing for update
  to authenticated using (true) with check (true);

drop policy if exists "auth delete pricing" on public.aged_care_pricing;
create policy "auth delete pricing"
  on public.aged_care_pricing for delete
  to authenticated using (true);

-- 3. (Optional) Example starter rows - EDIT the rates, then uncomment to insert.
--    Delete this block if you'd rather add everything via the admin page.
-- insert into public.aged_care_pricing (service, category, rate, unit, notes, display_order) values
--   ('Personal Care',        'Daily Living', 72.00, 'per hour', 'Bathing, grooming, dressing, and morning/evening routines.', 1),
--   ('Domestic Assistance',  'Daily Living', 68.00, 'per hour', 'Cleaning, laundry, and home tidying.', 2),
--   ('Social Support',       'Wellbeing',    68.00, 'per hour', 'Companionship, outings, and community access.', 3),
--   ('Transport',            'Getting Around', 70.00, 'per hour', 'Appointments, shopping, and social outings.', 4);
