The Cold Call Collaboration Portal is a real-time lead management platform built for a sales team running simultaneous cold calling sessions. Multiple users log in at the same time, work from the same shared lead list, and see every update made by any team member reflected instantly across all connected sessions, with no page refresh required. Built as a fully serverless application on AWS using React, AWS Lambda, DynamoDB, and API Gateway.

🔍 The Problem
The client's cold calling team was working from separate spreadsheets with no real-time visibility. Callers were contacting the same leads simultaneously, notes added by one person were invisible to everyone else, and there was no shared source of truth. Duplicate calls were wasting time, warm leads were being missed, and the team had no clear picture of daily progress. They needed a single shared workspace where the whole team could operate together in real time.

🏗️ How We Built It
We designed the platform as a fully serverless AWS architecture, eliminating server management and giving the system automatic scaling with concurrent users.
Frontend and hosting:

React single-page application with a clean UI optimized for high-volume calling sessions
Hosted on Amazon S3 and served through Amazon CloudFront as the CDN layer
Domain routing managed through Amazon Route 53

Serverless backend:

AWS Lambda functions handling all API logic: reading and writing leads, processing status updates, managing notes and flags
Amazon DynamoDB as the NoSQL database storing the lead list, user data, notes, and status history
Amazon API Gateway as the entry point for all REST API requests from the frontend
No EC2 instances to manage, no idle server costs, automatic scaling with concurrent users

Real-time collaboration layer:

WebSocket connection through Amazon API Gateway WebSocket API, keeping a persistent connection open for every logged-in user
DynamoDB Streams trigger a Lambda function on every lead update
Lambda broadcasts the update through the WebSocket connection to every other connected session in milliseconds
Changes made by any user appear on every other screen instantly, with no polling and no page refresh

Lead management features:

Mark leads as done, flag for follow-up, or add timestamped notes from the lead list
Status filtering by outcome, priority, or assignment
All actions update in real time across every connected session simultaneously

🚀 Results
The platform replaced the fragmented spreadsheet system with a single shared workspace. The client reported an immediate reduction in duplicate calls and a clear improvement in team coordination from the first session. The serverless architecture keeps costs low since the system only incurs charges when actively in use, and scales automatically regardless of how many callers are connected.