import React from "react";
import {useNavigate} from 'react-router-dom';
import "../assets/index.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login_page">
        <div className="login_form flex items-center justify-center h-screen">
          <div className="bg-[#27292D]  rounded-lg border-2 text-center border-[#969696] shadow-lg p-10 w-[463px]">
            <h1 className="uppercase text-[#6B6C70] font-Inter font-medium text-sm">
              Welcome Back
            </h1>
            <h1 className="text-white font-bold font-Inter text-[16px]">
              Log into your account
            </h1>
            <form className="">
              <div className="flex flex-col gap-2 py-10">
                <label className="text-[#C5C7CA] text-left text-[14px] font-bold">
                  Email or Username
                </label>
                <input
                  className="py-2 pl-3 border rounded-md border-[#35373B] w-full outline-none bg-transparent placeholder:text-[16px]"
                  type="email"
                  placeholder="Enter your email or username"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#C5C7CA] text-left text-[14px] font-bold">
                  Password{" "}
                  <span className="float-right text-[12px]">
                    Forgot password?
                  </span>
                </label>
                <input
                  className="py-2 pl-3  border rounded-md border-[#35373B] w-full outline-none bg-transparent placeholder:text-[16px]"
                  type="email"
                  placeholder="Enter your Password"
                />
              </div>

              <button
                className="rounded-md mt-5 bg-[#4A96FF] w-full h-10 text-white flex flex-row justify-center items-center gap-1 focus:outline-none"
                type="submit"
              >
                Login now
              </button>

             <div className="text-left mt-2">
                  <label className="">
                      Not registered yet? <button onClick={() => {navigate('/signup')}}>Register</button>
                  </label>
                  </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
