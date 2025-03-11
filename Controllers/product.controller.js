const products = [{
    items:"shoes",
    price: 100,
    quantity: 10
},
{
    items:"jeans",
    price: 200,
    quantity: 20
},
{
    items:"t-shirts",
    price: 300,
    quantity: 30
},
{
    items:"shoes",
    price: 400,
    quantity: 40
},
{
    items:"jeans",
    price: 500,
    quantity: 50
},
{
    items:"t-shirts",
    price: 600,
    quantity: 60
}]

export const getProducts = (req, res) => {
    res.status(200).json(products);
}