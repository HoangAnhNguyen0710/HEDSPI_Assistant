import React from "react";
import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const LoginForm = (props) => {
  const userRef = useRef();
  const errRef = useRef();

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const [errMsg, setErrMsg] = useState("");
  const [remember, setRemember] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [login]);

  //   useEffect(()=>{
  //       const user = localStorage.getItem("");
  //       if(user) {
  //           const obj = JSON.parse(user);
  //           setLogin({email: obj, password: ""});
  //       }
  //   }, [])

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if(remember){
  //         const saveLogin = JSON.stringify(login.email);
  //         localStorage.setItem("RequestGateLoginUser", saveLogin);
  //     }
  //     axiosClient.post(`/users/login`, {
  //         email: login.email,
  //         password: login.password
  //     }).then(
  //     (res) => {
  //         console.log(res.data)
  //         const user = res.data.user;
  //         //lưu thông tin user hiện tại vào localstorage
  //         const saveUser = JSON.stringify(user.email);
  //         localStorage.setItem("RequestGateUser", saveUser);
  //         //save token
  //         const accessToken = res?.data?.accessToken;
  //         localStorage.setItem("accessToken", accessToken);
  //         //
  //         dispatch(setUser({_id: user._id, email: user.email, name: user.name, role: user.role}))
  //         navigate("/");
  //     }
  //     ).catch((err) => {
  //         if(!err?.response){
  //             setErrMsg('No server response');
  //         } else if(err.response?.status === 400) {
  //             setErrMsg("Missing Email or Password")
  //         } else if(err.response?.status === 401)
  //             setErrMsg("Unauthorized")
  //         else{
  //             setErrMsg(err.response.data)
  //         }
  //     }
  //     );
  //   }
  return (
    <>
      <div className="rounded-lg p-3 py-6 font-semibold text-slate-700 self-center text-xl text-center font-mono block">
        LOGIN
      </div>
      <p ref={errRef} className={errMsg ? "bg-red-300  p-3" : ""}>
        {errMsg}
      </p>
      <form className="font-mono">
        <label for="username">Username</label>
        <div className="border-b-2 flex items-center mb-3">
          <PersonOutlineIcon />
          <input
            id="username"
            value={login.username}
            type="text"
            className="border-0 block w-full h-10 mx-2"
            onChange={handleChange}
            name="username"
            placeholder="Username"
            ref={userRef}
            autoComplete="off"
            required
          />
        </div>

        <label for="password">Password</label>
        <div className="border-b-2 flex items-center mb-3">
          <VpnKeyOutlinedIcon />
          <input
            id="password"
            value={login.password}
            type="password"
            className="border-0 block w-full h-10 mx-2"
            onChange={handleChange}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5"
            value={remember}
            onChange={() => setRemember(!remember)}
          />
          <label className="px-2 text-sm lg:text-base">Remember me</label>
        </div>
        <div className="py-2 text-end w-full">
          <a href="/" className="text-sm">
            Forgot password ?
          </a>
        </div>
        <button
          type="submit"
          className="rounded-2xl p-3 block border-2 w-full my-2 bg-gradient-to-r from-cyan-400 to-blue-500  font-semibold text-slate-50"
        >
          Login
        </button>
      </form>
      <div className="py-2 text-sm text-center">
        {" "}
        Or login with
        <br />
        <button className="text-blue-400 p-3 rounded-full">
          <FacebookIcon fontSize="large" />
        </button>
        <button className="text-red-400 p-3">
          <GoogleIcon fontSize="large" />
        </button>
      </div>
      <div className="py-2 text-sm text-center">
        {" "}
        Don't have an account ?{" "}
        <button
          className="text-blue-400"
          onClick={() => props.setLoginSwitch(false)}
        >
          Sign up
        </button>
      </div>
    </>
  );
};
export default LoginForm;
