import React, { FC } from 'react';
import s from './LoginPageInformer.module.css'
import { LoginSteps } from "../../pages/Login";

export type LoginPageInformerProps = {
    step: LoginSteps
}

const LoginPageInformer: FC<LoginPageInformerProps> = (props) => {

    return (
        <div className={s.container}>
            <div>

            </div>
        </div>
    );
};

export default LoginPageInformer;
