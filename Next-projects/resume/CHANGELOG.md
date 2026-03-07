# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed
- Typo: `succes` → `success` in email action and form handler
- Email validation added to contact form
- Error messages now display in the UI
- Button types added to prevent accidental form submission
- useMemo dependencies fixed in HomePage component
- Dates in portfolio data corrected (2026 → 2025)
- Naming consistency: `workTimeLineData` → `workTimelineData`

### Changed
- Moved components from `src/app/components` to `src/components` (Next.js best practices)
- Hardcoded email addresses moved to environment variables
- Footer copyright year now updates dynamically
- Improved image optimization with `sizes` attribute

### Added
- `.env.example` file with documentation
- `LICENSE` file (MIT)
- ARIA attributes for accessibility (modal, form labels, button labels)
- Email format validation regex
- Disabled state styling for submit button

### Removed
- Old component directory structure

## [1.0.0] - 2026-03-06
### Initial Release
- Interactive resume with cyberpunk-inspired UI
- "Hire Me" modal with Resend email integration
- Pet projects showcase with timeline
- Work experience section
- Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion
