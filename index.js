import express from "express";
import  router  from "./Routers/employee.router.js";
import router2 from "./Routers/user.router.js";
import router3 from "./Routers/product.router.js";

const app = express();
const port = 4000;

app.use("/api", router);
app.use("/api", router2);
app.use("/api", router3);


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
    
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});