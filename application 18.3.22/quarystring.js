const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;




app.get('/profile', function (req, res) {
    const person={
        name:'ankita',age:22,
        name:'sheetal',age:27,
        name:'rakesh',age:29
    }
    const name=req.query.name
     res.send({name:person});
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
