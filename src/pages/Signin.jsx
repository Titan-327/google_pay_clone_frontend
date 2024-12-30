import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"
const Signin = () => {
   const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="Iamvoldemort@gmail.com" label={"Email"}  onChange={function(e){
            setUsername(e.target.value)
        }}/>
        <InputBox placeholder="123456" label={"Password"} onChange={function(e){
            setPassword(e.target.value)
        }}/>
        <div className="pt-4">
          <Button label={"Sign in"} onClick={
          async function(){
            const res=await axios.post("http://localhost:3000/api/v1/user/signin",{username:username,password:password})   
           if(res.data.msg=="Incorrect inputs"){
            toast.error("Incorrect inputs")
           }
          else if(res.data.msg=="User not found"){
            toast.error("User not found")
          }
          else if(res.data.msg=="Incorrect password"){
            toast.error("Incorrect password")
          }
          else {
            toast.success("Signed in successfully")
            localStorage.setItem("token",res.data.token)
            navigate("/dashboard")
        }
          
        }
          }/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
export default Signin