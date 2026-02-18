
import './App.css'
import {useForm, } from "react-hook-form"
function App() {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting },
  } = useForm();

  async function onSubmit(data){
    //API call ko simulate krte hai
    await new Promise ((resolve) => setTimeout(resolve , 5000));
    console.log("submitting the form" ,data);
    
  }

  return (
    <form onSubmit ={handleSubmit(onSubmit)}>
   <div>
      <lable>First Name: </lable>
     <input className={errors.firstname ? "input-error":""}
       {...register('firstname' , {
       required :"First name is required",
       minLength:{value:3, message:'Min Len at least 3'},
       maxLength:6})}/>
       {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}
   </div>
   <br/>
   <div>
    <lable>Middle Name: </lable>
    <input className={errors.middlename ? "input-error":""}
        {...register('middlename')} />
        {errors.middlename && <p className="error-msg">{errors.middlename.message}</p>}
   </div>
   <br/>
   <div>
    <lable>Last Name: </lable>
    <input className={errors.lastname ? "input-error":""}
    {...register('lastname', {
      pattern:{
        value:/^[A-Za-z]+$/i ,
        message:"last name is not as per the rule"
      }}
    )}/>
    {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>}
   </div>
   <br/>
   <input type='submit' disabled={isSubmitting} 
   value={isSubmitting ? "Submitting" : "Submit"}/>
   </form>
  )
}

export default App
