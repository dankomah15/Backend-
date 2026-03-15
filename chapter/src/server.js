import express from "express"
import path, {dirname} from "path"
import { fileURLToPath } from "url";
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from "./middleware/authMiddleware.js"


const app = express();
const PORT = process.env.PORT || 5003

//get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
//get the directory name of the file path

const __dirname = dirname(__filename)
//Middleware
app.use(express.json())

//serves the html file from the public directory

//tells express to serve all files from public folderas static / file.Any request in the css file will be resolved in the public directory

//serving up the html file from the directory 

app.use(express.static(path.join(__dirname, '../public')))

app.get(('/'),(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})  

//routes
app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes)


app.listen(PORT, ()=> {

    console.log(`server has started on PORT: ${PORT}`);

});
