//rfce helps for fast boilerplate

import {useForm} from 'react-hook-form';

function FormDemo() {
    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm()

    const onformSubmit  = (obj) => {
        console.log(obj);
    };


  return (
    <div>
      <h1 className='text-center text-5xl mt-9'> Form Demo</h1>
            {/* form */}
            <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onformSubmit)}>
                {/* username */}

                <div className='mb-3'>
                    <label htmlFor='usernamee'>username</label>
                    <input type="text" 
                    {...register("username",{
                        required:"Username required",
                        validate:(v)=>v.trim().length!==0 ||"white space is not valid"
                        //minLength:4
                        })} 
                    id='username'
                    className='border w-full p-3' />
                </div>
                {/* usrname validaation errors */}
                {errors.username?.type ==="required" && <p className='text-red-600'> Username required</p>}
                {errors.username?.type ==="minLength" && <p className='text-red-600'> minimum 4 characters</p>}


                {/* email */}

                <div>
                    <label htmlFor='email'>email</label>
                    <input type="email" 
                    {...register("email")}
                    id='email' 
                    className='border w-full p-3' />
                </div>

                <button type="submit" className='p-3.5 bg-amber-400 block m-auto mt-4'>Submit</button>
            </form>
    </div>
  )
}

export default FormDemo

