import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_pymongo import PyMongo
import psycopg2
from flask import Flask, jsonify, render_template, url_for


#################################################
# Database Setup
#################################################
#connect postgres server
connection = psycopg2.connect(user="postgres",
                                  password="nwyfre",
                                  host="127.0.0.1",
                                  port="5432",
                                  database="project2")
cursor = connection.cursor()

postgreSQL_full_Query = "select job_title, industry, trim(state), lat, lon from refined"
postgreSQL_avg_salary_Query = "select * from Avg_Salary"

cursor.execute(postgreSQL_full_Query)
jobs_table = cursor.fetchall()
cursor.execute(postgreSQL_avg_salary_Query)
jobs_salary = cursor.fetchall()
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    jobs_list = []
    for row in jobs_table:
        job_dict = {
            "job_title": row[0],
            "industry": row[1],
            "state": row[2],
            "lat": str(row[3]),
            "lon": str(row[4])
        }
        jobs_list.append(job_dict)
    avg_salary_list = []
    for row in jobs_salary:
        salary_dict = {
            "job_title": row[0],
            "avg_salary": str(row[1]),
            "state": row[2]
        }
        avg_salary_list.append(salary_dict)
    return (render_template("map.html", jobs=jobs_list, avg_salary=avg_salary_list))


@app.route("/map.html")
def analysis():
    jobs_list = []
    for row in jobs_table:
        job_dict = {
            "job_title": row[0],
            "industry": row[1],
            "state": row[2],
            "lat": str(row[3]),
            "lon": str(row[4])
        }
        jobs_list.append(job_dict)
    avg_salary_list = []
    for row in jobs_salary:
        salary_dict = {
            "job_title": row[0],
            "avg_salary": str(row[1]),
            "state": row[2]
        }
        avg_salary_list.append(salary_dict)
    return (render_template("map.html", jobs=jobs_list, avg_salary=avg_salary_list))

if __name__ == '__main__':
    app.run(debug=True)
