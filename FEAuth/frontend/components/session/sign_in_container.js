import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SignIn from './sign_in';

const mapDispatchToProps = dispatch => ({
  loginUser: formUser => dispatch(login(formUser)),
});

export default connect(null, mapDispatchToProps)(SignIn);
