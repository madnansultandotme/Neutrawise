-- Create the footprint_submissions table
create table public.footprint_submissions (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    company_name text not null,
    contact_email text not null,
    status text default 'pending' not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    -- Store all calculator input data in a structured JSONB
    input_data jsonb not null default '{}'::jsonb,
    
    -- Store all calculated results in a structured JSONB
    results jsonb not null default '{}'::jsonb,
    
    -- Creating an index on commonly queried numeric values for efficient filtering
    total_emissions numeric generated always as (
        (results->>'final_emissions')::numeric
    ) stored
);

-- Enable Row Level Security (RLS)
alter table public.footprint_submissions enable row level security;

-- Create policy to allow authenticated users to read all submissions
create policy "Allow authenticated users to read submissions"
    on public.footprint_submissions
    for select
    to authenticated
    using (true);

-- Create policy to allow anyone to insert submissions
create policy "Allow public to insert submissions"
    on public.footprint_submissions
    for insert
    to public
    with check (true);