const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async(req, res)=>{
    try{
        const books = await Book.find()
        res.json(books)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const book = await Book.findById(req.params.id)
           res.json(book)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.sub = req.body.sub
        const data = await book.save()
        res.json(data)   
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.post('/', async(req, res)=>{
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    })

    try{
        const data = await book.save()
        res.json(data)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.author = req.body.author
        const data = await book.save()
        res.json(data)   
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        const a1 = await book.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error: ' + err)
    }
})


module.exports = router