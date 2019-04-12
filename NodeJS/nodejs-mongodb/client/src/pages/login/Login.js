import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../atoms/input/Input'
import './login.css'

class Login extends Component {
  render() {
    return (
      <div className="layout-signup">
        <div className="page-signup">
          <div className="sign-up">
            {/* Header */}
            <div className="l-signup-header">
              <div className="container">
                <div className="l-box-content">
                  <Link to="/" className="shop-logo" />
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="l-signup-body">
              <div className="container">
                <div className="l-box-content">
                  <section className="signup-select">
                    <form>
                      <div className="content">
                        <h2 className="center hdr-l">
                          To continue, log in to Shop.
                        </h2>
                        <button className="btn btn-google btn-block">
                          Log in with google
                        </button>
                        <strong className="line-thru">or</strong>
                      </div>
                    </form>
                  </section>
                  <section className="register">
                    <div className="content">
                      <form>
                        <fieldset>
                          <ul>
                            <li>
                              <Input placeholder="Email" type="email" />
                            </li>
                            <li>
                              <Input placeholder="Password" type="password" />
                            </li>
                            <li className="li-terms-notice">
                              <p className="notice">
                                If you click "Log in with Google" and are not a
                                Shop's user, you will be registered and you
                                agree to Shop's &nbsp;
                                <Link to="/signup">
                                  Terms and Conditions
                                </Link>
                                and &nbsp;
                                <Link to="/signup">Privacy Policy</Link>.
                              </p>
                            </li>
                          </ul>
                        </fieldset>
                        <button className="btn btn-green btn-block">
                          Log in
                        </button>
                      </form>
                      <p className="primary">
                        <Link to="/login">Forget your password?</Link>
                      </p>
                    </div>
                  </section>
                  <section>
                    <div className="divider" />
                    <h2 className="center hdr-l">Don't have an account.</h2>
                    <button className="btn btn-block btn-default">
                      Sign up for Shop
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
