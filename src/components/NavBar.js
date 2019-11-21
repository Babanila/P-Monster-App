import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavBarDiv = styled.div`
    width: 100%;
    height: 10%;
    margin-bottom: 5em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: white;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    overflow: hidden;
`;

const NavBarUl = styled.ul`
    width: 15%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavBarLi = styled.li`
    font-size: 30px;
`;

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
