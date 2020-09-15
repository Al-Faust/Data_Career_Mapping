import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_pymongo import PyMongo

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
#connect postgres server
connection_string = 'postgres:nwyfre@localhost:5432/whatever_our_db_is'
engine = create_engine(f'postgresql://{connection_string}')
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save reference to the table
jobs_table = Base.classes.jobs

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():

    return (render_template("index.html"))


@app.route("/map.html")
def jobs():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all jobs data
    results = session.query(jobs_table.job_title, jobs_table.industry, jobs_table.avg_salary, jobs_table.state, jobs_table.lat, jobs_table.lon).all()

    session.close()

    # create list of dictionaries
    jobs = []
    for job_title, industry, avg_salary, state, lat, lon in results:
        job_dict = {
            "job_title": job_title,
            "industry": industry,
            "avg_salary": avg_salary,
            "state": state,
            "lat": lat,
            "lon": lon
        }
        jobs.append(job_dict)
    #jsonify list
    jobs_json = jsonify(jobs)

    return render_template("map.html", jobs=jobs_json)

if __name__ == '__main__':
    app.run(debug=True)
