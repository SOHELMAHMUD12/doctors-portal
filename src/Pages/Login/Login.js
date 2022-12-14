import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  
  const { register,formState:{errors}, handleSubmit } = useForm();
  const{signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigation();
  
  const from = location.state?.from?.pathname || '/';


  const handleLogin = data =>{
    setLoginError('');
    signIn(data.email, data.password)
    .then(result=>{
      const user =result.user;
      console.log(user)

      navigate(from, {replace:true});
    })
    .catch(error =>{
      console.log(error.message)
      setLoginError(error.message);
    
    });

  }
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-black text-center">Login</h2>
        
        <form onSubmit={handleSubmit(handleLogin)}>
         
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-black ">Email</span>  </label>
              <input type="text" {...register("email", {required: "Email Address is required"})}  className="input input-bordered w-full max-w-xs border-current "  />
              {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

             
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-black">Password</span></label>
              <input type="password" {...register("password",{
                required:"Password is required",
                minLength:{value: 6, message: 'Password must be 6 characters or longer'} 
            })}  
                
                className="input input-bordered w-full max-w-xs border-current		"  />
            
             <label className="label">  <span className="label-text  text-black">Forget Password</span></label>
             {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

          </div>
        
          <input className="btn btn-accent w-full text-black" value="Login" type="submit" />
        </form>
        <div>
          { loginError && <p>{loginError}</p>}
        </div>
       
        <p className="text-black">New To Doctors Portal <Link className="text-primary" to="/signup">Create an account</Link></p>
        
  
  <div className="divider text-black">OR</div>
  <button className="btn btn-outline w-full font-bold text-primary">CONTINUE WITH GOOGLE</button>


        
      </div>
    </div>
  );
};

export default Login;
