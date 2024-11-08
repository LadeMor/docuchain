"use client"

import Link from 'next/link';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    organization: string;
}

const Register = () => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
    }

    const password = watch("password");

    return(
        <div className="flex items-center justify-center min-h-screen gap-3 pr-3">
             <div className="flex-1 bg-button_bg_color w-full h-screen flex items-center justify-center" >
                <div className=" p-6 rounded-xl flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-5xl font-[family-name:var(--font-montserrat-semibold)] text-white">Advanced document management system working on blockchain technologies!</h1>
                    <img src="./illustrations/undraw_google_docs_re_evm3.svg" className="w-[40rem]"/>
                </div>
            </div>
           <div className="flex-1 flex justify-center items-center p-8">
           <div className="bg-secondary_bg_color w-96 p-3 rounded-xl flex-1">
                <h1 className="text-2xl font-bold text-center text-primary_text_color font-[family-name:var(--font-montserrat-semibold)]">Register</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label className="text-lg 
                        text-primary_text_color 
                        font-[family-name:var(--font-montserrat-regular)] 
                        after:content-['*'] 
                        after:ml-0.5 
                        after:text-red-500">Name</label>
                        <input 
                        type='text'
                        {...register("firstName", {required: "First name is required"})} 
                        className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                         {errors.firstName &&  <p className='font-[family-name:var(--font-montserrat-medium)] text-red-500'>{errors.firstName.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg 
                        text-primary_text_color 
                        font-[family-name:var(--font-montserrat-regular)] 
                        after:content-['*'] 
                        after:ml-0.5 
                        after:text-red-500">Surname</label>
                        <input
                        type='text'
                        {...register("lastName", { required: "Surname is required" })}
                        className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                        {errors.lastName && <p className='font-[family-name:var(--font-montserrat-medium)] text-red-500'>{errors.lastName.message}</p>}
                       
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg 
                        text-primary_text_color 
                        font-[family-name:var(--font-montserrat-regular)] 
                        after:content-['*'] 
                        after:ml-0.5 
                        after:text-red-500">Email</label>
                        <input 
                        type='email'
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                        className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                         {errors.email && <p className='font-[family-name:var(--font-montserrat-medium)] text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg 
                        text-primary_text_color 
                        font-[family-name:var(--font-montserrat-regular)] 
                        after:content-['*'] 
                        after:ml-0.5 
                        after:text-red-500">Password</label>
                        <input
                        type='password'
                         {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters long at least" } })}
                         className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                         {errors.password && <p className='font-[family-name:var(--font-montserrat-medium)] text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg 
                        text-primary_text_color 
                        font-[family-name:var(--font-montserrat-regular)] 
                        after:content-['*'] 
                        after:ml-0.5 
                        after:text-red-500">Repeat password</label>
                        <input 
                        type='password'
                         {...register("confirmPassword", { required: "Repeat the password",
                            validate: value => value === password || "Passwords do not matchh"
                          })}
                        className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                        {errors.confirmPassword && <p className='font-[family-name:var(--font-montserrat-medium)] text-red-500'>{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)]">Organization</label>
                        <input 
                        className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                    </div>
                   <div>
                    <button type="submit" className="text-md pt-3 pb-3 pr-5 pl-5 bg-button_bg_color rounded-xl text-white font-[family-name:var(--font-montserrat-semibold)]">Register</button>
                   </div>
                </form>
                <h2 className="text-md text-center font-[family-name:var(--font-montserrat-regular)] text-md text-primary_text_color">
                    Already have an account? 
                   <Link href="/login" className="underline text-button_bg_color">Login</Link>
                </h2>
            </div>
           </div>
        </div>
    );
}

export default Register;