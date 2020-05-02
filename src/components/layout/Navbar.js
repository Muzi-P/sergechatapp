import React from 'react';
import { connect } from "react-redux";
import SignedInLInks from './SignedInLInks';

const Navbar = ({ profile }) => {

    return (
        <div className="nav">
            <nav className="nav-wrapper teal lighten-1">
                <div className="container">
                <SignedInLInks profile={profile} />
                </div>
            </nav>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)