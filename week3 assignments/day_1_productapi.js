import exp from 'express'
const productApp=exp.Router();
export {productApp}

    //create product api with below opertions 
        //create new products ({productId,name,brand,price})
        //read all products 
        //read all the products by brand
        //update a product
        //delete a product by id

let products =[]

productApp.get('/products',(req,res) =>{
    res.json({message:"all products",cart:products})
})

productApp.post('/products',(req,res) =>{
    const newProduct = req.body
    products.push(newProduct)
    res.json({message:"product created"})
})

    productApp.get('/products/:brand',(req,res) =>{
        //product by brand name usind param
        //find the product
        //id product not found 
        //resond
        let brands =req.params.brand
        let indexOfBrand = products.find(productobj =>productobj.brand==brands)
        if (indexOfBrand === -1){
            return res.json({message :" brand not found"})
        }
        res.json({message:" a brand ",cart:indexOfBrand})

    })

/*
Create REST API for Product resource with below operations:

 
        
Create new Product({productId,name,brand,price})
Read all products
Read all Product by brand
Update a product
Delete a product by id

Note: Use the same server.js file for both USER & PRODUCT APIs
*/

//Update a product
productApp  .put('/products',(req,res) =>{
    let modifiedProduct = req.body
    let index = products.findIndex(productobj => productobj.productId === modifiedProduct.productId)
    if(index === -1){
        return res.json({message:"product not found"})
    }
    products.splice(index,1,modifiedProduct)
    res.json({message:"product modified"})
})

//Delete a product by id
productApp.delete('/products/:id',(req,res) =>{
    let idofurl = Number(req.params.id)     //params returns the object //   {id :5}//param means parameter and it is used to get the value of parameter from url
    let index = products.findIndex(productobj => productobj.productId === idofurl)
    if(index === -1){
        return res.json({message:"product not found"})
    }
    products.splice(index,1)
    res.json({message:"product removed"})
})

//rest api - representational state transfer api