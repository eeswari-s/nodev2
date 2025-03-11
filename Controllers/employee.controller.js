const employees = [{
    id: 1,name: "John",age: 30
},
{
    id: 2,name: "Jane",age: 25
},
{
    id: 3,name: "Bob",age: 35
},
{
    id: 4,name: "Alice", age: 28
},
{
    id: 5,  name: "Charlie", age: 32
}

]

export const getEmployees = (req, res) => {
    res.status(200).json(employees);
}