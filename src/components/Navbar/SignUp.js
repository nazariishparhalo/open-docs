import React from 'react'
import Modal from '../Modal'
import { Auth, AuthContentWrapper, AuthTitle, AuthInput, AuthSubmitBtn } from './Auth.styled';

const SignUp = ({isOpenSignUp, closeSignUp}) => {

    return (
        <>
            <Modal isOpen={isOpenSignUp} close={closeSignUp}>
                <Auth>
                    <AuthContentWrapper>
                        <AuthTitle>Create a free account below to upload, share, edit and send documents.</AuthTitle>
                        <form>
                            <AuthInput>
                                <div>
                                    <label>Nickname</label>
                                </div>
                                <div>
                                    <input type="text" placeholder="Nickname" />
                                </div>
                            </AuthInput>
                            <AuthInput>
                                <div>
                                    <label>Email Address</label>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address" />
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
                                <input type='submit' className="btn-blue" value="Sign Up"/>
                            </AuthSubmitBtn>
                        </form>
                    </AuthContentWrapper>
                </Auth>
            </Modal>
        </>
    )
}

export default SignUp
