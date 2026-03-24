function Product(props){ //{props :{productObj:{}}}
   const {productObj} = props;
    //state
    //return react componet
return (
  <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
    <h2 className="text-lg font-semibold text-blue-600 mb-2 line-clamp-2">
      {productObj.title}
    </h2>
    <p className="text-xl font-bold text-gray-800 mb-2">
      ${productObj.price}
    </p>
    <hr className="my-2" />
    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
      {productObj.description}
    </p>
    <p className="text-xs text-gray-900 italic">
      <b>Category:</b> {productObj.category} </p>
   <p className="text-xs my-2  text-gray-900 times">
      <b>Rating:</b>{productObj.rating.rate}
   </p>
   <p className="text-xs my-2  text-gray-900 italic">
      <b>Count:</b>{productObj.rating.count}
   </p>
  </div>
);
}
export default Product