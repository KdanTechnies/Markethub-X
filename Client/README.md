# Commonplace Marketplace — frontend

## 1. Project overview

This is a frontend-only Next.js project for a peer-to-peer marketplace. It is located in the `Client/` directory of the cloned `Markethub-X` repository. The current codebase is an initial UI and integration foundation, not the complete marketplace described in the product brief.

Buyers and sellers connect directly, arrange an in-person meetup, inspect the item, and handle payment between themselves. The app contains no payment processing, wallet, or escrow functionality.

Current UI: responsive Tailwind homepage, marketplace page shell, listing detail shell, login and registration information pages, and about/contact pages. Listing and search areas explain that API data is not connected. Account, marketplace management, communication, meetup, verification, notification, review, and administrative workflows are not implemented yet.

## 2. Technologies used

- **Next.js App Router** renders the site and route pages.
- **TypeScript** is configured in strict mode; page files use `.tsx` for typed React components.
- **Tailwind CSS 4** supplies the page layout and responsive utility styles. Global CSS is limited to the Tailwind import, theme tokens, and base styles.
- **Axios** is configured centrally in `src/lib/api.ts` with cookie credentials enabled.
- **TanStack Query** is installed and its provider is mounted. No API query or mutation hooks are active until the backend contract is available.
- **React Hook Form, Zod, Zustand, Lucide React, and Sonner** are installed for the planned application. Form validation, shared client state, and complete notification flows have not been implemented yet.

## 3. Project structure

```text
Markethub-X/
└── Client/
    ├── src/
    │   ├── app/                        # App Router pages, metadata, and Tailwind entry
    │   │   ├── about/page.tsx
    │   │   ├── contact/page.tsx
    │   │   ├── listings/[id]/page.tsx   # Listing details integration pending
    │   │   ├── login/page.tsx           # Auth contract pending
    │   │   ├── marketplace/page.tsx     # Listing API integration pending
    │   │   ├── register/page.tsx        # Auth contract pending
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── providers.tsx
    │   │   └── globals.css
    │   ├── components/site.tsx          # Shared header, footer, notice, and links
    │   ├── lib/api.ts                   # Central Axios client
    │   └── types/styles.d.ts            # TypeScript declaration for CSS imports
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.mjs
    ├── next.config.ts
    └── tsconfig.json
```

Directories for services, schemas, stores, and feature-specific hooks will be added when those integrations are implemented; they are not represented as existing code today.

## 4. Installation instructions

Use Node.js 20 or newer. From the cloned repository root, enter the client folder and install from the lockfile:

```bash
cd Client
npm ci
cp .env.example .env.local
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`. Set the local API origin in `.env.local` if your backend uses a different origin.

## 5. Environment configuration

`.env.example` contains the local API origin from the product brief:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

No endpoint path variables are defined because the backend OpenAPI/Swagger contract has not been provided. Do not add endpoint paths, query parameter names, request fields, or enum values until they are confirmed in that contract. Never put private credentials or secrets in a `NEXT_PUBLIC_` variable. `.env.local` is ignored by Git; `.env.example` is intentionally kept in Git.

## 6. Development commands

Run these from `Client/`:

```bash
npm run dev       # Start the local development server
npm run build     # Create a production build
npm run start     # Serve the production build
npm run lint      # Runs the configured Next.js lint command
```

There is no test script or test suite in the current project. Prettier formatting is available through the VS Code extension; no project-level Prettier config or CLI dependency is required.

## 7. API integration instructions

The backend API contract is the authority for frontend integration. No OpenAPI/Swagger document or backend source was supplied, so the current pages do not send listing, authentication, upload, messaging, meetup, or administrative requests. They do not display fabricated live listings.

When the contract is available:

1. Confirm the development API origin and cookie/CORS requirements.
2. Add reusable request and response types that match the documented field names and enum values.
3. Add service functions through the centralized Axios client using only documented methods, paths, payloads, and response shapes.
4. Add TanStack Query hooks for server state and invalidate relevant query keys after successful mutations.
5. Connect each page and form to those hooks, and implement API-backed loading, empty, and error states.
6. If a requested workflow has no backend endpoint, document that specific missing integration rather than simulating success.

Authentication must use the backend’s supported secure HTTP-only cookie flow. Do not store tokens in browser storage. Backend authorization must protect all restricted actions; frontend route visibility is not authorization.

## 8. Build and deployment

From `Client/`, install reproducibly and build:

```bash
npm ci
npm run build
npm run start
```

Deploy the Next.js app from the `Client/` directory to a Next.js-compatible host. Set `NEXT_PUBLIC_API_BASE_URL` to the production API origin at build/deployment time. The backend team must configure HTTPS, allowed origins, and secure cookie settings for the deployed frontend. No production secrets belong in frontend environment variables. Verify the real API integration and backend authorization before treating the marketplace workflows as production-ready.
