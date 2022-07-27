/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../icons/logo.svg";
import { login } from "../Firebase";
import { useState } from "react";
import { async } from "@firebase/util";
import toast, { Toaster } from 'react-hot-toast';

function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async e =>{
      e.preventDefault()
      const user = await login(email,password)
      console.log(user);
      
  }


  return (
    <div className="container">
      <form className="form-wrapper" onSubmit={handleLogin}>
        <Toaster position="top-right"/>
        <div className="logo-holder">
          <img src={logo} alt="logo" />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Kullanıcı Adı"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="*********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-end">
          <button disabled={!email || !password} type="submit" className="btn btn-primary px-4">
            Giriş
          </button>
        </div>

        <div className="text-center mt-5">
          <a className="forgot-password" href="#">
            Şifremi Unuttum
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
