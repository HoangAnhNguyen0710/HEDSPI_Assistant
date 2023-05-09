/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import working from "../assets/img/working.jpg";
// import LoginForm from "../components/Form/LoginForm";
// import RegisterForm from "../components/RegisterForm";
import { userLogin } from "../services/api";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/user";
import { Avatar } from "@mui/material";
const web_icon = require('../assets/img/logo/hedspi-logo.jpg');

const LoginPage = () => {
  const navigate = useNavigate();
  // const [loginSwitch, setLoginSwitch] = useState(true);
  const dispatch = useDispatch();
  const changeUser = (token: any) => {
    localStorage.setItem("HEDSPI_ASSISTANCE_USER_TOKEN", token);
  }
  useEffect(()=> {
    const checkToken = localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN")
    if(checkToken !== "") navigate('/');
  }, [])
  
  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white w-fit h-fit rounded-2xl flex items-center justify-center p-9 px-12 flex-col">
        <div className="rounded-full shadow-md m-4 flex flex-col items-center"> 
          <Avatar 
            alt="web-icon" 
            src={web_icon}
            sx={{ width: 64, height: 64 }}
            />
        </div>
        <span className="font-semibold text-md pb-1">LOGIN OR SIGN UP</span>
        <span className="text-sm opacity-80">with</span>
        <div className="py-3">
        <GoogleLogin
          onSuccess={async(credentialResponse) => {
            userLogin(credentialResponse.credential).then((res) => {
              dispatch(setUser(res.data));
              navigate('/');
            });
            changeUser(credentialResponse.credential)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          size="medium"
        />
        </div>
      {/* </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
