import { Request , Response } from "express";
import mongoose  from "mongoose";
import bookModel from "../Model/BookModel"

export const getAllBooks = async (req : Request, res : Response)=>{
   try {
    const getBooks = await bookModel.find()
    res.status(200).json({
        message : "Getting All Books",
        data : getBooks
    })
   } catch (error) {
    res.status(400).json({
        message : "Error Getting Books"
    })
   }
}

export const getOneBook = async (req : Request, res : Response)=>{
   try {
    const getBook = await bookModel.findById(req.params.bookId);
    res.status(200).json({
        message : "Getting One Book",
        data : getBook
    })
   } catch (error) {
    res.status(400).json({
        message : "Error Getting Book"
    })
   }
}


export const createNewBook   = async (req : Request, res : Response)=>{
   try {
  const {title , price , author , isBoring , ISBN } = req.body

  const createBook = await bookModel.create({
    title , price , author , isBoring , ISBN 
  })
    res.status(200).json({
        message : "Adding Books",
        data : createBook
    })
   } catch (error) {
    res.status(400).json({
        message : "Error Creaating Book"
    })
   }
}

export const UpdateBook   = async (req : Request, res : Response)=>{
   try {
  const {title , price , author , isBoring , ISBN } = req.body
  const updateBook = await bookModel.findByIdAndUpdate( req.params.bookId , {
    title , price , author , isBoring , ISBN 
  } , {new : true})
    res.status(200).json({
        message : "Updating Books",
        data : updateBook
    })
   } catch (error) {
    res.status(400).json({
        message : "Error Creaating Book"
    })
   }
}

export const DeleteBook   = async (req : Request, res : Response)=>{
   try {
  const {title , price , author , isBoring , ISBN } = req.body
  const deleteBook = await bookModel.findByIdAndRemove( req.params.bookId , {
    title , price , author , isBoring , ISBN 
  })
    res.status(200).json({
        message : "Deleting Books",
        data : deleteBook
    })
   } catch (error) {
    res.status(400).json({
        message : "Error Deleting Book"
    })
   }
}
