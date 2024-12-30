import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"

const Update = () => {
 const [firstName,setFirstName]=useState("")
 const [lastName,setLastName]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
const token=localStorage.getItem("token")
    return <div>
       {token && <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Update"} />
        <SubHeading label={"Update information of your account"} />
        <InputBox  onChange={function(e){
            setFirstName(e.target.value)
        }} placeholder="Tom" label={"First Name"} />
        <InputBox   onChange={function(e){
            setLastName(e.target.value)
        }}placeholder="Marvoloriddle" label={"Last Name"} />
        <InputBox   onChange={function(e){
            setPassword(e.target.value)
        }}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Update"} onClick={
          async function(){
            if(firstName==""||lastName==""||password==""){
              toast.error("Fill all details")
            }
            else{
            const token=localStorage.getItem("token")
            const res=await axios.put("http://localhost:3000/api/v1/user/update",{firstName:firstName,lastName:lastName,password:password},{
                headers:{
                    authorization:"Bearer "+token
                }
            })
            if(res.data.msg=="Error"){
              toast.error("Internal server error")
            }   
          else if(res.data.msg=="Error while updating information"){
            toast.error("Error while updating information")
           }
          else{
            toast.success("Information updated successfully")
            navigate("/dashboard")
        }
      }
        }
          }/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>}
{!token &&   <div className="flex flex-col items-center justify-center h-screen">
  <div className="inline-flex items-center text-2xl my-3">
    Please sign in first
  </div>
  <div className="w-40">
  <Button label={"Signin"} onClick={function(){
    navigate("/signin")
  }}></Button></div>
</div>}

  </div>
}
export default Update