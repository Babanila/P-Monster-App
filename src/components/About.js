import React from "react";
import styled from "@emotion/styled";

const AboutDiv = styled.div`
    margin-top: 7rem;
    width: 100%;
`;

const SectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    color: #000000;
    font-size: 1.5rem;
`;

const AboutH3 = styled.h3``;

const AboutLi = styled.li`
    width: 60%;
    padding-left: 25%;
    font-size: 1.5rem;
`;

const About = () => {
    return (
        <AboutDiv>
            <SectionDiv>
                <AboutH3>Components (Backend) </AboutH3>
                <AboutLi>Create restful API for the frontend web application.</AboutLi>
                <AboutLi> Uses MongoDb Atlas</AboutLi>
                <AboutLi>Uses Routing</AboutLi>
            </SectionDiv>

            <SectionDiv>
                <AboutH3>The functionalities(Frontend)</AboutH3>
                <AboutLi> Display all the Hacker news top stories available</AboutLi>
                <AboutLi>Filter stories using date from and date to</AboutLi>
                <AboutLi> Display single story details by click on it</AboutLi>
            </SectionDiv>
        </AboutDiv>
    );
};

export default About;
