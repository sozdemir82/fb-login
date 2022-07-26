/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../icons/logo.svg";

function Login() {
  return (
    <div className="container">
      <form className="form-wrapper">
        <div className="logo-holder">
          <img src={logo} alt="logo" />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Kullanıcı Adı"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="*********"
          />
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary px-4">
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
