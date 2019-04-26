import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../atoms/input/Input'
import './signup.css'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    }
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signMeUp = e => {
    e.preventDefault()

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    }
    console.log(user)
    fetch('http://localhost:8000/api/v1/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json(user)
      })
      .then(data => {
        localStorage.setItem('token', JSON.stringify(data.user.token))
        console.log(data.user)
        console.log(data.message)
      })

    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    })
  }

  render() {
    let { firstName, lastName, userName, email, password } = this.state
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
                        <button className="btn btn-google btn-block">
                          Sign up with google
                        </button>
                        <strong className="line-thru">or</strong>
                      </div>
                    </form>
                  </section>
                  <section className="register">
                    <div className="content">
                      <h2 className="center hdr-l">
                        Sign up with your email address
                      </h2>
                      <form onSubmit={this.signMeUp}>
                        <fieldset>
                          <ul>
                            <li>
                              <Input
                                placeholder="Firstname"
                                type="text"
                                name="firstName"
                                inputValue={firstName}
                                onChangeHandler={this.onChangeHandler}
                              />
                            </li>
                            <li>
                              <Input
                                placeholder="Lastname"
                                type="text"
                                name="lastName"
                                inputValue={lastName}
                                onChangeHandler={this.onChangeHandler}
                              />
                            </li>
                            <li>
                              <Input
                                placeholder="What should we call you?"
                                type="text"
                                name="userName"
                                inputValue={userName}
                                onChangeHandler={this.onChangeHandler}
                              />
                            </li>
                            <li>
                              <Input
                                placeholder="Email"
                                type="email"
                                name="email"
                                inputValue={email}
                                onChangeHandler={this.onChangeHandler}
                              />
                            </li>
                            <li>
                              <Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                inputValue={password}
                                onChangeHandler={this.onChangeHandler}
                              />
                            </li>

                            <li className="li-terms-notice">
                              <p className="notice">
                                By clicking on Sign up, you agree to Shop's
                                &nbsp;
                                <Link to="/signup">
                                  Terms and Conditions of Use
                                </Link>
                                . <br />
                                <br />
                                To learn more about how Shop collects, uses,
                                shares and protects your personal data please
                                read Shop's &nbsp;
                                <Link to="/signup">Privacy Policy</Link>.
                              </p>
                            </li>
                          </ul>
                        </fieldset>
                        <button className="btn btn-green btn-block">
                          Sign Up
                        </button>
                      </form>
                      <p className="primary">
                        Already have an account?&nbsp;
                        <Link to="/login">Log in</Link>
                      </p>
                    </div>
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

export default Signup
