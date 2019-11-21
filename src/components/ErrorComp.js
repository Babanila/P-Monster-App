import React from "react";
import styled from "@emotion/styled";

const ErrorDiv = styled.div`
    width: 80%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 0 auto;
    font-size: 2rem;
    color: red;
    text-align: center;
`;

const ErrorMessage = styled.span`
    text-align: center;
    padding: 1em;
    font-size: 1.5rem;
`;

const ErrorComp = props => {
    return (
        <ErrorDiv>
            Error:
            <ErrorMessage data-testid="errorMessage" className="error-message">
                {props.data.message}
            </ErrorMessage>
        </ErrorDiv>
    );
};

export default ErrorComp;
