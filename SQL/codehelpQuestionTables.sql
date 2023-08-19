create database PRACTICE;
USE PRACTICE;

CREATE TABLE Worker(
 Wid INT NOT NULL PRIMARY KEY auto_increment,
 fname VARCHAR(25),
 lname VARCHAR(25),
 SALARY INT(5),
 JOING_DATE datetime,
 DEPARTMENT CHAR(25)
 );
 
 INSERT INTO Worker 
 VALUES (001,'Monika','Arora',10000,'14-02-20 09.00.00',"HR"),
		(002,'Niharika','Verma',80000,'14-06-11 09.00.00',"Admin"),
        (003,'Vishal','Signal',300000,'14-02-20 09.00.00',"HR"),
        (004,'Amitabh','Singh',500000,'14-02-20 09.00.00',"Admin"),
        (005,'Vivek','Bhati',50000,'14-06-11 09.00.00',"Admin"),
        (006,'Vipul','Diwam',200000,'14-06-11 09.00.00',"Account"),
        (007,'Satish','Kumar',75000,'14-01-20 09.00.00',"Account"),
        (008,'Gita','Chauhan',90000,'14-04-11 09.00.00',"Admin");
 
 SELECT * FROM Worker;
 
 
 create Table Bonus(
   WORKER_REF_ID INT,
   BONUS_AMOUNT INT(10),
   BONUS_DATE datetime,
   foreign key (WORKER_REF_ID) references Worker(wid) ON delete cascade
   );
 
 insert into Bonus 
 VALUES (001,5000,'16-02-20'),
        (002,3000,'16-06-11'),
        (003,4000,'16-02-20'),
        (001,4500,'16-02-20'),
        (002,3500,'16-06-11');
 
 SELECT * FROM Bonus;
 
 DROP table Bonus;
 
 CREATE Table Title(
    WRID INT,
    Worker_title VARCHAR(25),
    AFFECTED_FROM datetime,
    FOREIGN KEY (WRID) references Worker(WID) ON DELETE cascade
     );   
     
INSERT INTO Title VALUES
   (001,'Manager','2016-02-20 00.00.00'),
   (002,'Executive','2016-02-20 00.00.00'),
   (008,'Executive','2016-02-20 00.00.00'),
   (005,'Manager','2016-02-20 00.00.00'),
   (004,'Asst.Manager','2016-02-20 00.00.00'),
   (007,'Executive','2016-02-20 00.00.00'),
   (006,'Lead','2016-02-20 00.00.00'),
   (003,'Lead','2016-02-20 00.00.00');
   
SELECT * FROM Title;
     