import { useNavigate } from "react-router-dom"
export const Appbar = () => {
    const navigate=useNavigate()
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
          Google Pay
        </div>
        
        <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 cursor-pointer" onClick={function(){
            navigate("/update")
        }}>
              Update
            </div>
            
            <div className="flex flex-col justify-center h-full mr-4">
               Log Out
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer" onClick={function(){
                    localStorage.removeItem("token")
                    navigate("/")
                }}>
                <div className="flex flex-col justify-center h-full text-xl " >
                    L
                </div>
            </div>
        </div>
    </div>
}