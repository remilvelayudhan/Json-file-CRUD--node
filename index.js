const express =require('express');
const userRouter = require('./Routes/userRouter');
const app = express();
const PORT =3000;
const cors =require('cors');
const bodyPaser =require('body-parser');

// app.get('/',(req,res)=>{
// res.status(200).json({message:"hello world"});
// });
app.use(bodyPaser.json());
//const allowedOrigns =["http://localhost:3000"];
app.use(cors());
app.use("/user",userRouter);


app.listen(PORT,()=>{
console.log("server is running on port 3000");
});