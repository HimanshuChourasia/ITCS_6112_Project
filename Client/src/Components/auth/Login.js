import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error:{}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.error) {
      this.setState({ error: nextProps.error });
    }
  }


  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email:this.state.email,
      password:this.state.password
    };
    this.props.loginUser(userData);
  };
    render() {
      const {error} = this.state ;
      return (
            <div className="login">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <p className="lead text-center">
                      Sign in to your  account
                    </p>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                            type="email"
                            className={classnames('form-control form-control-lg', {
                              'is-invalid': error.email
                            })}
                            placeholder="Email Address"
                            id="email"

                            onChange={this.onChange}
                        />
                        {error.email && (
                            <div className="invalid-feedback">{error.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                            type="password"
                            className={classnames('form-control form-control-lg', {
                              'is-invalid': error.password
                            })}
                            placeholder="Password"
                            id="password"

                            onChange={this.onChange}
                        />
                        {error.password && (
                            <div className="invalid-feedback">{error.password}</div>
                        )}
                      </div>
                      <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, { loginUser })(Login);








