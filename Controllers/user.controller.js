const users = [{
    id: 1,
    name: "John",
    email: "2qB2y@example.com",
},
{
    id: 2,
    name: "Jane",
    email: "2qB2y@example.com",
},
{
    id: 3,
    name: "Bob",
    email: "2qB2y@example.com",
},
{
    id: 4,
    name: "Alice",
    email: "2qB2y@example.com",
},
{
    id: 5,
    name: "Charlie",
    email: "2qB2y@example.com",
}]

export const getUsers = (req, res) => {
    res.status(200).json(users);
}

