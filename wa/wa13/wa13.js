// Problem 1
const humanResources = {
    "employees": 
    [
        {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation" : "Manager", 
        "salary" : 40000, 
        "raiseEligible" : true, 
        },
        {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee", 
        "salary" : 18500, 
        "raiseEligible" : true, 
        },
        {
        "firstName" : "Bill",
        "department" : "HR",
        "designation" : "Executive", 
        "salary" : 21200, 
        "raiseEligible" : false, 
        }
    ]
};
console.log("Problem 1", humanResources);

// Problem 2
const company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : humanResources
}
console.log("Problem 2", company);

// Problem 3
humanResources.employees[3] =       
    {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive", 
    "salary" : 25600, 
    "raiseEligible" : false, 
    };
console.log("Problem 3", humanResources);

// Problem 4
let total = 0;
let temp = 0;
for (const emp of humanResources.employees){
    temp = emp.salary;
    total += temp;
    temp = 0;
}
console.log("Problem 4", `$${total}`);

// Problem 5
function raise(){
for (const eligible of humanResources.employees){
    const loopSalary = eligible.salary;
    const eligibleTrue = eligible.raiseEligible;
    let raise = 0;
    if (eligibleTrue){
        raise = loopSalary * 0.1;
        eligible.salary += raise;
    }
}
}
raise();
console.log("Problem 5", humanResources);

// Problem 6
 for (const home of humanResources.employees){
    
 }