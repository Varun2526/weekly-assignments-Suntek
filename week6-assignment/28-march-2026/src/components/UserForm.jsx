import { useState } from 'react'
import {useForm} from 'react-hook-form'

function UserForm() {
    const [users,setUsers] = useState([])
    const {register,
        handleSubmit,
        formState:{errors}} = useForm()
    
        const onAddUser =(obj) => {
        setUsers([...users,obj])
    };


  return (

    <div className='border-2 sm:mx-30 lg:mx-75 mt-16 bg-blue-200'>
        <div className='p-10 border-4 m-10 text-center rounded-2xl bg-white'>
      <h1 className='text-center text-5xl mt-9'> User Form</h1>

            {/* form */}
            <form className='' onSubmit={handleSubmit(onAddUser)}>
                {/* first name*/}

                <div className='mb-3'>
                    <label htmlFor='firstname'>FirstName</label>
                    <input type="text" 
                    {...register("firstname",{
                        required:"firstname required",
                        minLength:{
                            value:4,
                            message:"minimum 4 characters"
                        },
                        validate:(v)=>v.trim().length!==0 ||"white space is not valid"
                        })} 
                    id='firstname'
                    className='border w-full p-3' />
                </div>
                {/* usrname validaation errors */}
                {errors.firstname && <p className='text-red-600'>{errors.firstname.message}</p>}


                {/* email */}

                <div className='mb-3'>
                    <label htmlFor='email'>email</label>
                    <input type="email" 
                    {...register("email")}
                    id='email' 
                    className='border w-full p-3' />
                </div>

                {/* date of birth  */}
                <div className='mb-3'>
                    <label htmlFor='dateofbirth'>DateOfBirth</label>
                    <input type="date"
                     {...register("dateofbirth")}  
                     id="dateofbirth" 
                     className='border w-full p-3 ' />
                </div>

                <button type="submit" className='p-3.5 bg-amber-400 block m-auto mt-4 mb-6'>Add User</button>
            </form>
            </div>
            {/* table */}
            <div className='bg-amber-50'>
        <table className='border-2 p-2 w-full mt-10'>
            <thead className='border-2 p-2'>
                <tr className="">
                    <th>FirstName</th>
                    <th className="border-2 p-2">Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {users.map((userObj,index)=>(
                    <tr key={index} className="text-center">
                        <td className="border-2 p-2">{userObj.firstname}</td>
                        <td className="border-2 p-2">{userObj.email}</td>
                        <td className="border-2 p-2">{userObj.dateofbirth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
   
   
  )
}


export default UserForm
