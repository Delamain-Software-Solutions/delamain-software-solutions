The Cold Call Collaboration Portal is a real-time lead management platform built for a sales team running simultaneous cold calling sessions. Multiple users log in at the same time, work from the same shared lead list, and see every update made by any team member reflected instantly across all connected sessions, with no page refresh required. 

The frontend is React, the backend is fully serverless on AWS, using Lambda for the API logic and DynamoDB as the database. The frontend runs on CloudFront and S3, with the domain connected through Route 53.

This setup scales automatically and keeps hosting costs low, since there is no server to manage or pay for when idle.

The platform replaced the fragmented spreadsheet system with a single shared workspace. The client reported an immediate reduction in duplicate calls and a clear improvement in team coordination from the first session. The serverless architecture keeps costs low since the system only incurs charges when actively in use, and scales automatically regardless of how many callers are connected.