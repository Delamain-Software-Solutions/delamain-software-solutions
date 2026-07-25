The Weighbridge Billing Platform is a full-stack web application built for a waste and recycling yard to digitize and automate their entire truck weighing and billing operation. The system handles two distinct truck workflows, incoming trucks delivering waste material and outgoing trucks collecting recycled material, each with its own weight capture process, billing logic, and invoicing flow. Built with React, Node.js, Express, and Supabase.

🔍 **The Problem**  
The client was managing all weighbridge operations manually. Staff recorded gross and tare weights by hand, calculated net weights on paper, applied per-ton rates and charge rules manually, and produced invoices after the fact. With dozens of truck movements per day, errors were frequent, billing was slow, and the yard manager had no real-time visibility into daily throughput or revenue.

🏗️ **How We Built It**  
We designed the system around the two core truck workflows, building a billing engine that handles the full complexity of the client's rate structures and charge rules.

Incoming truck workflow:

- Truck arrives loaded and weighs in, capturing gross weight via direct hardware integration with the weighbridge
- Truck unloads material and weighs out, capturing tare weight automatically
- System calculates net weight and applies the per-ton rate plus any additional fees and custom charge rules for that customer or material type
- Invoice generated automatically on job completion

Outgoing truck workflow:

- Truck arrives empty, gets loaded with material from the yard, and weighs out on exit
- System calculates the weight of material taken and generates a payout to the hauler
- Payout record created and logged against the transaction

Platform and backend:

- React frontend with role-based dashboards for yard staff and management
- Node.js and Express REST API handling all weighing logic, billing calculations, and hardware integration
- Supabase PostgreSQL database storing all transaction records, customer accounts, rate configurations, and invoice history
- Direct weighbridge hardware integration for automated weight capture, eliminating manual data entry

Reporting and analytics:

- Real-time operational dashboard tracking daily truck movements, material volumes, and revenue
- Custom reporting across both transaction types, filterable by date, customer, material, and driver
- Automated invoicing and payout records ready for export

🚀 **Results**  
The platform fully digitized a previously manual operation. Weight capture moved from handwritten records to automated hardware integration, eliminating transcription errors. Billing calculations that previously took staff significant time now run instantly on job completion. The reporting layer gave the yard manager live operational visibility they had never had before, and the platform has remained the operational backbone of the yard since launch.