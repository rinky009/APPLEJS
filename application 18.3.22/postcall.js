const express = require('express');
bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.json());

app.post('/employeeDetails',(req,res)=>{
    console.log(req.body.city,req.body.pincode);
    res.send(`hello guys${req.body.city}${req.body.pincode}`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
