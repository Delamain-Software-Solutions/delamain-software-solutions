Orator AI Cloud Deployment is the AWS infrastructure and DevOps layer built to host and run the Orator AI presentation coaching application in production. It covers the full cloud architecture design, Docker containerization of a multi-service ML backend, a CI/CD pipeline using GitHub Actions, and a globally distributed React frontend served through CloudFront and S3. Built on AWS with Docker, GitHub Actions, and Amazon RDS.

🔍 The Problem
The client had a working full-stack application with a Django backend running multiple machine learning services, but no production infrastructure around it. The ML models were compute intensive, the backend had multiple independent services that needed to stay isolated, and the frontend needed to be served globally with low latency. They also needed automated deployments so the team could ship code updates without manual SSH sessions or downtime every time a change was made.

🏗️ How We Built It
We designed a production AWS cloud architecture that cleanly separates the frontend, backend, and data layers, and built a fully automated CI/CD deployment pipeline on top of it.

Frontend and CDN layer:

React static application hosted on Amazon S3
Amazon CloudFront serving the frontend globally from edge locations with low latency
Amazon Route 53 for DNS management, routing frontend traffic to CloudFront and API traffic to the backend
Video uploads stored in a separate dedicated Amazon S3 bucket, keeping media storage independent from application hosting

Backend and compute layer:

Amazon EC2 instance running inside an AWS VPC as the compute host for the full backend
Docker containerization of the entire backend, with each service running as its own isolated container: central API, verbal analysis service, non-verbal analysis service, and the MediaPipe and custom ML model service
Container isolation keeps ML dependencies separate from the core API and makes each service independently updatable
Amazon RDS as the production relational database, running inside the VPC alongside EC2

CI/CD pipeline with GitHub Actions:

deploy-backend job SSHes into EC2, pulls the latest Docker image, rebuilds the container, and restarts the service on every push to main
deploy-frontend job builds the React application, syncs to S3, and invalidates the CloudFront cache so users immediately receive the latest version
Full end-to-end deployment from code push to live production with no manual steps

🚀 Results
The client got a production AWS deployment with containerized ML services, a globally distributed frontend, and a fully automated CI/CD pipeline. No manual deployments are required after initial setup. Every push to main ships both the backend and frontend simultaneously and automatically, and the infrastructure has run in production without issues since launch.