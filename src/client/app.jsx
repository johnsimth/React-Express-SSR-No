import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import LogIn from './auth/login';
import SignUp from './auth/signup';
import Home from './components/home';
import UserManager from './components/user_manage';
import PrivateRoute from './components/privateroute';
import { logout } from './redux/actions/index';

const mapStateToProps = state => {
  return { loginFlag: state.resData[0].loginFlag };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loginFlag } = this.props;
    return (
      <Router>
        <div className="firstPg container">
          <div className="navbar">
            <div className="container-fluid">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  {loginFlag ? (
                    <Link to="/" onClick={this.props.logout}>
                      log out
                    </Link>
                  ) : (
                    <Link to="/login">log in</Link>
                  )}
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/usermanage">UserManage</Link>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route
              path="/login"
              render={props => (loginFlag ? <Redirect to="/usermanage" /> : <LogIn {...props} />)}
            />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/usermanage" component={UserManager} userInfo={loginFlag} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
