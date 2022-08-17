import React from "react";
import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import axiosClient from "../config/axiosClient";

const RegisterForm = (props) => {
  //   const userRef = useRef();
  const errRef = useRef();

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [confirm, setConfirm] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [signup, setSignup] = useState({
    email: "",
    username: "",
    password: "",
    schoolyear: "65",
  });

  useEffect(() => {
    setErrMsg("");
  }, [signup]);

  //   useEffect(()=>{
  //       const user = localStorage.getItem("");
  //       if(user) {
  //           const obj = JSON.parse(user);
  //           setSignup({email: obj, password: ""});
  //       }
  //   }, [])

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signup.password !== confirm) {
      setErrMsg("Invalid password confirm !");
    } else {
      setErrMsg("");
      axiosClient.post('/user', {
        email:signup.email,
        username:signup.username,
        password:signup.password,
        schoolyear:signup.schoolyear,
      }).then((res) => console.log(res))
      .catch((err)=> console.log(err));
    }
   
  };
  return (
    <>
      <div className="rounded-lg p-3 py-6 font-semibold text-slate-700 self-center text-xl text-center font-mono">
        CREATE AN ACCOUNT
      </div>
      <p ref={errRef} className={errMsg ? "bg-red-300  p-3" : ""}>
        {errMsg}
      </p>
      <form className="font-mono" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <div className="border-b-2 flex items-center mb-3">
          <EmailOutlinedIcon />
          <input
            id="email"
            value={signup.email}
            type="email"
            className="border-0 block w-full h-10 mx-2"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex border-b-2 mb-2">
          <div className="w-4/5">
            <label for="username">Username</label>
            <div className=" flex items-center mb-1">
              <PersonOutlineIcon />
              <input
                id="username"
                value={signup.username}
                type="text"
                className="border-0 block w-full h-10 mx-2"
                onChange={handleChange}
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="w-1/5">
            <label for="schoolyear">Khóa</label>
            <div className=" flex items-center mb-1 h-10">
              <select
                type="select"
                value={signup.schoolyear}
                onChange={handleChange}
                name="schoolyear"
              >
                <option value="66">66</option>
                <option value="65">65</option>
                <option value="64">64</option>
                <option value="63">63</option>
              </select>
            </div>
          </div>
        </div>

        <label for="password">Password</label>
        <div className="border-b-2 flex items-center mb-3">
          <VpnKeyOutlinedIcon />
          <input
            id="password"
            value={signup.password}
            type="password"
            className="border-0 block w-full h-10 mx-2"
            onChange={handleChange}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <label for="password">Confirm password</label>
        <div className="border-b-2 flex items-center mb-3">
          <VpnKeyOutlinedIcon />
          <input
            id="password"
            value={confirm}
            type="password"
            className="border-0 block w-full h-10 mx-2"
            onChange={(e) => setConfirm(e.target.value)}
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl p-3 block border-2 w-full my-2 bg-gradient-to-r from-cyan-400 to-blue-500  font-semibold text-slate-50"
        >
          Sign Up
        </button>
      </form>
      <div className="py-2 text-sm">
        {" "}
        Already have an account ?{" "}
        <button
          className="text-blue-400"
          onClick={() => props.setLoginSwitch(true)}
        >
          Login
        </button>
      </div>
    </>
  );
};
export default RegisterForm;
