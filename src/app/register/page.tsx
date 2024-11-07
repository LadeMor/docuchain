import Link from 'next/link';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            organization: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Name is required"),
            lastName: Yup.string().required("Surname is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], "Passwords must be the same")
                .required("Password confirmation is required"),
            organization: Yup.string()
        }),
        onSubmit:(values) => {
            console.log(values);
        }
      });

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
                <form className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label className="text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)]">Name</label>
                        <input className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)]">Surname</label>
                        <input className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)]">Email</label>
                        <input className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)]">Password</label>
                        <input className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg text-primary_text_color font-[family-name:var(--font-montserrat-regular)]">Repeat password</label>
                        <input className="text-md pt-3 pb-3 pl-4 pr-5 border border-border_color border-solid rounded-xl shadow-md"/>
                    </div>
                   <div>
                    <button className="text-md pt-3 pb-3 pr-5 pl-5 bg-button_bg_color rounded-xl text-white font-[family-name:var(--font-montserrat-semibold)]">Register</button>
                   </div>
                </form>
                <h2 className="text-md text-center font-[family-name:var(--font-montserrat-regular)] text-md text-primary_text_color">
                    Already have an account? 
                   <Link href="#" className="underline text-button_bg_color">Login</Link>
                </h2>
            </div>
           </div>
        </div>
    );
}

export default Register;