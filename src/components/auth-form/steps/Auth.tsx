import React, {FC} from 'react';
import {LoginSteps} from "../../../pages/Login";
import { Input } from "@material-ui/core";


export type AuthProps = {
    setStep: (step: LoginSteps) => void
}

const Auth: FC<AuthProps> = (props) => {
    return (
        <div>
            <Input/>
        </div>
    );
};

export default Auth;
