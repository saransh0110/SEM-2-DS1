let employees = [];

function addEmployee(){
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if (name === "" || empId === "" || isNaN(salary) || dept === ""){
        alert("Please fill all information properly");
        return;
    }
    let employee={
        name : name,
        id : empId,
        salary : salary,
        department : dept,
    };
    employees.push(employee);
    alert("Employee added successfully");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}
function displayEmployees(){
    let text = "<h3>All Employees</h3>";
    for(let emp of employees){
        text+= "Name: "+ emp.name + " | Employee ID: " + emp.id + 
        " | Salary: " + emp.salary + " | Department: " + emp.department + "<br>";
    }
    document.getElementById("output").innerHTML = text;
}

function filterSalary(){
    let highSalary = employees.filter(emp => emp.salary > 50000);
    let text = "<h3>Employees with Salary > 50000</h3>";
    for(let emp of highSalary)
    {
        text += emp.name + ": rupees"+ emp.salary + "<br>";
    }
    document.getElementById("output").innerHTML = text;
}

function totalSalary(){
    let total = 0;
    for(let emp of employees){
        total += emp.salary;
    }
    document.getElementById("output").innerHTML = "<h3>Total Salary Payout: " + total + " rupee</h3>";
}

function averageSalary(){
    let total=0;
    for(let emp of employees){
        total += emp.salary;
    }
    let avg = total/ employees.length;
    document.getElementById("output").innerHTML = "<h3> Average Salary:"+ avg.toFixed(2) +" rupees </h3>";
}

function countDepartment(){
    let deptName = prompt("Enter Department Name");
    let count = 0;
    for(let emp of employees){
        if(emp.department.toLowerCase()== deptName.toLowerCase()){
            count++;
        }
    }
    document.getElementById("output").innerHTML = "<h3>Total Employees in "+ deptName + " Department: "+ count +"</h3>";
}