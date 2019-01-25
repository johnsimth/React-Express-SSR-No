import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    signup: userData => dispatch(signup(userData))
  };
};

class AppSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      userName: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, vaule } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { emailAddress, userName, password } = this.state;
    if (userName && password) {
      //this.props.signup({emailAddress, userName, password});
    }
    this.setState({ emailAddress: '', userName: '', password: '' });
  }

  render() {
    const { userName, password, emailAddress } = this.state;
    return (
      <div className="row container">
        <div
          className="container col-lg-6 col-lg-offset-6 col-md-8 
        col-md-offset-4 col-sm-8 col-sm-offset-4 signup"
        >
          <h1>Please signup!</h1>
          <hr />
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="text"
                className="form-control"
                name="emailAddress"
                value={emailAddress}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Username*</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={userName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-success btn-block">
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AppSignUp);
