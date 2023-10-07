import React, {FC} from 'react';
import s from './index.module.css'
import {LoginSteps} from "../../../pages/Login";

export type EmailCodeProps = {
    setStep: (step: LoginSteps) => void
}

const EmailCode: FC<EmailCodeProps> = () => {
    return (
        <div>

        </div>
    );
};

export default EmailCode;
