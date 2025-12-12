# Unified Portal — Technical PoC

**Author:** Manuel Silva (2025)

## Overview
This repository contains a proof-of-concept for a Unified Portal designed to centralize access to internal tools and improve onboarding and security. The project includes:
- Next.js frontend (PoC)
- Custom protocol handler `portal://` and a local launcher
- Azure AD integration examples (NextAuth)
- Packaging guidance for enterprise distribution (Intune)
- Documentation, runbook, and demo materials

> This repository is safe for public sharing (no company names or internal URLs).

## Quickstart (dev)
1. `cd Portal_NextJS`
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000 and click 'Login SSO' (mock) then use app cards.
