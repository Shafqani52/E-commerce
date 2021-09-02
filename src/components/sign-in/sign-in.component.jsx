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
        }
        document.body.addEventListener('click', this.handleShrink)
    }
    handleShrink = e => {
        const el = e.target;
        const label = document.getElementsByClassName('input-label');
        const inputField = document.getElementsByClassName('form-input');
        if(el.className === 'form-input') {
            el.nextElementSibling.classList.add('shrink')
        }else {
            for (let i = 0; i < label.length; i++) {
                label[i].classList.remove('shrink')
            }
            
            for (let i = 0; i < inputField.length; i++) {
                if(inputField[i].value) {
                    inputField[i].nextElementSibling.classList.add('shrink')
                }
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({password:'', email: ''})
    }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name] : value});
        const el = e.target;
        if(!el.value) {
            el.nextElementSibling.classList.remove('shrink')
        }
    }
    handleClick = e => {
        const input = e.target;
        input.nextElementSibling.classList.add('shrink');
    }
    render(){
        const {password, email} = this.state;
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
                            required
                        />
                        <FormInput 
                            name='password' 
                            type='password' 
                            value={password} 
                            handleChange={this.handleChange} 
                            handleClick={this.handleClick} 
                            label='Password' 
                            required
                        />
                        <CustomButton bg_color='btn-primary'>Sign In</CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;