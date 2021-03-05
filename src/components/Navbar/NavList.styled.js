import styled from "styled-components";

export const NavListStyled = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
        margin: 0;
        padding: 0 0 20px 0;
        width: 100%;
        flex-direction: column;
        position: fixed;
        top: 80px;
        left: 0;
        
        border-bottom: 1px solid #272F3B;
    }
    li {
        margin: 0 1vw;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        color: #272F3B;

        @media (max-width: 992px) {
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
            margin: 5px 0;
            font-size: 20px;
        }


        a {
            text-decoration: none;
            color: #272F3B;
        }
    }
`;