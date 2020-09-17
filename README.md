![Data Science](images/data-scientist-musthave-skills.jpg)
# Project2

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
    - data_cleaning.ipynb 
      - imports
          - numpy, pandas, sys, os, re, pprint, string, word_tokenize from nltk.tokenize, 
            WordNetLemmatizer from nltk.stem, stopwords from nltkcorpus, text sklearn.feature_extraction              
      - Removed special characters from data using Regualr Expressions
      - With the help of scikit learn and NLTK packages extracted years of experice, required education qaulifications, required skills.
      - created below files after data cleanup
        - all_jobs.csv 
        - skills.csv
        - ed.csv
        - years_exp.csv
      
3) With the help of OpenCageGeocode API retrieved latitude and longitude for the job locations
    - location_api.ipynb
        - import OpenCageGeocode from opencage.geocoder
     - created all_jobs_lat_lon.csv file

4) Extracting required skills - extract_skills.ipynb
     - created refined_skills.csv file
    
5) Exploratory Data Analysis 
    - Created basic plots using matplotlib, seaborn, and plotly pakcages.
  
