import React, {useState} from 'react';
import LoginPageInformer from "../components/login-page-informer/LoginPageInformer";
import s from './Login.module.css'
import AuthForm from "../components/auth-form/AuthForm";

export enum LoginSteps {
    Auth = 'auth',
    Registration = 'registration',
    EmailCode = 'emailCode',
    Accessed = 'accessed',
}

const Login = () => {

    const [ step, setStep ] = useState(LoginSteps.Auth)

    return (
        <div className={s.container}>
            <LoginPageInformer
                step={step}
            />
            <AuthForm
                step={step}
                setStep={setStep}
            />
        </div>
    );
};

export default Login;
