//the address of ths server is:
// URL: http://localhost:8383
//IP = 127.0.0.1:8383
const express = require('express');
const app = express();
const PORT = 8383;

let data = ["daniel"]
    



 

//Middleware
app.use(express.json());

// ENNPOINT = HTTP VERBS(method) && ROUTES OR PATHS
//the method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to repond appropriately and this locations or routes are called endpoints)



//type -1 - websites endpoints(these endpoints are for sending back html typically come when a user enters an url in a browser)

app.get('/', (req,res) =>{
    //this is endpoint number 1
     console.log("user requested the homepage")
   res.send (`
        
       
       <body style = "background: pink;
       color: blue">
          
          <h1>DATA</h1>
         <p> ${JSON.stringify(data)}</p>
         <a href ="/dashboard">Dashboard<a>
         

    </body> 
        
    <script>console.log("this is my script")</script/>
        `)
})

app.get('/dashboard',(req,res) => {
    res.send(`
        <body>
        
        <h1> dashboard </h1>
         <a href="/">home</a>

        </body>
        `)

      

})


//CRUD-method create-post read- get update-put and delete-delete





//type 2 - API endpoint(non visual)
app.get( '/api/data', (req, res) =>{
    console.log("This is data")
    res.status(599).send(data) 
})

app.post('/api/data', (req,res) => {
    //someone wants to create a user (for examplewhen they click on the signup buttton)
    //the user clicks the signup button after entering their credentials and the browser is wired up to send a network request to the server to handdle that action
    const newEntry = req.body
    console.log(newEntry)
    // const name = newEntry.user.name
    // const age = newEntry.user.age
    data.push(newEntry.name)
    res.sendStatus(201)
}) 

app.delete('/api/data',(req,res) => {
    data.pop()
    console.log('we deleted the elemet at the end of the array');
    res.sendStatus(203)
})

app.listen(PORT, () => {
    console.log('Server is running on port 8383');
});