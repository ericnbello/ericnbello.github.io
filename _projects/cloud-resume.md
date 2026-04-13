---
title: "Cloud Resume Challenge"
# date: 2025-02-25
layout: single
header:
  teaser: 
  excerpt: "Serverless resume site built on AWS with a CI/CD pipeline via GitHub Actions."
categories:
  - projects
tags:
  - aws
  - cloud
  - python
  - github-actions
author_profile: true
---

A fully serverless personal site built on AWS as part of the 
[Cloud Resume Challenge](https://cloudresumechallenge.dev/) — a hands-on project 
designed to demonstrate real cloud infrastructure skills.

## What I Built

The site is hosted as a static site on **S3** and delivered globally via **CloudFront**. 
A visitor counter is powered by a **Lambda** function (Python) that reads and writes 
to a **DynamoDB** table on every page load. The entire deployment pipeline runs through 
**GitHub Actions** — pushing to main automatically builds and deploys the site.

## Architecture

- **S3** — static site hosting
- **CloudFront** — CDN and HTTPS termination
- **AWS Lambda** — serverless backend (Python)
- **DynamoDB** — visitor count persistence
- **GitHub Actions** — CI/CD pipeline
- **Route 53 / ACM** — DNS and SSL certificate

## What This Demonstrates

- Cloud infrastructure provisioning and management (AWS)
- Serverless compute and API design
- CI/CD pipeline configuration
- Working across networking, compute, storage, and security layers in a single project

## Links

- [Live Site]()
- [GitHub Repository](https://github.com/ericnbello/)