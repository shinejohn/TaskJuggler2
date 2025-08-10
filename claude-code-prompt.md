# Task: Complete Magic Patterns to Supabase Integration

## Current State
- Project: Next.js app with Magic Patterns components
- Location: $(pwd)
- Components: 91 UI components in /src/components
- Generated files:
  - Queries: /src/lib/supabase/queries/
  - Hooks: /src/hooks/queries/
  - Mock data: /src/lib/mock-data/extracted-mocks.json

## Priority Tasks

1. **Generate Supabase Types**
   - Run: npx supabase gen types typescript --project-id [NEED_ID] > src/types/database.types.ts
   - Ask me for the project ID

2. **Fix Component Wrappers**
   - TaskCreator.tsx, Dashboard.tsx, TaskReport.tsx have wrappers
   - Update the .original.tsx files to accept props
   - Remove all useState and mock data

3. **Handle Failed Mock Extractions**
   Check these components for mock data:
   - ./src/components/Auth/SignupPage.tsx
   - ./src/components/DoerTimeline.tsx
   - ./src/components/Pages/UserInvoicesPage.tsx
   - ./src/components/Pages/VendorInvoicesPage.tsx
   - ./src/components/TaskReport.tsx

4. **Create Auth Flow**
   - Add login/signup pages using Supabase Auth
   - Protect routes that need authentication

## Start With
Begin by examining src/components/TaskCreator.original.tsx and show me what changes are needed.
