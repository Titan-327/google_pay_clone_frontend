import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';

// Lazy load the components
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Signin = lazy(() => import("./pages/Signin.jsx"));
const SendMoney = lazy(() => import("./pages/SendMoney.jsx"));
const Landing = lazy(() => import("./pages/Landing.jsx"));
const Update = lazy(() => import("./pages/Update.jsx"));

function App() {
  return (
    <div>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" 
                   element={
                     <Suspense fallback="Loading...">
                       <Landing />
                     </Suspense>
                   } 
            />
            <Route path="/dashboard" 
                   element={
                     <Suspense fallback="Loading...">
                       <Dashboard />
                     </Suspense>
                   } 
            />
            <Route path="/signup" 
                   element={
                     <Suspense fallback="Loading...">
                       <Signup />
                     </Suspense>
                   } 
            />
            <Route path="/signin" 
                   element={
                     <Suspense fallback="Loading...">
                       <Signin />
                     </Suspense>
                   } 
            />
            <Route path="/send" 
                   element={
                     <Suspense fallback="Loading...">
                       <SendMoney />
                     </Suspense>
                   } 
            />
            <Route path="/update" 
                   element={
                     <Suspense fallback="Loading...">
                       <Update />
                     </Suspense>
                   } 
            />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
