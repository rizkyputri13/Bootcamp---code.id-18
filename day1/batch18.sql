-- without constraint
Create table region(
	region_id serial primary key,
	region_name varchar(25)
);

-- with constraint
create table countries (
	country_id serial,
	country_name varchar(25),
	region_id int not null,
	constraint country_id_pk primary key (country_id),
	constraint region_id_fk foreign key (region_id) references region(region_id) on delete cascade on update cascade
)

alter table region add column region_x varchar(25)
alter table region rename column region_x to region_xo
alter table region alter column region_xo type int
alter table region drop column region_xo

drop table countries
drop table ragion cascade

insert into region (region_name) values ('Indonesia')
select * from region
update region set region_name = 'Artic' where region_id = 1
delete from region where region_id = 1

insert into region (region_name) values ('Amerika');
insert into region (region_name) values ('Indonesia');
insert into region (region_name) values ('Rusia');

insert into countries (country_name, region_id) values ('new york',2);
insert into countries (country_name, region_id) values ('jakarta',3);
insert into countries (country_name, region_id) values ('new york',2);

select * from countries

select * from countries c join region r on c.region_id = r.region_id
select * from countries c right join region r on c.region_id = r.region_id
select * from countries c left join region r on c.region_id = r.region_id