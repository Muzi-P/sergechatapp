import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

export class SignIn extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        document.getElementById("signin-form").reset()
    }
    handleSignUp = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        if (this.state.redirect) return <Redirect to='/signup' />
        return (
            <div className="sigin-container">
                <div className="row">
                    <div className="col s5 offset-s5 ">
                        <div className="container">
                            <form className="white col s6" id="signin-form">
                                <h5 className="grey-next text-darken-3">Sign in</h5>
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={this.handleChange} />
                                </div>
                                <div className="input-field center">
                                    <button id='login' className="btn teal lighten-3 s-depth-0" onClick={this.handleLogin}>Login</button>
                                    <button id='signup' className="btn teal lighten-3 s-depth-0" onClick={this.handleSignUp}>Sign Up
                                    </button>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
