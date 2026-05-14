import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router';

function EditEmployee() {
  const { register, handleSubmit,formState:{errors},setValue } = useForm();
  const Navigate = useNavigate();

  const onFormSubmit = (editedEmp) => {
    console.log("Edited employee:", editedEmp);
  };
  
    const { state } = useLocation();
  console.log(state);

  useEffect(() =>{
    if(state){
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
    }
  },[state]);

  const saveModifiedEmp = async (modifiedEmp) => {
  try {
    const res = await axios.put(
      `http://localhost:4000/emp-api/employees/${state?._id}`,
      modifiedEmp
    );

    if (res.status === 200) {
      Navigate("/list");
    }
  } catch (error) {
    console.error("Error occurred while saving modified employee:", error);
  }
};


  return (
     <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10 " onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  p-3 w-full rounded-2xl border-2"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3   p-3 w-full rounded-2xl border-2"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  p-3 w-full rounded-2xl border-2"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3  p-3 w-full rounded-2xl border-2"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3  p-3 w-full rounded-2xl border-2"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-500 text-white block mx-auto p-4 border-2 border-black">
          save
        </button>
      </form>
    </div>
  )
}

export default EditEmployee