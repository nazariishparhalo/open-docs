import React from 'react'
import {ModalStyled} from "./Modal.styled"

const Modal = ({ isOpen, close, children }) => {

    const isOpenClassName = isOpen ? 'd-block' : 'd-none';

    return (
        <div className={isOpenClassName} onClick={close}>
            <ModalStyled>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </ModalStyled>
        </div>
    );
};

export default Modal