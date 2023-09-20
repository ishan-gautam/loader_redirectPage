const express = require("express");
const path = require('path');

const app = express();

app.use('/',express.static(path.join(__dirname,'public')));

app.use((req,res)=>{
    res.status(404);
    res.send('<h1> Error 404 : Resource not Found, Hrbl `_`');
})

app.listen(8000, () => {
  console.log("Running on port 8000.");
});
