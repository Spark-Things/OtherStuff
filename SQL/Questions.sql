use practice;

SELECT * FROM worker;

-- To chnge the name of colums as worker_name

SELECT fname as Worker_name FROM worker;

-- to do all data in UPPER case
SELECT upper(fname) FROM worker;

-- to get uniuqe value from the colums
SELECT distinct department FROM worker;

-- to get substring of the string value like First three charcter
SELECT substring(fname,1,3) from worker;

-- to get position of any charcter in the name 
SELECT INSTR(fname,'B') from worker WHERE fname = "Amitabh";

-- to get the length of the ant Column

Select distinct department,length(department) from worker;

-- to replace any Character

select replace(fname,'a','A') from worker;

-- to concat anytrhing 

select concat(fname, ' ' ,lname) As WORKER_NAME from worker;

-- to asending and desacing the data

SELECT * from worker order by fname, department DESC;

-- spefic name

Select * from Worker WHERE fname="Vipul" OR fname="satish";

-- To get name like first of the name 

Select * from worker WHERE department LIKE 'Admin%';

Select * from worker WHERE fname LIKE '%a%';

-- between values

SELECT * from worker WHERE salary between 100000 AND 500000;

