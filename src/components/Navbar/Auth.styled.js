import styled from "styled-components";

export const Auth = styled.div`
    padding: 20px;
    #create-new-account {
        float: right;
        color: #1F8BC0;
        background: none;
    }
`;

export const AuthContentWrapper = styled.div`
    margin: 40px 80px 50px 80px;
    @media (max-width: 768px) {
        margin: 20px 10px;
    }
`;

export const AuthTitle = styled.h3`
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #272F3B;
`;

export const AuthInput = styled.div`
    margin-top: 30px;
    label {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        color: #272F3B; 
    }
    input {
        height: 50px;
        width: 100%;
        margin-top: 5px;
        padding-left: 10px;
        border: 1px solid #D1D5DE;
        border-radius: 12px;
        &:focus {
            outline: none;
        }
    }
`;

export const AuthSubmitBtn = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    button {
        width: 170px;
        align-items: center;
    }
`;
