import React from "react";
import styled from "@emotion/styled";

const DataLoading = styled.div`
    width: 80%;
    height: 50%;
    margin: 0 auto;
    margin-top: 5em;
    padding: 0 auto;
    font-size: 2rem;
    color: #000000;
    text-align: center;
`;

const Loading = () => <DataLoading>Loading...</DataLoading>;

export default Loading;
