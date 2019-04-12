import React, { Component } from 'react'
import { Input } from '../../atoms/input/input'

class Signup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sing-up">
        <div className="l-signup-header" />
        <div className="l-signup-body">
          <div className="container">
            <div className="l-box-content">
              <div className="signup-select" />
              <div className="register">
                <div className="content">
                  <h2 className="center hdr-l" >Sign up with your email address</h2>
                  <form>
                      <ul>
                        <li>
                          <Input placeholder="Email" type="email" />
                        </li>
                      </ul>
                  </form>
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
