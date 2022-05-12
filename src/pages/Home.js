import React from "react";
import PostedContent from "../Components/PostedContent";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import logo from '../assets/m.svg'



export default function Home() {


  const [hasSignedUp, setHasSignedUp] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen ] = useState(false);

  
  return (
    <>
    {isOpen && (
      <>

<div className="login_page">
        <div className="login_form flex items-center justify-center h-screen fixed inset-0 z-50 overflow-auto bg-smoke-light drop-shadow-2xl backdrop-blur-[2px]">
          
          <div className="bg-[#27292D]  rounded-lg border-2 text-center border-[#969696] shadow-lg p-10 w-[463px]">
          <button className="float-right p-1 bg-black rounded-full" onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
            
            <h1 className="uppercase text-[#6B6C70] font-Inter font-medium text-sm">
              Sign up
            </h1>
            <h1 className="text-white font-bold font-Inter text-[16px]">
              Create an account to continue
            </h1>
            <form className="">
              <div className="flex flex-col gap-2">
                <label className="text-[#C5C7CA] text-left text-[14px] font-bold">
                  Email
                </label>
                <input
                  className="py-2 pl-3 border rounded-md border-[#35373B] w-full outline-none bg-transparent placeholder:text-[16px]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col gap-2 py-5">
                <label className="text-[#C5C7CA] text-left text-[14px] font-bold">
                  Username
                </label>
                <input
                  className="py-2 pl-3 border rounded-md border-[#35373B] w-full outline-none bg-transparent placeholder:text-[16px]"
                  type="email"
                  placeholder="Choose a preffered username"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#C5C7CA] text-left text-[14px] font-bold">
                  Password{" "}
                </label>
                <input
                  className="py-2 pl-3  border rounded-md border-[#35373B] w-full outline-none bg-transparent placeholder:text-[16px]"
                  type="email"
                  placeholder="Choose a strong Password"
                />
              </div>

              <button
              onClick={()=> {setIsOpen(false)}}
                className="rounded-md mt-5 bg-[#4A96FF] w-full h-10 text-white flex flex-row justify-center items-center gap-1 focus:outline-none"
                type="submit"
              >
                Continue
              </button>

             <div className="text-left mt-2">
                  <label className="">
                      Already have an account? 
                  </label>
                  <button className="text-bold" onClick={()=> {navigate('/login')}}>Login</button>
                  </div>
              
            </form>
          </div>
        </div>
      </div>
      </>
    )}



      <div className="home_page pl-[35rem] pr-[35rem] pt-20 font-Inter">
        <div className="user_greet text-[28px] font-medium"> Hello Jane</div>
        <div className="intro text-[#7F8084] ">
     How are you doing today? Would you like to share something with the
          community{" "}
        </div>

        <div className="create_post_container flex flex-col p-5 gap-4  bg-[#27292D] border-2 border-[#35373B] rounded-lg my-10">
          <h1 className="text-[#C5C7CA] m-1">Create Post</h1>

          <input
            type="text"
            className="pl-10 p4-5 pt-5 pb-5 rounded-lg my-2 bg-[#191920]"
            placeholder="How are you feeling today?"
          ></input>
          
          
          
          <div className="btn text-right">
            <button
            onClick={()=> setIsOpen(true)}
            type="submit"
              className="post_submit rounded-lg w-[25%] bg-[#4A96FF] p-2 my-2"
            >
              Post
            </button>
          </div>
        </div>

        <PostedContent
          name="Theresa Webb"
          time="5mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <PostedContent
          name="Theresa Webb"
          time="5mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <PostedContent
          name="Theresa Webb"
          time="5mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </>
  );
}
