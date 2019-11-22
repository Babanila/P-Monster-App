import React from "react";
import styled from "@emotion/styled";

const NotFoundDiv = styled.div`
    width: 100%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 0 auto;
    font-size: 2rem;
    color: black;
    text-align: center;
`;

const Message = styled.span`
    text-align: center;
    padding: 1em;
    font-size: 1.5rem;
`;

const NotFoundPage = props => {
    return (
        <NotFoundDiv>
            <Message>Page Not Found</Message>
        </NotFoundDiv>
    );
};

export default NotFoundPage;
