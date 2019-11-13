create database nodesqldb;
use nodesqldb;

CREATE USER nodemy2@localhost IDENTIFIED BY 'nodemy1234';
GRANT ALL PRIVILEGES ON nodesqldb.* TO 'nodemy2'@'localhost';
FLUSH PRIVILEGES;

 
create table department(dname char(15), dnumber int primary key,
mgrssn char(15), mgrstartssn char(15));
 
create table deft_locations(dnumber int,
dlocation char(20), primary key(dnumber,dlocation), foreign key(dnumber) references department(dnumber));
 
create table project(pname char(15),pnumber int primary key,
plocation char(15),dnum int, foreign key(dnum) references department(dnumber));
 
create table employe(fname char(15),minit char(5),lname char(15),ssn char(15) primary key,
bdate char(12),addres char(50),sex char(5),salary int, supperssn char(20),
dno int, foreign key(dno) references department(dnumber));
 
create table work_on(essn char(15),
pno int, hours float(1),primary key(essn,pno), foreign key(pno) references project(pnumber), foreign key(essn) references employe(ssn));
 
create table dependen(essn char(15),dependen_name char(10),
sex char(5), bdate char(15),relationship char(20), primary key(essn,dependen_name), foreign key(essn) references employe(ssn));
 
insert into department values
('reserch',5,'333445555','1988-05-22'),
('administration',4,'987654321','1995-01-01'),
('headquarters',1,'888665555','1981-06-19');
 
insert into deft_locations values
(1,'houston'),
(4,'stafford'),
(5,'bellaire'),
(5,'sugarland'),
(5,'houston');
 
insert into project values
('productx',1,'bellaire',5),
('producty',2,'sugarland',5),
('productz',3,'houston',5),
('computerization',10,'stafford',4),
('reorganizaton',20,'houston',1),
('newbenefits',30,'stafford',4);
 
insert into employe values
('john','b','smith','123456789','1965-01-09','731 fondren, houston,tx','m',30000,'333445555',5),
('franklin','t','wong','333445555','1955-12-08','638 voss,houston,tx','m',40000,'888665555',5),
('alicia','j','zelaya','999887777','1968-07-19','3321 castle,spring,tx','f',25000,'987654321',4),
('jennifer','s','wallace','987654321','1941-06-20','291 berry,bellaire,tx','f',43000,'888665555',4),
('ramesh','k','narayan','666884444','1962-09-15','975 fire oak,humble,tx','m',38000,'453453453',5),
('joyce','a','english','453453453','1972-07-31','5631 rice,houston,tx','f',25000,'333445555',5),
('ahmad','v','jabbar','987987987','1969-03-29','980 dallas,houston,tx','m',25000,'987654321',4),
('james','e','borg','888665555','1937-11-10','450 stone, houston,tx','m',55000,'null',1);
 
insert into work_on values
('123456789',1,32.5),
('123456789',2,7.5),
('666884444',3,40.0),
('453453453',1,20.0),
('453453453',2,20.0),
('333445555',2,10.0),
('333445555',3,10.0),
('333445555',10,10.0),
('333445555',20,10.0),
('999887777',30,30.0),
('999887777',10,10.0),
('987987987',10,35.0),
('987987987',30,5.0),
('987654321',30,20.0),
('987654321',20,15.0),
('888665555',20,null);
 
--select *from work_on;
 
insert into dependen values
('333445555','alice','f','1986-04-05','daughter'),
('333445555','theodore','m','1983-10-25','son'),
('333445555','joy','f','1958-05-03','spouse'),
('987654321','abner','m','1942-02-28','spouse'),
('123456789','michael','m','1988-01-04','son'),
('123456789','alice','f','1988-12-30','daughter'),
('123456789','elizbeth','f','1967-05-05','spouse');
