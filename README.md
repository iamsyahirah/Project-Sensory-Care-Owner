# Project Sensory Care Owner

SensoryCare is a lightweight **owner-only management dashboard** for managing students, home-visit sessions, payments, and simple monthly reports for a sensory care service.

This version intentionally uses **one application role only: Owner**. There is no Parent login, Tutor login, or multi-role authentication.

## Overview

The project started as a single HTML prototype containing the interface, custom CSS, JavaScript logic, seed data, and localStorage handling in one file. It has been reorganized into separate files so the project is easier to read, maintain, and extend.

## Features

- Owner dashboard with daily business overview
- Student records and student profiles
- Home-visit/session scheduling
- Session history and session notes
- Calendar view
- Payment tracking and outstanding-payment status
- Monthly business report summary
- Owner/business settings
- Browser `localStorage` persistence
- Responsive sidebar and mobile navigation

## Owner-Only Scope

The application is designed for a single owner.

It does **not** include:

- Parent accounts
- Tutor accounts
- Role-based access control
- Multi-user authentication
- Parent or tutor dashboards

Parent/guardian information remains part of a student's record because it is operational information needed by the owner.

## Project Structure

```text
sensorycare-owner/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

### `index.html`

Contains the application structure and UI markup. Tailwind CSS, Lucide Icons, and the Inter font are loaded from CDN.

### `css/style.css`

Contains project-specific styles such as:

- custom scrollbar
- active navigation state
- toast animation
- base font rule

Most UI styling still uses Tailwind utility classes directly in `index.html`.

### `js/app.js`

Contains the application logic, including:

- initial student data
- session data
- payment data
- localStorage state
- dashboard rendering
- student filtering
- profile rendering
- session scheduling
- session recording
- payment handling
- calendar rendering
- mobile menu behavior

## Technology

- HTML5
- Tailwind CSS via CDN
- Vanilla JavaScript
- Lucide Icons
- Browser localStorage

No build tool or package installation is required for this prototype.

## Getting Started

Clone or download the project, then open `index.html` in a browser.

For a better development workflow, run it through a local server such as VS Code Live Server.

Example project folder:

```bash
cd sensorycare-owner
```

Then open the folder in VS Code and launch `index.html` using Live Server.

## Data Storage

The current prototype stores its application data in browser localStorage using:

```text
sensorycare_data
```

This means the data is stored only in the browser/device being used.

Clearing browser storage will remove saved prototype data.

## Current Limitations

This is currently a front-end prototype.

It does not yet provide:

- database storage
- cloud synchronization
- secure authentication
- data backup
- invoice PDF generation
- real-time notifications
- multiple owner/staff accounts

## Possible Next Development

A future production version could add:

1. Owner login
2. Supabase, Firebase, or another backend
3. Database-backed student/session/payment records
4. Editable owner profile
5. Dynamic calendar navigation
6. Receipt or invoice generation
7. Dashboard charts
8. Export to CSV/PDF
9. Backup and restore
10. Deployment to Cloudflare Pages, Vercel, or Netlify

## Development Notes

The current application is intentionally kept simple so the core JavaScript logic can be studied without introducing a framework.

A later version can be migrated to React once the HTML/CSS/JavaScript structure and application flow are stable.

## Project Status

**Prototype / Learning Project**

The application is suitable for UI demonstration, portfolio development, and continued front-end learning. It should not yet be used as a production system for sensitive client information.

## License

This repository can use the MIT License if you plan to publish it as an open-source portfolio project.
