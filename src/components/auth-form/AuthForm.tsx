import React, {FC} from 'react';
import s from './AuthForm.module.css'
import {LoginSteps} from "../../pages/Login";
import Auth from "./steps/Auth";
import Registration from "./steps/Registration";
import EmailCode from "./steps/EmailCode";
import Accessed from "./steps/Accessed";


export type AuthFormProps = {
    step: LoginSteps
    setStep: (step: LoginSteps) => void
}

const AuthForm: FC<AuthFormProps> = (props) => {

    const step = () => {
        switch (props.step) {
            case LoginSteps.Auth:
                return <Auth setStep={props.setStep}/>
            case LoginSteps.Registration:
                return <Registration setStep={props.setStep}/>
            case LoginSteps.EmailCode:
                return <EmailCode setStep={props.setStep}/>
            case LoginSteps.Accessed:
                return <Accessed setStep={props.setStep}/>
        }
    }

    return (
        <div className={s.container}>
            {step()}
        </div>
    )
};

export default AuthForm;
