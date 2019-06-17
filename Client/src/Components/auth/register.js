import React, {Component} from 'react';
import {connect} from "react-redux";
import {registeruser} from '../../actions/authActions';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            address_1:'',
            address_2:'',
            city:'',
            state:'',
            zipCode:'',
            county:'',
            usertype:'',
            password:'',
            password2:'',
            error : {}
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.error){
            this.setState({
                error:nextProps.error
            })
        }
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }


    onChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      };
    onSubmit = (e) => {
        e.preventDefault();
        const newUser ={
            email:this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address_1:this.state.address_1,
            address_2:this.state.address_2,
            city:this.state.city,
            state:this.state.state,
            zipCode:this.state.zipCode,
            county:this.state.county,
            usertype:this.state.usertype,
            password:this.state.password,
            password2:this.state.password2

        };


        this.props.registeruser(newUser,this.props.history);
      };
    render() {
        const {error} = this.state ;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your Account
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.firstName
                                        })}
                                        placeholder="First Name"
                                        id="firstName"
                                        onChange={this.onChange}
                                    />
                                    {error.firstName && (
                                        <div className="invalid-feedback">{error.firstName}</div>
                                    )}
                                </div>
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
                                    <small className="form-text text-muted">
                                        This site uses Gravatar so if you want a profile image, use
                                        a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.lastName
                                        })}
                                        placeholder="LastName"
                                        id="lastName"
                                        onChange={this.onChange}
                                    />
                                    {error.lastName && (
                                        <div className="invalid-feedback">{error.lastName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.address_1
                                        })}
                                        placeholder="Address"
                                        id="address_1"

                                        onChange={this.onChange}
                                    />
                                    {error.address_1 && (
                                        <div className="invalid-feedback">{error.address_1}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.address_2
                                        })}
                                        placeholder="Address"
                                        id="address_2"

                                        onChange={this.onChange}
                                    />
                                    {error.address_2 && (
                                        <div className="invalid-feedback">{error.address_2}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.city
                                        })}
                                        placeholder="City"
                                        id="city"

                                        onChange={this.onChange}
                                    />
                                    {error.city && (
                                        <div className="invalid-feedback">{error.city}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.state
                                        })}
                                        placeholder="State"
                                        id="state"

                                        onChange={this.onChange}
                                    />
                                    {error.state && (
                                        <div className="invalid-feedback">{error.state}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.zipCode
                                        })}
                                        placeholder="ZipCode"
                                        id="zipCode"

                                        onChange={this.onChange}
                                    />
                                    {error.zipCode && (
                                        <div className="invalid-feedback">{error.zipCode}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.county
                                        })}
                                        placeholder="County"
                                        id="county"

                                        onChange={this.onChange}
                                    />
                                    {error.county && (
                                        <div className="invalid-feedback">{error.county}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <select

                                        className={classnames('form-control form-control-lg browser-default', {
                                            'is-invalid': error.usertype
                                        })}
                                        placeholder="UserType"
                                        id="usertype"
                                        value={this.state.usertype}
                                        onChange={this.onChange}>
                                        <option value="choose your option">Choose your option</option>
                                        <option value="customer">Customer</option>
                                        <option value="manager">Manager</option>
                                    </select>

                                    {error.usertype && (
                                        <div className="invalid-feedback">{error.usertype}</div>
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
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': error.password2
                                        })}
                                        placeholder="Confirm Password"
                                        id="password2"

                                        onChange={this.onChange}
                                    />
                                    {error.password2 && (
                                        <div className="invalid-feedback">{error.password2}</div>
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

const mapStateToProps = (state) => {
 return {
     auth: state.auth,
     error:state.error
 }};
  Register.propTypes = {
      registeruser:PropTypes.func.isRequired,
      auth:PropTypes.object.isRequired,
      error:PropTypes.object.isRequired
  };
export default connect(mapStateToProps,{registeruser})(withRouter(Register));

