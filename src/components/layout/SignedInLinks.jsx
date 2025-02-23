import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../Store/Actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create"> New Project </NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log out1</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      return dispatch(signOut());
    }
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
