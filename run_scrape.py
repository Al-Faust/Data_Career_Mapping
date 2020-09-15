import glassdoor_scrape as gs
import pandas as pd

path = r"C:/Users/xtrad/Desktop/TheBoot/Project-2/Project2/chromedriver.exe"

# scrape data scientist jobs
#ds_df = gs.get_jobs('data scientist',1000, False, path, 15)

# convert the data frame to csv
#ds_df.to_csv('datas_scientist_jobs.csv', index = False)

# scrape data analyst jobs
<<<<<<< HEAD
da_df = gs.get_jobs('data analyst', 800, False, path, 15)

da_df.to_csv('das.csv', index=False)
=======
da_df = gs.get_jobs('data scietist', 10, False, path, 15)

da_df.to_csv('da.csv', index=False)
>>>>>>> data_scraping_cleaning
