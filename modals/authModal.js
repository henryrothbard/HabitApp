import React, { useContext } from "react";
import ModalWrapper from "./wrapper";

function AuthModalWrapper({children}) {
    const styles = getStyles();
    return (
        <ModalWrapper>
            {typeof children === 'function' 
                ? children({ styles }) 
                : React.cloneElement(children, { styles })
            }
        </ModalWrapper>
    );
}
export function LoginModal({}) {
    return (
        <AuthModalWrapper>

        </AuthModalWrapper>
    );
}

export function SignupModal({}) {
    return (
        <AuthModalWrapper>

        </AuthModalWrapper>
    );
}