import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./LoginPage.module.css";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!fullName || !email || !password || !phone) {
      return "All fields are required.";
    }

    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const emailExists = userArr.some((user) => user.email === email);

    if (emailExists) {
      return "Email already exists.";
    }

    if (password.length <= 8) {
      return "Password must be longer than 8 characters.";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    const newUser = { fullName, email, password, phone };
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    userArr.push(newUser);
    localStorage.setItem("userArr", JSON.stringify(userArr));

    navigate(-1); // Go back to the previous page
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
                <h3 className="mb-5">Sign Up</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div data-mdb-input-init className="form-outline mb-2">
                    <input
                      type="text"
                      id="typeFullNameX-2"
                      className="form-control form-control-lg"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-2">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-2">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-2">
                    <input
                      type="text"
                      id="typePhoneX-2"
                      className="form-control form-control-lg"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
                <hr className="my-4" />
                <p>
                  Login ? <a href="/login">Click</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
