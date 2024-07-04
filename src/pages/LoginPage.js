import React from "react";
import css from "./LoginPage.module.css";

const LoginPage = () => {
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

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                  {/* <label className="form-label" htmlFor="typeEmailX-2">Email</label> */}
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                  {/* <label className="form-label" htmlFor="typePasswordX-2">Password</label> */}
                </div>

                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Login
                </button>

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
