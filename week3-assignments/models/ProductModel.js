// Create Product REST API with below features
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)

import {Schema,model} from 'mongoose' 
const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"product id required"]
    },
    productName:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"price required"],
        min:[10000,"minimum price should be 10000"],
        max:[50000,"maximum price should be 50000"]
    },
    brand:{
        type:String,
        required:[true,"requird brand name"]
    }
},{
     versionKey:false,
   timestamps:true,
})
export const ProductModel=model("product",productSchema)
