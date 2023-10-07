import React, {FC} from 'react';
import s from './index.module.css'
import {LoginSteps} from "../../../pages/Login";

export type AccessedProps = {
    setStep: (step: LoginSteps) => void
}

const Accessed: FC<AccessedProps> = () => {
    return (
        <div>

        </div>
    );
};

export default Accessed;
