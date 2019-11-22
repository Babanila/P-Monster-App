import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavBarDiv = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 5em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    overflow: hidden;
`;

const NavBarUl = styled.ul`
    width: 15%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (min-width: 768px) and (max-width: 1200px) {
        width: 25%;
        font-size: 1.5rem;
    }
    @media (min-width: 401px) and (max-width: 767px) {
        width: 40%;
        font-size: 1.2rem;
    }
    @media (min-width: 0px) and (max-width: 400px) {
        display: none;
    }
`;

// font-size: 30px;
const NavBarLi = styled.li``;

const NavBarLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover {
        color: blue;
    }
    &:active {
        color: yellow;
    }
`;

const NavBarLogo = styled.div`
    margin-left: 1rem;
    font-family: "serif";
`;

const NavBar = () => {
    return (
        <NavBarDiv>
            <NavBarLogo>
                <h1>P. Monster</h1>
            </NavBarLogo>
            <NavBarUl>
                <NavBarLi>
                    <NavBarLink to="/">Home</NavBarLink>
                </NavBarLi>
                <NavBarLi>
                    <NavBarLink to="/about">About</NavBarLink>
                </NavBarLi>
            </NavBarUl>
        </NavBarDiv>
    );
};

export default NavBar;
