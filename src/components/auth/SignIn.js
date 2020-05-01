import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        document.getElementById("signin-form").reset()
    }
    render() {
        return (
            <div className="row">
                <div className="col s5 offset-s5 ">
                    <div className="container">
                        <form onSubmit={this.handleSubmit} className="white col s6" id="signin-form">
                            <h5 className="grey-next text-darken-3">Sign in</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field ">
                                <button className="btn teal lighten-3 s-depth-0">Login</button>
                                <div className="rd-text center">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
