"use client"

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/router";

interface ILoginForm {
    email: string,
    password: string
}

const Login = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}, watch} = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = async data => {
        try{
           const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include",
                body: JSON.stringify(data)
            });
            
            console.log("Response status:", response.status);
            
            if(response.ok){
                const result = await response.json();
                alert("Login succesfull");
                router.push("/");

            }else{
                const error = await response.json();
                console.error("Error:", error);
                alert("Login failed");
            }

        }catch(error){
            console.error("Error during login: " + error);
            alert("Login failed please try again");
        }
    }

    return (
        <div className='w-full flex justify-center items-center '>
        <div className="p-9">
           
            <div className="bg-secondary_bg_color w-96 p-3 rounded-xl flex-1">
                <h1 className="text-2xl font-bold text-center text-primary_text_color font-[family-name:var(--font-montserrat-semibold)]">Login</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label className="text-lg 
                        text-primary_text_color 
                        font-[family-name:var(--font-montserrat-regular)] 
                        after:content-['*'] 
                        after:ml-0.5 
                        after:text-red-500">Email</label>
                        <input
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                            type='email'
                            className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md" />
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
                         {...register("password", { required: "Password is required"})}
                            type='password'
                            className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md" />
                             {errors.password && <p className='font-[family-name:var(--font-montserrat-medium)] text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <button type="submit" className="text-md pt-3 pb-3 pr-5 pl-5 mt-3 bg-button_bg_color rounded-xl text-white font-[family-name:var(--font-montserrat-semibold)]">Login</button>
                    </div>
                </form>
                <h2 className="text-md text-center font-[family-name:var(--font-montserrat-regular)] text-md text-primary_text_color mt-5">
                    Do not have an account?
                   <Link href="/register" className="underline text-button_bg_color">Create account</Link>
                </h2>
            </div>
            </div>
        </div>
    );
}

export default Login;