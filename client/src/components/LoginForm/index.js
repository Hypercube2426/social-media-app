import React from "react";
import Logo from "images/logo-light.svg";

function LoginForm({ onSubmit, onChangeEmail, onChangePassword }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light" style={{ height: "100vh" }}
    >
      <form className="card p-4" style={{ minWidth: "320px" }} onSubmit={onSubmit}>
        <div className="mx-auto my-3">
          <img src={Logo} alt="logo" width="180px" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            onChange={onChangeEmail}
            type="email"
            className="form-control"
            placeholder="berkslv@gmail.com"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Parola</label>
          <input
            onChange={onChangePassword}
            type="password"
            className="form-control"
            placeholder="********"
          />
        </div>
        <input type="submit" className="btn btn-primary my-2" value="Giriş Yap" />
      </form>
    </div>
  );
}

export default LoginForm;
