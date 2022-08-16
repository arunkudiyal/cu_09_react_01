const employees = [
    { emp_id: 'EMP001', emp_name: 'Employee 1', start: 1993, end: 2011, designation: 'IT' },
    { emp_id: 'EMP002', emp_name: 'Employee 2', start: 1967, end: 1990, designation: 'Sales' },
    { emp_id: 'EMP003', emp_name: 'Employee 3', start: 1920, end: 1996, designation: 'DME' },
    { emp_id: 'EMP004', emp_name: 'Employee 4', start: 1937, end: 2020, designation: 'Sales' },
    { emp_id: 'EMP005', emp_name: 'Employee 5', start: 1980, end: 1985, designation: 'IT' },
    { emp_id: 'EMP006', emp_name: 'Employee 6', start: 1997, end: 2015, designation: 'DME' },
    { emp_id: 'EMP007', emp_name: 'Employee 7', start: 1991, end: 2021, designation: 'IT' },
    { emp_id: 'EMP008', emp_name: 'Employee 8', start: 1970, end: 2010, designation: 'Sales' }
]

const ages = [10, 21, 37, 87, 19, 18, 17, 90, 67, 96, 22, 100, 69, 26, 2]
const alphabets = ['e', 'f', 'm', 'g', 'i', 'p', 'k', 'a', 'c', 'b']

// Q: Print all the names of the employee
// for(let i=0; i < employees.length; i++) {
//     console.log(employees[i].emp_name)
// }

// 1. forEach()
// employees.forEach( (employee, index, array) => console.log(employee.emp_name) )

// 2. map()
// const emp_names = employees.map( (employee, index, arr) => arr )
// console.log(emp_names)

// 3. filter()
// const canDrink = ages.filter( age => age >= 18 )
// console.log(canDrink)

// Q: - Name of all employees whos has worked for 10 or more years
// const name_of_old_employees = employees.filter( employee => employee.end - employee.start >= 25 ).map( employee => employee.emp_name )
// console.log(name_of_old_employees)

// employees.filter( employee => employee.end - employee.start > 10 && employee.designation === 'Sales' ).forEach( employee => console.log(employee.emp_name) )

// 4. sort()
const sorted_ages = ages.sort( (a, b) => b - a )
console.log(sorted_ages)

const sorted_characters = alphabets.sort( (a, b) => {
    if(a < b) {
        return -1
    } else if( a > b) {
        return +1
    } else {
        return 0
    }
} )
console.log(sorted_characters)