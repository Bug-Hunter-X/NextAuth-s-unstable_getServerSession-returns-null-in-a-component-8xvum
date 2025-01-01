# NextAuth unstable_getServerSession Bug

This repository demonstrates a bug encountered when using NextAuth's `unstable_getServerSession` within a Next.js component.  The issue results in the session object remaining null, despite successful authentication.

## Bug Description

The `unstable_getServerSession` function, expected to retrieve session data from the server, consistently returns `null` within the component.  This prevents access to user information after login.

## Solution

The provided solution employs `getServerSideProps` to fetch the session data during page rendering.  This ensures that session information is available to the component on mount, eliminating the unexpected `null` behavior.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Observe that the component doesn't render user data despite login.