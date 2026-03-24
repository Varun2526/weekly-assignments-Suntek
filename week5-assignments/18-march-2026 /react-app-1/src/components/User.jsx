function User(props){
    let {userObj = {}} = props;
    
    if (!userObj.name) return null;
    
    return (
        <div className="bg-amber-100 rounded-xl shadow-md hover:shadow-xl ">
        
            <div>
                <img 
                    src={userObj.image} 
                    alt={userObj.name}
                    className="  h-full w-full  object-cover group-hover:scale-105 "
                />
            </div>
            
           
            <div className="p-6 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">{userObj.name}</h2>
                <p className="text-md text-gray-500  hover:text-blue-600 ">
                    {userObj.email}
                </p>
            </div>
            
            
           
        </div>
    )
}
export default User;


