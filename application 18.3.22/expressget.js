const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/showMobileDetails', function (req, res) {
    const samsung = {
        model: 's3',
        releaseDate:'2020',
        price:24345
    }
    res.send(samsung);
});

app.get('/weather', (req, res) => {
    // code and logic that will be executed and return the data back to user/customer
}); 

app.get('/amIAuthorized', function (req, res) {
    res.status(401);
    res.send('Not authorized');
});
app.get('/:address/:city/:pincode',(req,res)=>{
    console.log(req.params.city,req.params.pincode);
    res.send(`hello guys${req.params.city}${req.params.pincode}`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

