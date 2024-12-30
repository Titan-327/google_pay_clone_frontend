
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"
 const Dashboard = () => {
    const token=localStorage.getItem("token")
    const navigate=useNavigate()
    return <div>
        {token && <>
            <Appbar />
        <div className="m-8">
            <Balance />
            <Users />
        </div></>}
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
export default Dashboard