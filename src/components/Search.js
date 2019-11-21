import React from "react";
import styled from "@emotion/styled";

const SearchDiv = styled.form`
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (min-width: 520px) and (max-width: 660px) {
        width: 80%;
    }
    @media (min-width: 0px) and (max-width: 519px) {
        display: none;
    }
`;
const SearchInput = styled.input`
    width: 12em;
    font-size: 1rem;
    padding: 5px;
    border: 1px solid gray;
`;

const SearchButton = styled.button`
    width: 4em;
    font-size: 1rem;
    padding: 5px;
    cursor: pointer;
    background-color: green;
    outline: none;
    border: none;
    color: white;
    &:hover {
        background-color: blue;
    }
`;

const Search = props => {
    return (
        <SearchDiv onSubmit={props.onSubmit}>
            <SearchInput
                name="start-date"
                placeholder="Start date ..."
                value={props.startDate}
                onChange={props.onChange}
            />

            <SearchInput
                name="end-date"
                placeholder="End date ..."
                value={props.endDate}
                onChange={props.onChange}
            />
            <SearchButton type="submit">Search</SearchButton>
        </SearchDiv>
    );
};

export default Search;
