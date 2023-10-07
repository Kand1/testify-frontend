import React, {FC} from 'react';
import s from './index.module.css'
import {LoginSteps} from "../../../pages/Login";

export type RegistrationProps = {
    setStep: (step: LoginSteps) => void
}

const Registration: FC<RegistrationProps> = () => {
    return (
        <div>

        </div>
    );
};

export default Registration;
