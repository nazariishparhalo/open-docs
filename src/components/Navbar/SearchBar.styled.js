import styled from "styled-components";

export const SearchBarStyled = styled.div`
    display:flex;
    flex-direction:row;

    width: 400px;
    height: 40px;

    border: none;
    border-radius: 12px;
    
    font-size: 14px;
    color: #7E899F;

    @media (max-width: 992px) {
        width: 70%;
    }

    input {
        flex-grow:2;
        border:none;
        border-radius: 0 12px 12px 0;
        &:focus {
            outline: none;
        }
    }
    button {
    padding: 0 10px 0 15px;
    border-radius: 12px 0 0 12px;
    background: white;
    }
`;