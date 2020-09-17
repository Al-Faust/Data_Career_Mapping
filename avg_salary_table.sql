Create Table Avg_Salary as (select job_title as job_title, avg(avg_salary) as avg_salary, trim(state) as state from refined
Where job_title <> 'Others'
Group By job_title, trim(state))

select * from Avg_Salary