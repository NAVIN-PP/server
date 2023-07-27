const express = require("express")
const dotevn =require("dotenv")
dotevn.config();
const app = express();
app.use(express.json());
app.post("/Login", (req, res) => {
    const { email, password } = req.body;
    if (password == "navin123") {
        res.send("login success");
    }
    else {
        res.send("password incorrect");
    }
})
app.post("/Register/:id/:name", (req, res) => {
    console.log(req.params.id)
    console.log(req.params.name)
    console.log(req.body);
    res.send("Registered");
})
const Authroute = require("./routes/auth")
app.use("/api", Authroute);

const Auth = require("./routes/cart")
app.use("/app", Auth);

const mongoose=require("mongoose")
mongoose.connect(process.env.DB).then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log("not connected")
})


app.listen(5000, () => {
    console.log("server listening at port 5000");
});