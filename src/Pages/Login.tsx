import React, {useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function () {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const notify = () => toast("Login is Successful!");
  const redirect =()=>{
    window.location.href="/signup"
  }
  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
   const {target} = event
    switch (target.name) {
      case "name":
        setName(target.value);
        break;
      case "email":
        setEmail(target.value);
        break;
    }
  }
  const handleSubmit= async()=>{
    try{
      if(name !=="" && email !==""){
    const {data}= await axios.post('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/login',{
        name: name,
        email: email
      })
      if(data.message ==="Login is successful"){
        notify();
        window.location.href="/home"
      }else{
        console.log("login fail ")
      }
    }
     
    }catch(error){
      console.log(error, "error")
    }
   
 
  }
  return (
    <div>
      
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h2 className='text-[#002147] font-bold mr-8 text-xs md:text-base  lg:text-xl pt-6 pb-6 hover:cursor-pointer'> BStore</h2>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" >
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={handleChange} type="name" name="name"  placeholder="Full Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button onClick={handleSubmit} type="button" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <p onClick={redirect} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</p>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<ToastContainer/>
    </div>
  )
}
