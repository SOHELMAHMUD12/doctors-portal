import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';


const Signup = () => {

    const {register, formState:{errors}, handleSubmit } = useForm();
    const {createUser,updateUser} = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState('')

    const handleSignup = (data) =>{
        console.log(data);
        setSingUpError('');
        createUser(data.email, data.password)
        .then(result =>{
          const user =result.user;
          console.log(user);
          toast('User Created SuccessFully.')
          const userInfo = {
            displayName:data.name
          }
          updateUser(userInfo)
          .then(() =>{})
          .catch(err => console.log(err));
        })
        .catch(error => {
          console.log(error)
          setSingUpError(error.message)
        
        });
    }

    return (
        <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-black text-center">Signup</h2>
        
        <form onSubmit={handleSubmit(handleSignup)} >
         
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-black ">Name</span>  </label>
              <input type="text" {...register("name", {required: "Name is Required"})}
              
              className="input input-bordered w-full max-w-xs border-current "  />
               {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
              

             
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-black ">Email</span>  </label>
              <input type="text" {...register("email",  {required: "Email Address is required"})}  className="input input-bordered w-full max-w-xs border-current "  />
              {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

             
          </div>
          <div className="form-control mt-4 w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-black">Password</span></label>
              <input type="password" {...register("password",{
                required:"Password is required",minLength:{value: 6, message: 'Password must be 6 characters or longer'}
                 })}
                
                className="input input-bordered w-full max-w-xs border-current" />
                {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            
             

          </div>
         <input className="btn btn-accent mt-4 w-full text-black" value="Sign Up" type="submit" />
       {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>

        <p className="text-black">Already have an account <Link className="text-primary" to="/login">Please login</Link></p>
        
  
  <div className="divider text-black">OR</div>
  <button className="btn btn-outline w-full font-bold text-primary">CONTINUE WITH GOOGLE</button>


        
      </div>
    </div>
    );
};

export default Signup;