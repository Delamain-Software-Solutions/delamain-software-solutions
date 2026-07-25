**The Dumpster Rental System** is a full-stack SaaS operations platform built for a dumpster rental and waste logistics business. It digitizes and centralizes the entire daily workflow, covering dispatch scheduling, order management, customer and vendor CRM, automated invoicing, and real-time fleet tracking, all in one production-grade web application built with React, Node.js, Express, and Supabase.

🔍 **The Problem**  
The client was running their entire operation manually across spreadsheets, phone calls, and paper tickets. Dispatchers had no live view of active jobs, billing was done by hand after each job, customer records were scattered, and there was no single source of truth for the team. Errors in dispatch and invoicing were costing the business time and money every day.

🏗️ **How We Built It**  
We built a full-stack web application from the ground up, designing the system architecture around the real daily workflow of the business.

Frontend and dispatch:

- Drag-and-drop dispatch scheduling board built in React, giving dispatchers a live view of all active jobs, driver assignments, and route status
- Real-time updates across all connected sessions using Pusher, so every team member sees changes instantly without refreshing
- Responsive web application design for use across desktop and mobile devices

Backend and database:

- Node.js and Express REST API handling all business logic, job lifecycle management, and billing calculations
- Supabase as the PostgreSQL-backed database layer, with structured data models for orders, customers, vendors, invoices, and fleet

CRM and billing:

- Full customer and vendor CRM for account management, communication history, and relationship tracking
- Automated invoicing triggered on job completion, with billing logic handling different job types, rates, and charge rules
- Payment processing integrated with Clover

Third-party API integrations:

- RingCentral for SMS and voice communication
- SendGrid for transactional email
- Google Maps API for route planning and location services
- Adobe EchoSign for digital document signing and e-signatures
- WhatsApp API for real-time customer notifications

🚀 **Results**  
The platform replaced every fragmented manual process the business had in place. Dispatch scheduling moved from phone-based coordination to a live drag-and-drop board. Invoicing that was previously calculated by hand now runs automatically on job completion. Customer and vendor data that lived in spreadsheets moved into a searchable, filterable CRM. The client reported a significant reduction in dispatch errors and billing delays after go-live, and the platform has remained in production use with no major issues since launch.