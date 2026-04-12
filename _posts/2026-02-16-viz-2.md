---
title: "Viz 2: Daily Internet Usage Dashboard"
categories:
  - data viz
tags:
  - data visualization
  - tableau
---

This Tableau dashboard visualizes the 2024 Daily Internet Usage dataset (2,800 anonymized users) to reveal how total screen time, activity mix, and device preference differ across age groups and throughout the year. 

![screenshot](/assets/images/daily-internet-usage-dashboard.png)

---

## 1️⃣ Business Question  
*How do daily internet usage patterns differ across age groups, devices, and activity types throughout 2024, and where are the biggest opportunities for content or service providers?*

---

## 2️⃣ Data Snapshot  

| Column | Description | Example Value |
|--------|-------------|---------------|
| `user_id` | Unique identifier for each user | `123456` |
| `date` | Recording date (YYYY‑MM‑DD) | `2024‑06‑15` |
| `age` | Age in years | `38` |
| `age_group` | Categorical age bucket | `26‑35` |
| `social_media_hours` | Hours on social media per day | `2.12` |
| `work_or_study_hours` | Hours on work/study‑related internet per day | `4.02` |
| `entertainment_hours` | Hours on videos/music/games per day | `2.02` |
| `total_screen_time` | Sum of all activity hours per day | `8.16` |
| `primary_device` | Main device used (Mobile/Laptop/Tablet) | `Tablet` |
| `internet_type` | Connection type (e.g., Wi‑Fi, Cellular) | `Wi‑Fi` |

*Rows:* 2 800 records covering **01‑Jan‑2024 → 31‑Dec‑2024**.  
*Missing / mismatched:* 0 % (clean dataset).  

---

🔗 [View Dashboard on Tableau Public](https://public.tableau.com/views/DailyInternetUsageDashboard_17712732147140/Dashboard)

---

## 5️⃣ Key Insights  

1. **Overall usage:** Average daily screen time **8.2 h**.  
2. **Age‑group contrast:**  
   - **26‑35** users log the highest total screen time (**9.7 h**) and spend the most on **social media** (≈ 2.4 h).  
   - **60+** cohort averages **5.5 h**, with a larger share of **work/study** hours.  
3. **Device dominance:** **Tablets** are the top device (34 %), closely followed by **Mobile** (33 %). Tablets are especially popular among the **36-45** group.  
4. **Seasonality:** A noticeable dip in total screen time during **July – August** (average ≈ 7.8 h) coincides with school holidays; peaks in **December** (≈ 9.3 h).  
5. **Internet type impact:** Users on **Wi‑Fi** average **0.8 h** more total screen time than cellular‑only users.