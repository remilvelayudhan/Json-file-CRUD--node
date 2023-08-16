const express =require('express');

const app = express();


app.get('/',(req,res)=>{
console.log("sucesss");
});


app.listen(3000,()=>{
console.log("server is running on port 3000");
});