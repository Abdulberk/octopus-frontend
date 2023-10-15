import React, {ChangeEvent, FormEvent} from 'react'
import CustomInput from './CustomInput'
import {useState, useEffect} from 'react'
import { login } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import Switch from '../Switch';

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
export const passwordPattern = /^.{6,}$/;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');



  
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
}, [isEmailValid, isPasswordValid]);

const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(emailPattern.test(emailValue)); 
};

const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsPasswordValid(passwordPattern.test(passwordValue)); 
};

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
        setLoading(true);
        await login({email, password}).then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setIsSuccess(true);
            const token = res.data.token;
            localStorage.setItem("token",token)
          } else {
            setError(res.data.message);
          }
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    }
    );

    }
}

 useEffect(() => {
    if (isSuccess || localStorage.getItem("token")) {
      navigate('/dashboard');
    }
  }
  ,[isSuccess, navigate]);




  return (
      <form className="w-auto h-auto flex flex-col justify-start items-start " onSubmit={handleSubmit}>
        <div className = "flex flex-col items-start justify-start gap-y-[9px]">
          <h1 className="text-[#4FD1C5] text-[32px] font-bold leading-[130%] font-['Helvetica']">Welcome Back</h1>
          <p className="text-[#A0AEC0] text-[14px] font-bold leading-[140%] font-['Helvetica']">Enter your email and password to sign in</p>
            <p className="text-[#F56565] text-[14px] font-bold leading-[140%] font-['Helvetica']">{error}</p>
          </div>
          <span className="text-[#F56565] text-[14px] font-bold leading-[140%] font-['Helvetica'] h-9 w-full text-center"  ></span>
          <div className = "pl-[5px] flex flex-col justify-start items-start gap-y-6">
         
          <CustomInput placeholder="Your email address" value={email} onChange={handleEmailChange} textType = "email" pattern={emailPattern} label="Email"/>
     
          <CustomInput placeholder="Your password" value={password} onChange={handlePasswordChange} textType = "password" pattern={passwordPattern} label = "Password"/>
           
          </div>
          <span className="text-[#F56565] text-[14px] font-bold leading-[140%] font-['Helvetica'] h-6 w-full text-center"  ></span>
          <div className = "w-full h-auto flex flex-col justify-start items-start gap-y-[34px]">
          <Switch label="Remember me"/>
          <div className = "w-full flex flex-col justify-center items-center gap-y-[22px]" >

          
          <button type="submit" className="w-full h-[45px] rounded-[12px] bg-[#4FD1C5] flex items-center justify-center text-center text-white font-bold text-[10px] font-['Helvetica'] leading-[140%]">
             
              {loading ?  <div className="flex justify-center items-center">
              <SyncLoader size = {10} color="white" />
               </div>
                : 
                "SIGN IN"
               }
          </button>
               
          <p className="text-[#A0AEC0] text-[14px] font-normal leading-[140%] font-['Helvetica'] text-center">Don't have an account? <a href= "/register" className = "font-bold text-[#4FD1C5]">Sign up</a></p>
          </div>
          </div>
      </form>
  );
};

export default LoginForm;