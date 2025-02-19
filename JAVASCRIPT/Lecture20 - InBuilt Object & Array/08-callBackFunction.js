// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'vaishali'
    }
    ,
    {
        No : 2,
        Name : 'Prish'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"vaishali "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "vaishali");
console.log(obj);