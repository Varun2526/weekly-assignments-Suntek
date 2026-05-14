import {create} from 'zustand'

//create store

export const  useCounterStore = create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,

    //add user state(name,age,email)
    user:{name:"ravi",email:"ravi@mail",age:21},

    //function to change email
    changeEmail:()=>set({...user,email:"test@gmail.com"}),

    // function to change the name and age
    changeNameandAge:()=>set({...user,name:"varun",age:20}),

    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=> set(state=>({newCounter:state.newCounter-1})),
    rest:()=>set({newCounter:0})
    //function to change the newcounter to 500
    //function to decrement newcounter! by 20 
}))