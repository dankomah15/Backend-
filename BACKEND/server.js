//the address of ths server is:
// URL: http://localhost:8383
//IP = 127.0.0.1:8383
const express = require('express');
const app = express();
const PORT = 8383;

let data = {
    name: 'Daniel'
}

// ENNPOINT = HTTP VERBS(method) && ROUTES OR PATHS
//the method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to repond appropriately and this locations or routes are called endpoints)



//type -1 - websites endpoints(these endpoints are for sending back html typically come when a user enters an url in a browser)

app.get('/', (req,res) =>{
    //this is endpoint number 1
    res.send('<h1> homepage </>')
})

app.get('/dashboard',(req,res) => {
    res.send('<h1> dashboard </h1>')

})



//type 2 - API endpoint(non visual)
app.get( '/api/data', (req, res) =>{
    console.log("This is data")
    res.send(data) 
})

app.listen(PORT, () => {
    console.log('Server is running on port 8383');
});