# Vertex - Premium "Done-for-You" Project Agency

Vertex is a premium, high-end "Done-for-You" project service agency specializing in cutting-edge technology solutions, IEEE projects, and sophisticated AI integrations. This platform showcases our commitment to elite design, authoritative technical expertise, and a seamless client experience.

## ✨ Brand Identity: The "Ink and Gold" Aesthetic

Vertex has transitioned to a sophisticated "Ink and Gold" palette, representing authority, premium quality, and timeless technical excellence.

- **Color Palette**: 
  - **Ink Black** (#1A1814): Deep, authoritative base
  - **Premium Gold** (#C9A84C): Refined highlight and accent
  - **Soft Alabaster** (#FAF8F4): Clean, high-contrast background
- **Typography**: Playfair Display (Serif) for headlines and high-end agency feel.
- **Iconography**: Minimalist and professional Lucide icons (removing informal emojis).

## 🎨 Premium Features

### 🏢 Agency Experience
- **Premium Navbar**: Sleek, glassmorphism navigation with dynamic scroll states.
- **Authority Stats**: Highlighting 500+ successful projects and 10+ industry years.
- **Problem-Agitation-Solution**: A structured approach to demonstrating value.
- **Transparent Process**: A 4-step "Timeline of Excellence" for project delivery.

### 🛡️ Technical Excellence
- **AI-Powered Assistance**: Integrated Vertex AI Project Assist™ for real-time guidance.
- **Secure Infrastructure**: Supabase-backed inquiry systems with advanced validation.
- **Modern Tech Stack**: React 18, Tailwind CSS 4, and Motion for high-performance interactions.
- **Fluid Cursor**: Interactive cursor system for enhanced premium feel on desktop.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation
```bash
# Clone the repository
git clone https://github.com/MadhuChitikela/vertexproject-web.git

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 🗄️ Database Setup (Supabase)

Run the following SQL to set up the `project_inquiries` table:
```sql
create table project_inquiries (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text not null,
  phone text not null,
  project_title text,
  delivery_time int not null,
  submitted_at timestamp with time zone default now()
);

-- Enable RLS
alter table project_inquiries enable row level security;

-- Create policy to allow public inserts
create policy "Allow public inserts"
on project_inquiries for insert
with check (true);
```

## 📦 Component Architecture

```
src/
├── app/
│   ├── components/
│   │   ├── premium/            # New refined agency components
│   │   │   ├── PremiumNavbar.tsx
│   │   │   ├── PremiumHero.tsx
│   │   │   ├── PremiumStatsBar.tsx
│   │   │   ├── PremiumProcess.tsx
│   │   │   └── ...
│   │   ├── ai-assistant-button.tsx
│   │   └── project-inquiry-modal.tsx
│   └── App.tsx                 # Core layout & logic
└── styles/
    ├── index.css               # Global Tailwind styles
    └── vertex-premium.css      # Custom "Ink and Gold" design tokens
```

## 📊 Design Philosophy

1. **Authority**: Every element speaks to professional expertise.
2. **Minimalism**: Removing clutter to focus on impact and quality.
3. **Professionalism**: Professional iconography and type systems.
4. **Agility**: High-performance animations and responsive layouts.

---

**Vertex** - Elevating Technological Projects with Unmatched Excellence. 🖋️✨
