import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled (Box)`
background:#fff;
width: 38%;
border-radius : 2px;
margin-left: 60px;
display:flex;


`;

const InputSearchBase = styled (InputBase)`
padding-left: 20px;
width: 100%;
font-size:unset;

`;

const SearchIconWrapper = styled (Box)`
color:blue;
padding:5px;

`;

//{ posts, setSearchResults }
const Search = () => {
    

    //const {filterDispatch,search} = useFilter();
    const filterDispatch = useDispatch();

    const handleSearchChange = (e) => {
        debugger;
        
        //const check = e.target.checked
        
            filterDispatch({

                type: "SEARCH",
                payload: e.target.value
            })
        }


    return(
        <>
        <SearchContainer>
            <InputSearchBase placeholder='Search for products and brands' onChange={(e)=>handleSearchChange(e)}>
            </InputSearchBase>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
        </>
        
    )
}
export default Search;
