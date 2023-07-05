import express, { Application , Request , Response} from "express"
import DB from "./Config/database"
import router from "./Router/BookRoute"
const port : number = 1234

const App : Application = express()

App.use(express.json())
DB()
// router(
    App.use("/api", router)

App.get("/" , (req : Request  , res : Response)=>{
try {
    res.status(200).json({
        message : "Server is Running"
    })
} catch (error) {
    res.status(400).json({
        message : "An Error Occured"
    })
}
})

App.listen(port , ()=>{
    console.log("Server is Fine");
    
})