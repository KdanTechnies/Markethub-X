# Commonplace Marketplace frontend

## 1. Project overview

`Client/` is the frontend application inside the cloned `Markethub-X` repository. It uses the Next.js App Router and presents responsive public marketplace, account, messaging, meetup, dashboard, verification, and operational-console UI.

The project is a frontend foundation. Its route views, form drafts, validation, local filter controls, and empty/error/pending states are implemented. Live account and marketplace data, form submissions, authorization, image/document uploads, messaging, and meetup actions are **not** connected because the backend OpenAPI/Swagger contract was not supplied. Each such view says that it is awaiting the backend contract. No fake users, listings, messages, or API successes are used.

This is strictly peer-to-peer. Buyers and sellers meet in person, inspect the item, and exchange cash directly. The app has no checkout, wallet, escrow, payment gateway, or fee calculation.

## 2. Technologies used

- **Next.js App Router** provides route groups, layouts, and pages.
- **TypeScript strict mode** is enabled. React components use `.tsx`.
- **Tailwind CSS 4** provides responsive page and component styling with the supplied brand palette.
- **TanStack Query** is installed in the app provider and has a typed query hook ready for contract-backed fetchers.
- **Axios** is centralized in `src/lib/api.ts` with `withCredentials: true` for the backend’s secure cookie flow.
- **React Hook Form and Zod** validate local auth, listing, profile, meetup, and verification form drafts. These drafts are not asserted to be backend payload schemas.
- **Zustand** stores only shared UI state such as the mobile navigation and filter drawer.
- **Lucide React and Sonner** provide icons and toast infrastructure.
- **Vitest, React Testing Library, user-event, and jsdom** run the baseline unit and component tests.

## 3. Project structure

```text
Markethub-X/
└── Client/
    ├── public/
    │   ├── images/commonplace-mark.svg
    │   └── icons/
    │       ├── leaf.svg
    │       └── marketplace.svg
    ├── src/
    │   ├── app/
    │   │   ├── (public)/
    │   │   │   ├── about/page.tsx
    │   │   │   ├── contact/page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── (auth)/
    │   │   │   ├── forgot-password/page.tsx
    │   │   │   ├── login/page.tsx
    │   │   │   ├── register/page.tsx
    │   │   │   ├── reset-password/page.tsx
    │   │   │   ├── verify-email/page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── dashboard/
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── favorites/page.tsx
    │   │   ├── listings/
    │   │   │   ├── [id]/page.tsx
    │   │   │   ├── [id]/edit/page.tsx
    │   │   │   ├── new/page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── marketplace/page.tsx
    │   │   ├── messages/
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── notifications/page.tsx
    │   │   ├── operational-console/
    │   │   │   ├── [section]/page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── profile/
    │   │   │   ├── [id]/page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── verification/
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── providers.tsx
    │   ├── components/
    │   │   ├── dashboard/overview-card.tsx
    │   │   ├── forms/
    │   │   │   ├── auth-form.tsx
    │   │   │   ├── email-action-form.tsx
    │   │   │   ├── profile-form.tsx
    │   │   │   └── verification-form.tsx
    │   │   ├── layout/
    │   │   │   ├── auth-card.tsx
    │   │   │   └── page-container.tsx
    │   │   ├── listings/listing-form.tsx
    │   │   ├── marketplace/
    │   │   │   ├── listing-card.tsx
    │   │   │   └── marketplace-filters.tsx
    │   │   ├── messaging/
    │   │   │   ├── conversation-workspace.tsx
    │   │   │   └── meetup-proposal-card.tsx
    │   │   ├── navigation/
    │   │   │   ├── account-navigation.tsx
    │   │   │   ├── public-header.tsx
    │   │   │   └── site-footer.tsx
    │   │   ├── operational-console/
    │   │   │   ├── admin-navigation.tsx
    │   │   │   ├── console-frame.tsx
    │   │   │   └── data-table-state.tsx
    │   │   └── ui/
    │   │       ├── async-state.tsx
    │   │       ├── async-state.test.tsx
    │   │       ├── button.tsx
    │   │       ├── form-field.tsx
    │   │       ├── integration-notice.tsx
    │   │       └── session-boundary.tsx
    │   ├── constants/{brand,integrations,listing}.ts
    │   ├── hooks/use-api-query.ts
    │   ├── lib/api.ts
    │   ├── schemas/
    │   │   ├── auth.schema.ts
    │   │   ├── listing.schema.ts
    │   │   ├── meetup.schema.ts
    │   │   ├── profile.schema.ts
    │   │   ├── verification.schema.ts
    │   │   └── schemas.test.ts
    │   ├── services/
    │   │   ├── admin.service.ts
    │   │   ├── api-contract.ts
    │   │   ├── auth.service.ts
    │   │   ├── listings.service.ts
    │   │   ├── meetups.service.ts
    │   │   ├── messages.service.ts
    │   │   ├── users.service.ts
    │   │   ├── verification.service.ts
    │   │   └── api-contract.test.ts
    │   ├── stores/ui.store.ts
    │   ├── types/styles.d.ts
    │   └── utils/
    │       ├── format.ts
    │       └── format.test.ts
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── vitest.config.ts
    ├── vitest.setup.ts
    ├── next.config.ts
    ├── postcss.config.mjs
    └── tsconfig.json
```

The marketplace condition labels and all backend-specific category, status, and permission enums are intentionally sourced from the future API response rather than hardcoded.

## 4. Installation instructions

Use Node.js 20 or newer. In Git Bash, from the cloned repository root:

```bash
cd Client
npm ci
cp .env.example .env.local
```

Set the local backend origin in `.env.local` if it differs from the example. Start the app with `npm run dev` and open `http://localhost:3000`.

## 5. Environment configuration

`.env.example` intentionally contains only the variable specified in the product brief:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

No endpoint-path or other custom environment variables are defined. `.env.local` is ignored by Git; `.env.example` is safe to commit. Never place secrets or private credentials in a `NEXT_PUBLIC_` variable.

## 6. Development commands

Run these from `Client/`:

```bash
npm run dev        # Start the local development server
npm run build      # Build the production app
npm run start      # Serve the production build
npm run lint       # Run the configured Next.js lint command
npm test           # Run the baseline Vitest suite once
npm run test:watch # Run Vitest in watch mode
```

The baseline tests cover Zod form-draft validation, marketplace filter interactions, unauthenticated display state, API empty/error/pending states, safe error text, and explicit contract-pending service behavior. They do not mock backend endpoints or present fixture records as live data.

## 7. API integration instructions

The backend OpenAPI/Swagger document is the source of truth. No specification was supplied, so domain services currently throw a typed `BackendContractPendingError` and contain `TODO: Confirm from OpenAPI spec` markers. They make no network calls. The TanStack Query hook accepts a fetcher but does not invent one. The listing, search, and filter UI remains in a clear pending/empty state until documented operations are available.

The following integrations still await the contract:

- Authentication, email verification, password recovery, session lookup, and logout.
- Listing browse/details/create/edit/archive, categories, filters, sorting, pagination, and image-upload workflow.
- User profiles, profile updates, favorites, reviews, ratings, and review eligibility.
- Conversation list, message history/send, unread states, and WebSocket support if provided.
- Meetup proposal, confirmation/decline/reschedule/cancel, statuses, and completion actions.
- Notifications, counts, read state, and mark-as-read actions.
- Identity-verification fields, statuses, rejection reasons, resubmission rules, and private document upload/access.
- Operational-console statistics, users, moderation, verification queue, reports, categories, reviews, activity logs, and role/permission checks.

When the contract is available, add exact typed request/response shapes and endpoint paths to the relevant service, then add Query hooks and cache invalidation for documented mutations. Document any unavailable operation rather than simulating success. Use the backend-supported HTTP-only cookie flow; never store tokens in browser storage. Frontend state is not authorization, and the backend must enforce every protected action. Verification documents must stay private. Payments remain direct cash exchanges between the parties during an in-person meetup; do not add payment processing.

## 8. Build and deployment

From `Client/`, install reproducibly, build, then serve the production output:

```bash
npm ci
npm run build
npm run start
```

Deploy the Next.js app with `Client/` as its application root. Set `NEXT_PUBLIC_API_BASE_URL` to the production API origin at build/deployment time. The backend team must configure HTTPS, allowed origins, and secure cookie settings for the deployed frontend. Keep real credentials server-side. Treat backend workflows as unavailable until contract-backed integration and backend authorization have been verified.
