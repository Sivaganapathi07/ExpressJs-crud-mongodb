const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.json())
//app.use(express.urlencoded({ extended: false })) //to support other formats to upload(formdata)
const Employee = require('./models/employee.models.js')




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose.connect("mongodb+srv://sivaganapathi:SU07wjuYfaSk5xho@cluster0.c4t9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Successfully connected to the database")
}).catch(() => {
    console.log("Error in DB connection")
})


// //Get All products
// app.get('/api/products', async (req, res) => {
//     try {
//         const product = await Product.find()
//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //Get specific product by ID
// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //Create Products
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //update product
// app.put('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             return res.status(404).json({ message: error.message })
//         }

//         const updatedProduct = await Product.findById(id)
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //delete product
// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const delProduct = await Product.findByIdAndDelete(id);

//         if (!delProduct) {
//             return res.status(404).json({ message: error.message })
//         }

//         res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

//Create Data
// app.post('/api/emp', async(req,res)=>{
//     console.log("req",req.body)
//     try{
//         const createData = await Employee.create(req.body);

//         console.log("createData",createData)

//         res.status(200).json(createData);
//     }catch(error){
//         res.status(500).json({message:'Something went wrong!'})
//     }
// })

//Get By ID
app.get('/api/emp/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const getAllData = await Employee.findById(id);

        if(!getAllData){
            res.status(404).json({message:'Data not found'})
        }
        res.status(200).json(getAllData);
    }catch(error){
        res.status(500).json({message:'Something went wrong!'})
    }
})

//Get All Data
app.get('/api/emp/', async(req,res)=>{
    try{
        const getAllData = await Employee.find();
        res.status(200).json(getAllData)
    }catch(eror){
        res.status(500).json({message:'Something went wrong!'})
    }
})

//Update Data
app.patch('/api/emp/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const updateData = await Employee.findByIdAndUpdate(id,req.body)
        res.status(200).json(updateData);
    }catch(error){
        res.status(500).json({message:'Something went wrong!'})
    }
})

//DELETE Data
app.delete('/api/emp/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteData = await Employee.findByIdAndDelete(id);
        res.status(200).json({message:'Record successfully deleted'})
    }catch(error){
        res.status(500).json({message:'Something went wrong!'})
    }
})