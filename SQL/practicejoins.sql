CREATE database Employee;
use Employee;

create table emp_details(
  id INT PRIMARY KEY,
  fname VARCHAR(255),
  iname varchar(255),
  age INT,
  email varchar(255),
  ph INT,
  city varchar(255)
);

insert into emp_details
  values (2,"Yagna","NArayan",44,"yagna@1452.com",4226987,"pune"),
         (3,"Rahul","BD",22,"rahul@1452.com",4444444,"kolkata"),
		 (4,"Jatin","Hermit",31,"jatin@1452.com",442244,"Delhi"),
		 (5,"PK","PAnday",28,"PPK@1452.com",526943,"UP");
         
 SELECT * FROM emp_details;     
 
 
create table project(
 id INT PRIMARY KEY,
 empID int,
  foreign key(empID) references emp_details(id), 
 name varchar(255),
 startdate VARCHAR(255),
 clientID INT,
 foreign key(clientID) references clients(id)
);

insert into project 
   VALUES (2,2,"B","2021-03-21",1),
          (3,3,"C","2021-01-6",5),
          (4,4,"D","2021-04-16",2),
          (5,5,"E","2021-05-27",4);
          
select * from project;     


create table clients(
id INT primary key,
first_name VARCHAR(255),
last_name VARCHAR(255),
age INT,
email VARCHAR(255),
ph INT,
city VARCHAR(255),
empID int,
foreign key(empID) references emp_details(id)
);

insert into clients
  VALUES (2,"Max","Rors",27,"max@gmail.com",343,"Calola",3),
          (3,"Peter","jain",24,"peter@gmail.com",222,"delhi",1),
          (4,"suiudant","sdvkors",27,"sus@gmail.com",969,"guj",5),
          (5,"akhilesh","yadav",37,"akhi@gmail.com",42658,"UP",2);
       
SELECT * FROM clients;      


SELECT e.id,e.fname,e.iname,p.id,p.name from emp_details as e
inner join project as p ON e.id = p.empID;


SELECT e.id,e.email,e.ph,c.first_name,c.last_name from emp_details as e
INNER JOIN clients as c ON c.empID = e.ID WHERE c.city = "cal" AND e.city = "kolkata";

SELECT * FROM emp_details as e
LEFT JOIN project as p ON p.empID = e.id; 

-- SUB-query 

SELECT * from emp_details where age in (SELECT age from emp_details where age > 30);
-- Createing view
CREATE view CV AS select fname,age FROM emp_details;

-- Altrering View
ALTER view CV AS select fname,iname,age FROM emp_details;

SELECT * FROM CV;

