import React from 'react'
import PropTypes from "prop-types";
import "./SignIn.scss";

const SignIn = ({ isDarkMode, isSignUp }) => {
  const signinClass = `signin ${isDarkMode ? "dark-mode" : "light-mode"}`;
  return (
    <diV className={signinClass}>
      {isSignUp ? (
        <div>
          <h2 className="heading-secondary">Sign Up</h2>
          <from className="signinform">
            <div className="text-field">
              <label>Name</label>
              <span></span>
              <input
                type="text"
                required
                className="form-input"
                placeholder="eg. John Smith"
              />
            </div>
            <div className="text-field">
              <label>Email</label>
              <span></span>
              <input
                type="email"
                required
                className="form-input"
                placeholder="eg. johnsmith#gmail.com"
              />
            </div>
            <div className="text-field">
              <label>Password</label>
              <span></span>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Min. 8 character"
              />
            </div>
            <div className="terms-condition">
              <input
                type="checkbox"
                name="terms-agree"
                id="terms-agree"
                required
                className="terms-input"
              />
              <p class="terms-sentence">
                I agree to the{" "}
                <a href="" className="link">
                  Terms & Conditions
                </a>
              </p>
            </div>
            {/* <div class="pass">Forgot password?</div> */}
            <input type="submit" value="Sign Up" className="signup-button" />
            <div class="login_link">
              Already a member ?{" "}
              <a href="#" className="link">
                {" "}
                Login
              </a>
            </div>
          </from>
        </div>
      ) : (
        <div>
          <h2 className="heading-secondary">Login</h2>
          <from className="signinform">
            <div className="text-field">
              <label>Email</label>
              <span></span>
              <input
                type="email"
                required
                className="form-input"
                placeholder="eg. johnsmith#gmail.com"
              />
            </div>
            <div className="text-field">
              <label>Password</label>
              <span></span>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Min. 8 character"
              />
            </div>

            <div class="pass">
              <a href="#" className="forget-pass">
                Forgot password?
              </a>
            </div>
            <input type="submit" value="Login" className="signup-button" />
            <div class="login_link">
              Not a member ?{" "}
              <a href="#" className="link">
                {" "}
                Create an Account
              </a>
            </div>
          </from>
        </div>
      )}
    </diV>
  );
};

SignIn.propTypes = {
  isDarkMode: PropTypes.bool,
  isSignUp: PropTypes.bool,
};


export default SignIn