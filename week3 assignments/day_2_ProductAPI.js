import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
import { verifyToken } from '../middleware/verifyToken.js'

export const ProductApp = exp.Router()

ProductApp.post('/products',async(req,res)=>{
    const newProduct =req.body
    const newProductDocument = new ProductModel(newProduct)
    const result = await newProductDocument.save()
    console.log("result ",result)
    res.status(201).json({message:"product created"})
})

//read all the products 

ProductApp.get('/products',verifyToken,async(req,res)=>{
    let productlist = await ProductModel.find()
    res.status(200).json({message:" products",productlist})
    
})

//Read a product by productId

ProductApp.get('/products/:id',verifyToken,async(req,res)=>{
    let productlistbyid = await ProductModel.findOne({productId:Number(req.params.id)})
    res.status(200).json({message:"product found",productlistbyid})
})

//update the product by product id
ProductApp.put('/products/:id',verifyToken,async(req,res)=>{
    const modifedProduct = req.body
    const pid = req.params.id
    const updatedProduct = await ProductModel.findOneAndUpdate({productId:Number(pid)},{$set:{...modifedProduct}},{new:true,runValidators:true})
    if(updatedProduct==null)
        return res.status(404).json({message:"product not found"})
    res.status(200).json({message:"product updated",updatedProduct})
})

//delete the product by product id
ProductApp.delete('/products/:id',verifyToken,async(req,res)=>{
    const deletedProduct = await ProductModel.findOneAndDelete({productId:Number(req.params.id)})
    if(!deletedProduct)
        return res.status(404).json({message:"product not found"})
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})
