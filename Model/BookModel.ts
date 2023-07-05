import mongoose from "mongoose"

import iBook from "../Interface/interface"

interface Book extends iBook , mongoose.Document{}

const BookSchema = new mongoose.Schema ({
title : {
    type : String,
},
price : {
    type : Number,
},
author : {
    type : String,
},
ISBN : {
    type : Number,
},
isBoring : {
    type : Boolean,
},
} , {timestamps : true})

const BookModel = mongoose.model<Book>("Book" , BookSchema)
export default BookModel