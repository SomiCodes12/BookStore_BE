import express, { Router } from "express"
import { DeleteBook, UpdateBook, createNewBook, getAllBooks, getOneBook } from "../Controller/BookController"

const router = express.Router()

router.post("/createBook" , createNewBook)
router.get("/getBooks" , getAllBooks)
router.get("/getBook/:bookId" , getOneBook)
router.patch("/update/:bookId" , UpdateBook)
router.delete("/delete/:bookId" , DeleteBook)

export default router