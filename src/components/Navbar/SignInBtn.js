import React, { useCallback, useState } from 'react'
import SignIn from './SignIn';
import { SignInBtnStyled } from './SignInBtn.styled';
import SignUp from './SignUp';


const SignInBtn = () => {

    const [isOpenSignIn, setIsOpenSignIn] = useState(false);
    const [isOpenSignUp, setIsOpenSignUp] = useState(false);

    const openSignIn = useCallback(() => {setIsOpenSignIn(true)}, []);
    const closeSignIn = useCallback(() => {setIsOpenSignIn(false)}, []);

    const openSignUp = useCallback(() => {setIsOpenSignUp(true)}, []);
    const closeSignUp = useCallback(() => {setIsOpenSignUp(false)}, []);

    return (
        <>
            <SignInBtnStyled type="button" className="nav-item-signin" onClick={openSignIn}>Sign in</SignInBtnStyled>
            <SignIn isOpenSignIn={isOpenSignIn} closeSignIn={closeSignIn} openSignUp={openSignUp} />
            <SignUp isOpenSignUp={isOpenSignUp}  closeSignUp={closeSignUp} closeSignIn={closeSignIn} />
        </>
    )
}

export default SignInBtn
