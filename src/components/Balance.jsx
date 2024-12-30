import { toast } from "react-toastify"
import { useEffect,useState } from "react"
import axios from "axios"
import { useRecoilValue } from "recoil"
export const Balance = () => {
    const token=localStorage.getItem("token")
     const [value,setValue]=useState(0)
  
    useEffect(()=>{
        (async()=>{
            try {
                const URL=`http://localhost:3000/api/v1/account/balance`
                const response=await axios.get(URL,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });
                setValue(response.data.balance);
            } catch (error) {
                console.error(error.response);
            }
        })();
    },[])
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}