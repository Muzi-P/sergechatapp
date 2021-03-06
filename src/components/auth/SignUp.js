import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { signUp } from '../../store/actions/authActions';

export class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
    }
    handleSignUp = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
        document.getElementById("signup-form").reset()
    }
    
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        if (this.state.redirect) return <Redirect to='/signin' />
        return (
            <div className="signup-container">
                <div className="row">
                    <div className="col s5 offset-s5 ">
                        <div className="container">
                            <form  className="white col s6" id="signup-form">
                                <h5 className="grey-next text-darken-3">Sign Up</h5>
                                <div className="input-field">
                                    <label htmlFor="firstName">FirstName</label>
                                    <input type="text" id="firstName" onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="lastName">LastName</label>
                                    <input type="text" id="lastName" onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={this.handleChange} />
                                </div>
                                <div className="input-field center ">
                                    <button id='signup' className="btn teal lighten-3 s-depth-0" onClick={this.handleSignUp}>Sign Up
                                    </button>
                                    <button id='login' className="btn teal lighten-3 s-depth-0" onClick={this.handleLogin}>Login</button>
                                </div>
                                <div className="rd-text center">
                                    {authError ? <p>{authError}</p> : null}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
