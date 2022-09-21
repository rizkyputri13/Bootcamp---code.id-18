CREATE TABLE regions (
    region_id serial primary key,
    region_name character varying(22)
);

CREATE TABLE jobs (
    job_id character varying(10) primary key,
    job_title character varying(31) ,
    min_salary numeric(7,2) ,
    max_salary numeric(7,2) 
);

CREATE TABLE countries (
    country_id character varying(2) primary key,
    country_name character varying(24) ,
    region_id int ,
    foreign key (region_id) references regions(region_id) on delete cascade on update cascade
);

CREATE TABLE locations (
    location_id serial primary key,
    street_address character varying(40) ,
    postal_code character varying(11) ,
    city character varying(19) ,
    state_province character varying(17) ,
    country_id character varying(2),
    foreign key (country_id) references countries(country_id) on delete cascade on update cascade
);

CREATE TABLE departments (
    department_id serial primary key,
    department_name character varying(20) ,
    manager_id int ,
    location_id int ,
    foreign key (location_id) references locations(location_id) on delete cascade on update cascade
);

CREATE TABLE employees (
    employee_id serial primary key,
    first_name character varying(11) ,
    last_name character varying(11) ,
    email character varying(8) ,
    phone_number character varying(18) ,
    hire_date date ,
    job_id character varying(10) ,
    salary numeric(7,2) ,
    commission_pct character varying(4) ,
    manager_id int,
    department_id int ,
    xemp_id int,
    foreign key (manager_id) references employees(employee_id) on delete cascade on update cascade,
    foreign key (job_id) references jobs(job_id) on delete cascade on update cascade,
	constraint department_id_fk foreign key (department_id) references departments(department_id) on delete cascade on update cascade
);

CREATE TABLE job_history (
    employee_id int,
    start_date date,
    end_date date ,
    job_id character varying(10) ,
    department_id int ,
	constraint employee_id_start_date_pk primary key (employee_id,start_date),
    foreign key (department_id) references departments(department_id) on delete cascade on update cascade,
    foreign key (job_id) references jobs(job_id) on delete cascade on update cascade,
    foreign key (employee_id) references employees(employee_id) on delete cascade on update cascade
);


-- ini di execute setelah insert data
ALTER TABLE departments
   ADD CONSTRAINT manager_id_fk FOREIGN KEY (manager_id) REFERENCES employees (employee_id);