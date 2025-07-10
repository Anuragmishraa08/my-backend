const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/users", (req, res) => {
    return res.json(users);
});




app.get("/", (req, res) => {
    res.send("Server is working!");
});







app.get("/api/users/:id", (req , res ) =>{
    const id = number (req.params.id);
    const user =user.find ((user) =>user.id===id);
    return res.json(user);
});


app.post("/api/users", (req, res) => {
    //create new user
    return res.json ({status: "pending"});
});

app.patch("/api/users", (req, res) => {
    //edit user with id  user
    return res.json ({status: "pending"});
});


app.delete("/api/users", (req, res) => {
    //delete user
    return res.json ({status: "pending"});
});










app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
