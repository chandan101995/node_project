'use strict';
var dbConn = require('./../../config/db.config');
console.log('dbconn', dbConn);

//Employee object create
var Employee = function(employee)
{
    this.first_name     = employee.first_name;
    this.last_name      = employee.last_name;
    this.email          = employee.email;
    this.phone          = employee.phone;
    this.organization   = employee.organization;
    this.designation    = employee.designation;
    this.salary         = employee.salary;
    this.status         = employee.status ? employee.status : 0;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

// employee create function save data in database 
Employee.create = function (newEmp, result) 
{
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// single employee show  and edit function 
Employee.findById = function (id, result) 
{
    dbConn.query("Select * from employees where id = ? ", id, function (err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

// all employees get and show   
Employee.findAll = function (result)
{
    dbConn.query("Select * from employees", function (err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

// update function for employee
Employee.update = function(id, employee, result)
{
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?",
    [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

// delete function for employee 
Employee.delete = function(id, result)
{
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res)
    {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Employee;