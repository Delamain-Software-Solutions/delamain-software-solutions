#### 1. Portal Dashboard

Multiple users can log in and work from the same shared list of leads. When one person adds a note, marks a lead done, or flags it, every other connected user sees the update instantly, no refresh needed. Each user can also create private lists that will only be visible to them, or public lists that will be shared among other users as well.

#### 2. CI/CD Pipeline

The deployment pipeline as a GitHub Actions workflow. A push to main triggers deploy-backend, which packages and deploys the Lambda functions through the Serverless Framework, then deploy-frontend builds the React app, syncs it to S3, and invalidates the CloudFront cache. Every push ships to production automatically, with no manual deploy steps.

#### 3. Cloud Architecture

The AWS architecture, fully serverless. Route 53 sends frontend traffic to CloudFront and S3, where the React app is hosted, and API traffic to API Gateway, which invokes Lambda functions that read and write leads in DynamoDB. A DynamoDB Stream triggers a Lambda that broadcasts every change over a WebSocket connection, so all logged in users see updates live, with no servers to manage.