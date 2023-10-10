import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Switch from "../Switch";
import CustomInput from "../login/CustomInput";

import {emailPattern, passwordPattern} from "../login/LoginForm";

interface RegisterFormData {
    email: string;
    password: string;
    name: string;
}


const RegisterForm = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        email: "",
        password: "",
        name: "",
      });
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        setIsFormValid(isEmailValid && isPasswordValid && formData.name.length > 0);

    }, [isEmailValid, isPasswordValid, formData.name]);
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    
        if (name === "email") {
          setIsEmailValid(emailPattern.test(value));
        } else if (name === "password") {
          setIsPasswordValid(passwordPattern.test(value));
        }
        
      };


        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(formData);
        };



        


    return (
        <form className = "w-auto h-auto flex flex-col justify-start items-start" >
            <div className = "pl-[5px] flex flex-col justify-start items-start gap-y-6">
         
         <CustomInput placeholder="Your full name" value={formData.name} onChange={handleInputChange} textType = "text" pattern={emailPattern} label="Name" name="name"/>
         <CustomInput placeholder="Your email address" value={formData.email} onChange={handleInputChange} textType = "email" pattern={emailPattern} label="Email" name="email"/>
    
         <CustomInput placeholder="Your password" value={formData.password} onChange={handleInputChange} textType = "password" pattern={passwordPattern} label = "Password" name="password"/>
          
         </div>
         <span className="text-[#F56565] text-[14px] font-bold leading-[140%] font-['Helvetica'] h-6 w-full text-center"  ></span>
         <div className = "w-full h-auto flex flex-col justify-start items-start gap-y-[34px]">
         <Switch label="Remember me"/>
         <div className = "w-full flex flex-col justify-center items-center gap-y-[22px]" >

         
         <button onClick = {
                ()=>handleSubmit
            } disabled={!isFormValid}
         type="submit" className="w-full h-[45px] rounded-[12px] bg-[#4FD1C5] flex items-center justify-center text-center text-white font-bold text-[10px] font-['Helvetica'] leading-[140%]">

               SIGN UP
            
         </button>
              
         <p className="text-[#A0AEC0] text-[14px] font-normal leading-[140%] font-['Helvetica'] text-center">Already have an account? <a href= "/login" className = "font-bold text-[#4FD1C5]">Sign in</a></p>
         </div>
         </div>

        </form>
    )
}

export default RegisterForm;