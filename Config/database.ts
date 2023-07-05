import mongoose from "mongoose"

const book_URL = "mongodb://0.0.0.0:27017/bookDatabase"

const Bookdb = async ()=>{
    const bookConnect = await mongoose.connect(book_URL)
    console.log(`DB is connected to : ${bookConnect.connection.host}`);
    
}

export default Bookdb