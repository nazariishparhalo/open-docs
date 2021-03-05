import React from 'react'
import { NavListStyled } from './NavList.styled'
import SearchBar from './SearchBar'
import SignInBtn from './SignInBtn'

const NavList = ({isMobile}) => {
    return (
        <NavListStyled>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li>
                <SignInBtn />
            </li>
            {isMobile &&
                <li>
                    <SearchBar />
                </li>
            }
        </NavListStyled>
    )
}

export default NavList
