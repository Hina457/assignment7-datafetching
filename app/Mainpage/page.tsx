




import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
export default function Main(){
  return(
    <div>
      <div className="w-full h-[600px] bg-black">
        <h1 className="text-orange-500 text-center font-extrabold font-serif text-4xl pt-[250px]"><span className="text-yellow-500">Hi</span>na Alvi</h1>
        <h1  className="text-orange-500 text-center font-bold text-2xl">Assignment 7</h1>
        <p  className="text-orange-500 text-center text-3xl font-serif ">Server side Rendering & Client Side Rendering</p>
        {/* icons div */}
        <div className="flex gap-4 justify-center mt-[30px] text-white ">
          <FaGithub className="w-[30px] h-[30px] hover:text-yellow-500"/>
          <FaLinkedin className="w-[30px] h-[30px] hover:text-yellow-500"/>
          <IoLogoInstagram className="w-[30px] h-[30px] hover:text-yellow-500"/>
          <FaFacebookSquare className="w-[30px] h-[30px] hover:text-yellow-500"/>
        </div>
       <button className="ml-[45%] mt-[30px] text-white font-bold hover:bg-orange-500 font-serif w-[150px] rounded-[5px] h-[50px] bg-yellow-500">
       <Link href="/bothpage">Next Page</Link> 
       </button>
        
      </div>
    </div>
  )
}