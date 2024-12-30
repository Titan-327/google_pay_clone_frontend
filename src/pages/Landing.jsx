import {Link,useNavigate} from "react-router-dom"
import {Footer} from "./Footer.jsx"
const Landing=function(){
    const navigate=useNavigate()
    return <div>

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/11/05/Google-Pay-India-Tez-new-icon.jpg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Google Pay</span>
        </Link>
       
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {!localStorage.getItem("token") && <> <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/signup">Signup</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/signin">Signin</Link>
            </li> </>}
         {localStorage.getItem("token") && <>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={function(){
                localStorage.removeItem("token")
                navigate("/")
              }}>Log out</Link>
            </li>
         </>}
           
          </ul>
        </div>
      </div>
    </nav>
   
    <div className="min-h-screen flex flex-col justify-center items-center">
  <div className="flex-grow text-5xl md:text-center inline-flex items-center">
  Secure, Fast, <br></br>
  and Simple Online Payments
  </div>
  <footer className=" text-center p-4 ">
 <Footer/>
  </footer>
</div>
    </div>
   
}
export default Landing