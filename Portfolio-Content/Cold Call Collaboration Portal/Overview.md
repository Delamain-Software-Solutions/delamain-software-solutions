A real time collaboration portal for cold calling teams. Multiple users log in at once and work from the same shared list of leads. When one person adds a note, marks a lead done, or flags it, every other connected user sees the update instantly, no refresh needed.

The frontend is React, the backend is fully serverless on AWS, using Lambda for the API logic and DynamoDB as the database. The frontend runs on CloudFront and S3, with the domain connected through Route 53.

This setup scales automatically and keeps hosting costs low, since there is no server to manage or pay for when idle.