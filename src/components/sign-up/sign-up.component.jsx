import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            password: '',
            email: '',
            confirmPassword: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({name: '',password:'', email: '', confirmPassword: ''})
    }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name] : value})
    }
    render(){
        const {name, password, email, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <div className="header-wrap">
                    <h3 className="title">I don't have an account</h3>
                    <p className="text">Sign up with your email and password</p>
                </div>
                <div className="form-wrap">
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='name' 
                            type='text' 
                            value={name} 
                            handleChange={this.handleChange} 
                            label='Display Name' 
                            required
                        />
                        <FormInput 
                            name='email' 
                            type='email' 
                            value={email} 
                            handleChange={this.handleChange} 
                            label='Email' 
                            required
                        />
                        <FormInput 
                            name='password' 
                            type='password' 
                            value={password} 
                            handleChange={this.handleChange} 
                            label='Password' 
                            required
                        />
                        <FormInput 
                            name='confirmPassword' 
                            type='password' 
                            value={confirmPassword} 
                            handleChange={this.handleChange} 
                            label='Confirm Password' 
                            required
                        />
                        <CustomButton>Sign Up</CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;