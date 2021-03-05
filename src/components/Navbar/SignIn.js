import React from 'react'
import Modal from '../Modal'
import { Auth, AuthContentWrapper, AuthTitle, AuthInput, AuthSubmitBtn } from './Auth.styled';

const SignIn = ({isOpenSignIn, closeSignIn, openSignUp}) => {


    const onClickOpenSignUp = () => {
        closeSignIn();
        openSignUp();
    }

    return (
        <>
            <Modal isOpen={isOpenSignIn} close={closeSignIn}>
                <Auth>
                    <button id="create-new-account" onClick={onClickOpenSignUp}>Create a free account</button>
                    <AuthContentWrapper>
                        <AuthTitle>Sign In below to upload, share, edit and send documents.</AuthTitle>
                        <form>
                            <AuthInput>
                                <div>
                                    <label>Email Address</label>
                                </div>
                                <div>
                                    <input type="text" placeholder="Email Address" />
                                </div>
                            </AuthInput>
                            <AuthInput>
                                <div>
                                    <label>Password</label>
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" />
                                </div>
                            </AuthInput>
                            <AuthSubmitBtn>
                                <input type='submit' className="btn-blue" value="Sign In"/>
                            </AuthSubmitBtn>
                        </form>
                    </AuthContentWrapper>
                </Auth>
            </Modal>
        </>
    )
}

export default SignIn
