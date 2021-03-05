import React from 'react'
import { Icon } from 'rsuite'
import { SearchBarStyled } from './SearchBar.styled'

const SearchBar = () => {
    return (
        <SearchBarStyled>
            <button type="submit"><Icon icon="search"/></button>
            <input placeholder="Search"/>
        </SearchBarStyled>
    )
}

export default SearchBar
