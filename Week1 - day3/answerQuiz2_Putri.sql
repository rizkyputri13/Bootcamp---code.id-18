
--1. Tampilkan employees yang mendapatkan bonus akhir tahun, jika masa kerja
--employees >= 20 tahun akan mendapatkan bonus 5x salary, jika kurang akan
--mendapatkan 3x salary. Hint : gunakan extract(year from age(now(),hire_date))

select employee_id, first_name,last_name,salary,extract(year from age(now(),hire_date)) masa_kerja,
case when extract(year from age(now(),hire_date)) >= 20
then salary * 5
else salary * 3
end bonus
from employees


--2. Tampilkan bonus tiap masa kerja.

select extract(year 
from age(now(),hire_date)) masa_kerja,
sum (case when extract(year from age(now(),hire_date)) >= 20
then salary * 5
else salary * 3
end) bonus
from employees
group by masa_kerja
order by masa_kerja asc



--3. Tampilkan jumlah pegawai berdasarkan masa kerja nya.

select extract(year from age(now(),hire_date)) masa_kerja, 
case when extract(year from age(now(),hire_date)) >=20
then count (employee_id)
end jumlah_pegawai,
case when extract(year from age(now(),hire_date)) <=20
then count (employee_id)
end jumlah_pegawai_2
from employees
group by masa_kerja
order by masa_kerja

--4. Buat tampilan jumlah pegawai berdasarkan masa kerja di tiap department.

select department_id,extract(year from age(now(),hire_date)) masa_kerja, 
case when extract(year from age(now(),hire_date)) >=20
then count (employee_id)
end jumlah_pegawai,
case when extract(year from age(now(),hire_date)) <=20
then count (employee_id)
end jumlah_pegawai_2
from employees
group by department_id,masa_kerja
order by masa_kerja

