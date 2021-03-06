import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from "react-router"; 

// Comment this back in after you have built the login functionality

import { logout } from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar)); 
