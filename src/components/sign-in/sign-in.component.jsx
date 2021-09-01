import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            password: '',
            email: '',
            shrink: false
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({password:'', email: ''})
    }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name] : value})
    }
    handleClick = e => {
        const input = e.target;
        input.classList.add('shrink')
    }
    render(){
        const {password, email,shrink} = this.state;
        return (
            <div className="sign-in">
                <div className="header-wrap">
                    <h3 className="title">I already have an account</h3>
                    <p className="text">Sign in with your email and password</p>
                </div>
                <div className="form-wrap">
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='email' 
                            type='email' 
                            value={email} 
                            handleChange={this.handleChange} 
                            handleClick={this.handleClick} 
                            label='Name' 
                            shrink={shrink}
                            required
                        />
                        <FormInput 
                            name='password' 
                            type='password' 
                            value={password} 
                            handleChange={this.handleChange} 
                            handleClick={this.handleClick} 
                            label='Password' 
                            shrink={shrink}
                            required
                        />
                        <CustomButton>Submit Form</CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;