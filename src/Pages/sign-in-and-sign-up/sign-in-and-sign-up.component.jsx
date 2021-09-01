import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

export default function SignInAndSignUp(){
    return (
        <div className="user-form">
            <SignIn/>
            <SignUp/>
        </div>
    )
}