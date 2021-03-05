import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-content {
        width: 600px;
        background-color: #fff;
        border-radius: 15px;
        @media (max-width: 768px) {
            width: 80%;
        }
    }
`;