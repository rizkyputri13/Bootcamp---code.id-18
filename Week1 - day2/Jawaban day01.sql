-- soal 1
select c.region_id, count(d.department_id)department from departments d join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id group by c.region_id

-- soal 2
select c.country_id, count(d.department_id)department from departments d join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id group by c.country_id

-- soal 3
select d.department_id, count(e.employee_id)employee from employees e join departments d on 
cast(e.department_id as int) = d.department_id
group by d.department_id

-- soal 4
select c.region_id, count(e.employee_id)employee from employees e join departments d on 
cast(e.department_id as int) = d.department_id join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id group by c.region_id

-- soal 5
select c.country_id, count(e.employee_id)employee from employees e join departments d on 
cast(e.department_id as int) = d.department_id join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id group by c.country_id

-- soal 6
select department_id,max(salary)salary from employees group by department_id

-- soal 7
select department_id,min(salary)salary from employees group by department_id

-- soal 8
select department_id, avg(salary)salary from employees group by department_id

-- soal 9
select department_id,count(employee_id) from job_history group by department_id

-- soal 10
select job_id,count(employee_id) from job_history group by job_id

-- soal 11
select employee_id,count(employee_id) from job_history group by employee_id order by count(employee_id) desc

-- soal 12
select job_id, sum(employee_id) from employees group by job_id

-- soal 13
select department_id, max(extract(year from age(now(),hire_date) )) masa_kerja from employees group by department_id

-- soal 14
select department_id, min(extract(year from age(now(),hire_date) )) masa_kerja from employees group by department_id

-- soal 15
select e.employee_id, extract(year from age(now(),hire_date))lama_bekerja, count(jh.employee_id) 
from employees e left join job_history jh on e.employee_id = jh.employee_id
group by e.employee_id