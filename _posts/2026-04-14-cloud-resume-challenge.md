---
title: "Cloud Resume Challenge: Deploying a Serverless Website on AWS"
categories:
  - cloud
tags:
  - aws
  - s3
  - cloudfront
  - dynamodb
  - lambda
  - api gateway
  - sam cli
  - github actions
  - ci/cd
---

> Applying AWS knowledge to deploy a serverless website using S3, CloudFront, DynamoDB, Lambda, API Gateway, SAM CLI, and GitHub Actions.


---

After passing the AWS Certified Cloud Practitioner exam, I was ready to apply the knowledge I had learned to some practical experience. Researching cloud projects online led me to the Cloud Challenge, which encompassed a wide range of tasks using various AWS services. I began by customizing my portfolio site (which is built with Next.js and Tailwind) and getting it deployed without using "easier" deployment sites like Netlify or Heroku. The following steps outline how I was able to integrate popular AWS services and complete the challenge.

---

## Table of Contents

1. [Deploy online as an Amazon S3 static website](#1-deploy-online-as-an-amazon-s3-static-website)
2. [AWS CloudFront for HTTPS](#2-aws-cloudfront-for-https)
3. [DNS and using custom domain](#3-dns-and-using-custom-domain)
4. [Visitor Counter - JavaScript](#4-visitor-counter---javascript)
5. [DynamoDB Database to Store Count Value](#5-dynamodb-database-to-store-count-value)
6. [Python Lambda function and API Gateway](#6-python-lambda-function-and-api-gateway)
7. [Infrastructure as Code (IaC) - CloudFormation with SAM CLI](#7-infrastructure-as-code-iac---cloudformation-with-sam-cli)
8. [Source Control with Git](#8-source-control-with-git)
9. [CI/CD with GitHub Actions for Front and Back End](#9-cicd-with-github-actions-for-front-and-back-end)
10. [Final Thoughts](#final-thoughts)

---

## 1. Deploy online as an Amazon S3 static website

The S3 service makes it easy to deploy and host a static site (like this one created with React) with "buckets" or folders containing the site source code. First, I created a publicly accessible S3 bucket that will provide the HTML and CSS resources and images necessary for the site and configured the appropriate website endpoint for my default region (us-east-1).

## 2. AWS CloudFront for HTTPS

Since sites hosted with S3 don't come with SSL/TLS security certificates by default, it's necessary to make use of the CloudFront CDN service to enable HTTPS traffic for the website. Both services seamlessly integrated by linking my S3 endpoint as the origin to the CloudFront distribution, giving me a secure domain name.

## 3. DNS and using custom domain

Although the domain given by CloudFront had a certificate, I wanted to use my own custom one (ericnbello.com) to access the site. While AWS offers its own DNS service called Route 53, I've already been more than familiar with editing DNS records for other domains so I chose to remain with the original provider I registered this one with. I edited the domain's DNS entries to point to the CloudFront distribution and verify ownership, and was able to receive a custom SSL certificate from CloudFront — and my site was up and running.

## 4. Visitor Counter - JavaScript

Being built in Next.js, the website already had plenty of JavaScript. So my approach here was to create a simple `VisitorCounter` component and render it in the footer of each page. I didn't get fancy — a slim border to create a box around the view count was sufficient.

## 5. DynamoDB Database to Store Count Value

The visitor counter needed a database to store and update the visitor count value. Amazon's DynamoDB, a NoSQL database service, perfectly suited this requirement. Being on the AWS Free Tier, I opted for on-demand pricing to have zero cost right now while also ensuring minimal ongoing costs once the initial free tier year ends. I created a table with a partition key and an attribute name of `Quantity` whose initial value of `0` would be updated with each visit.

## 6. Python Lambda function and API Gateway

Next up was getting the component on the site to communicate with the DynamoDB database. Amazon's API Gateway and Lambda services worked hand in hand to achieve this, ensuring smooth interaction between my site and database. Since I enjoy the simplicity of Python syntax, I used it for the Lambda function along with the `boto3` library. I relied heavily on the AWS documentation for working with DynamoDB and updating table values. When the function was completed, I had a functional API to work with in API Gateway and was able to start handling requests from the web app after resolving some CORS issues.

## 7. Infrastructure as Code (IaC) - CloudFormation with SAM CLI

In order to avoid manual configuration within the AWS console (which is easy to do incorrectly), I defined the necessary resources — including DynamoDB, API Gateway, and Lambda — using an AWS Serverless Application Model (SAM) template. It uses CloudFormation to deploy the resources, which I really enjoyed learning about in depth. The AWS SAM CLI facilitated smooth deployment from inside my VSCode terminal.

## 8. Source Control with Git

To ensure seamless updates and eliminate manual intervention, I employed source control for both the back-end API and front-end website in a GitHub repository.

## 9. CI/CD with GitHub Actions for Front and Back End

To maintain a consistent deployment process, I used GitHub Actions to set up continuous integration and deployment (CI/CD) for both the front and back-end code. Whenever I pushed updates to the website code, SAM template, or Python code, GitHub Actions automatically ran — updating the S3 bucket and deploying the SAM application to AWS. This ensured a streamlined and efficient development workflow. Additionally, I made sure the CloudFront cache was invalidated to reflect the latest changes. It's important to note that I followed best practices and refrained from committing AWS credentials to source control.

---

## Final Thoughts

Completing the Cloud Resume Challenge was an enriching experience that not only demonstrated my skills in AWS but also expanded my abilities in web development, automation, and infrastructure as code. By navigating through certifications, AWS services, JavaScript implementation, database integration, and CI/CD pipelines, I gained a comprehensive understanding of cloud engineering and DevOps practices. This project served as a testament to my ability to deliver professional-grade solutions while leveraging cutting-edge technologies. I'm excited to apply these skills in future roles as a developer, cloud engineer, or DevOps professional.
