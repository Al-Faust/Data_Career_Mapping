![Data Science](app/static/img/data-scientist-musthave-skills.jpg)
# Data Career Mapping

Creating interactive map showing salary comparison between Data Analyst & Data Scientist from Glassdoor. Top cities are highlighted on the map and display top industries and avg salary for each location.

1) Scrape Data Scientist and Data Analyst jobs from Glassdoor 
    - glassdoor_scrape.py
         - imports
              - time , pandas
              - NoSuchElementException, ElementClickInterceptedException, StaleElementReferenceException from selenium.common.exceptions 
              - webdriver from selenium               
    - runscrape.py
       - Scraped about 3800 jobs from glassdoor.   
            - ds3k.csv ==> 3000 Data Scientist jobs
            - das.csv ==> 786 Data Analyst jobs
    - Resource for glassdoor scraping - https://towardsdatascience.com/selenium-tutorial-scraping-glassdoor-com-in-10-minutes-3d0915c6d905
  
2) Clean the data 
    - data_cleanup.ipynb 
      - imports
          - numpy, pandas, sys, os, re, pprint, string, text from sklearn.feature_extraction              
      - Removed special characters from data using Regualr Expressions
      - Extracted years of experice, required education qaulifications, required skills.
      - Created below files after data cleanup
        - all_jobs.csv 
        - skills.csv
        - ed.csv
        - years_exp.csv
      
3) With the help of OpenCageGeocode API retrieved latitude and longitude for the job locations
    - location_api.ipynb
        - import OpenCageGeocode from opencage.geocoder
        - created all_jobs_lat_lon.csv file

4) Extracting required skills 
    - extract_skills.ipynb
        - created refined_skills.csv file
    
5) Exploratory Data Analysis 
    - eda.ipynb
        - Created basic plots using matplotlib, seaborn, and plotly pakcages.
  
6) SQL Database Load
    - refined_db.sql
    - avg_salary_table.sql
        - created tables in PgAdmin from csv
        
7) app
    - app.py
        - used flask and psycopg2 in app.py to load sql data into html and js pages.
    - index.html
        - created an analysis page to assist in understand of data.
    - map.html
        - used leaflet to populate data on a map. Used separate map layers to organize data.
    - logic.js
    - config.js
    - java_for_plotly.js
    - sliiide.js
        - Introduced a new library(Jquery/sliiide) not previously taught in class to handle menu options.
        
