---
title: "Weather Dashboard"
# date: 2025-02-25
layout: single
header:
#   teaser: /assets/images/weather-dashboard-screenshot.png
  excerpt: "Serverless web app using AWS Lambda, S3, and CloudFront to serve real-time weather data."
categories:
  - projects
tags:
  - aws
  - python
  - serverless
author_profile: true
---

A serverless web application that fetches real-time weather data from the 
**OpenWeather API** and serves it through a lightweight frontend — built to 
practice cloud deployment and API integration.

## Architecture

- **AWS Lambda** — handles all backend logic and API calls (Python)
- **AWS S3** — hosts the static frontend
- **CloudFront** — CDN delivery and HTTPS
- **OpenWeather API** — live data source

## What This Demonstrates

- Serverless function deployment and configuration
- REST API integration and JSON data handling
- Static site hosting and CDN setup on AWS
- End-to-end ownership of a cloud-hosted application

## Links

- [Live Demo](https://d3lgvgrrop0yu.cloudfront.net/)
- [GitHub Repository](https://github.com/ericnbello/weather-dashboard)