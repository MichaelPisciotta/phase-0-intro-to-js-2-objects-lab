// Write your solution in this file!
const employee = { name: 'mike', streetAddress:'60 warren'};


function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
}
updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 

    return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 broadway');





function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
}   
deleteFromEmployeeByKey(employee, 'name', '');







function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value; 

    return obj;
}
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress', '');
