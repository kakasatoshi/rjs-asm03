import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store";
import css from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const user = userArr.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch(authAction.login());
      dispatch(authAction.LoadUser(user));
      dispatch(authAction.setUserUser(email));

      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");

      // Redirect to another page or update the state
    } else {
      setError("Invalid email or password");
      setPassword("");
    }
  };

  return (
    <section
      className={`vh-100 ${css.container}`}
      style={{ backgroundImage: `url(img/banner1.jpg)` }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                <hr className="my-4" />
                <p>
                  Create an account? <a href="/register">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
