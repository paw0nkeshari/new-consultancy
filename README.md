# Ease Consultancy — Expanded Multi-page Website

## Included
- Existing multi-page site and 15 service detail pages.
- Free interactive EMI, GST, simple-interest and profit-margin calculators.
- Downloadable GST, loan, incorporation, bookkeeping, payroll and business-plan checklists.
- Knowledge centre with educational starter articles.
- Client portal preview showing the planned service-request, secure document and invoice experience.
- Contact enquiry flow with WhatsApp/email/form-endpoint configuration.
- Appointment-time request field (not a confirmed live booking calendar).
- Trust and credibility sections with explicit placeholders for real team profiles, credentials and consented testimonials.
- Searchable/filterable service directory.
- SEO basics: page titles/descriptions, canonical tags, Open Graph metadata, sitemap.xml, robots.txt and web manifest.
- Responsive navigation, animations and reduced-motion support retained.

## Important setup before launch
1. Edit `assets/config.js` and add the official email and WhatsApp number. Optionally add a secure HTTPS form endpoint.
2. Confirm the business address, operating areas, actual service scope, pricing and contact details.
3. Add real team bios and qualifications, valid registrations/certifications and genuine testimonials only.
4. Review Privacy Policy and Terms against the real data collection, retention, cookies, vendors and applicable Indian law.
5. Submit sitemap.xml in Google Search Console and verify the domain. Add/verify Google Business Profile if eligible.
6. Add Google Analytics/consent setup only if required and disclose it in the privacy notice.

## Client portal status
The portal page is a design preview, not a working login system. Authentication, role-based access, encrypted document storage, request tracking, invoices, payment status, audit logs, backups and payment gateway require a secure backend and hosting configuration. Do not collect sensitive documents until these controls are implemented and tested.

## Professional compliance
Audit, certification, tax/legal representation, valuation and other reserved or regulated work must be performed only by appropriately qualified/authorised professionals. The website makes no unverified claims about credentials or results.

## Run locally
From this folder run `python -m http.server 8000`, then open `http://localhost:8000`.

## Standalone pages and animated website guide

Every HTML page now contains its own embedded CSS and JavaScript. Individual pages can be opened directly without depending on the shared `assets/style.css` or `assets/script.js` files for their layout or interactions.

An animated on-screen character called **Ease Guide** appears on every page. Visitors can start a guided tour, move through the sections on the current page, and continue page-by-page through Home, Services, Tools, Resources, Knowledge Centre, About, Process, FAQs, Contact and Client Portal. The guide can be minimised and reopened at any time.

The character and tour are implemented with inline SVG, CSS and JavaScript; no external character image or animation library is required.

Before publishing, configure the verified business email, phone/WhatsApp number and any secure enquiry endpoint in the inline `EASE_CONFIG` object on the relevant pages. The client portal remains a front-end preview until a secure backend, authentication and document storage are connected.
