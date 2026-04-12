---
title: "World Layoffs"
# date: 2025-01-30
header:
  teaser: 
  excerpt: ""
layout: single
categories:
  - projects
tags:
  - sql
  - tableau
  - data visualization
author_profile: true
---

This project explores a dataset on company layoffs. The primary goal was to clean the data and conduct exploratory data analysis (EDA) to uncover trends, patterns, and outliers, ultimately setting the stage for interactive visualizations in Tableau.

## Project Components

- **Data Cleaning**: 
  - Removed duplicates using window functions.
  - Standardized key fields (e.g., industry names, country formats, and dates).
  - Handled null values by removing non-informative rows.
- **Exploratory Data Analysis (EDA)**:
  - Analyzed layoff magnitudes and percentages.
  - Aggregated layoffs by company, location, industry, and year.
  - Uncovered insights such as companies with 100% layoffs and trends over time.

## Technologies & Tools

- **SQL/MySQL**: For data cleaning and EDA queries.
- **Tableau**: For building interactive dashboards.
- **GitHub**: Version control and project documentation.


## Key Insights

- **Extreme Layoffs**: Identified companies that laid off large numbers in single events.
- **100% Workforce Reduction**: Highlighted startups and companies that ceased operations.
- **Trends Over Time**: Analyzed layoffs by year to observe economic patterns.
- **Industry & Geographic Impact**: Aggregated data to show which industries and regions were most affected.

## How to Run

1. **Data Cleaning**: Execute `data_cleaning.sql` in your MySQL environment.
2. **EDA Queries**: Run `eda_analysis.sql` to explore key metrics and generate insights.
3. **Visualization**: Use the outputs in Tableau to create interactive dashboards.

## Demo

View the GitHub Repo [here](https://github.com/ericnbello/world-layoffs) or check out the live Tableau dashboard [here](https://public.tableau.com/app/profile/ericnbello/viz/WorldLayoffs_17382760095000/CompaniesbyCountry) for an interactive exploration of the data.