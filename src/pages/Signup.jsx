import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"

 const Signup = () => {
 const [firstName,setFirstName]=useState("")
 const [lastName,setLastName]=useState("")
 const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox  onChange={function(e){
            setFirstName(e.target.value)
        }} placeholder="Tom" label={"First Name"} />
        <InputBox   onChange={function(e){
            setLastName(e.target.value)
        }}placeholder="Marvoloriddle" label={"Last Name"} />
        <InputBox   onChange={function(e){
            setUsername(e.target.value)
        }} placeholder="Iamvoldemort@gmail.com" label={"Email"} />
        <InputBox   onChange={function(e){
            setPassword(e.target.value)
        }}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} onClick={
          async function(){
            const res=await axios.post("http://localhost:3000/api/v1/user/signup",{firstName:firstName,lastName:lastName,username:username,password:password})   
           if(res.data.msg=="Incorrect inputs"){
            toast.error("Incorrect inputs")
           }
          else if(res.data.msg=="Email already taken"){
            toast.error("Email already taken")
          }
          else if(res.data.msg=="Error while signup"){
            toast.error("Error while signup")
          }
          else{
            toast.success("User created successfully")
            navigate("/signin")
        }
          
        }
          }/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
export default Signup