# Commonplace Marketplace frontend

A responsive, frontend-only peer-to-peer marketplace built with Next.js App Router, TypeScript, Tailwind CSS, TanStack Query, Axios, React Hook Form, Zod, Zustand, Lucide, and Sonner. Page layouts use Tailwind utility classes. `src/app/globals.css` contains the Tailwind import, theme tokens, and small global resets. Buyers and sellers arrange a physical meetup and handle payment directly; this app includes no payment processing.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_BASE_URL`.
4. Start with `npm run dev` and visit `http://localhost:3000`.

Run `npm run format` to format supported files with Prettier, or `npm run format:check` to check formatting.

## Backend contract is required

No OpenAPI/Swagger file or backend contract was provided with the build prompt. To avoid inventing routes, request payloads, enum values, authentication behavior, or upload flows, only the API client foundation and listing query hook are included. The home page deliberately shows an integration state until `NEXT_PUBLIC_LISTINGS_PATH` is populated from the actual contract. The current hook expects a response that is either a list of listings or `{ items: Listing[], total?: number }`; confirm and adapt it to the documented backend response before setting that path. Authentication uses Axios `withCredentials`; tokens are never stored in browser storage.

Do not present this scaffold as fully integrated. The following areas need the actual contract before they can be wired safely: auth/session and profile, categories, listing details and management, image uploads, favorites, messaging, meetups, reviews, notifications, verification, and admin permissions/actions.

## Structure

```text
src/app/       App Router pages, metadata, global styles, providers
src/lib/       Shared Axios client and API configuration helpers
src/hooks/     TanStack Query hooks
src/types/     Reusable API/domain types
```

## Configuration and deployment

Set only public API origin and confirmed endpoint paths in `.env.local`; never put secrets in `NEXT_PUBLIC_` variables. Run `npm run build` for a production build, then deploy to a Next.js-compatible host with the production API origin and cookie/CORS settings configured by the backend team. The frontend cannot grant authorization: every protected action must also be enforced by the backend.
