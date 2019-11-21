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
`;

const AboutH3 = styled.h3``;

const AboutLi = styled.li`
    width: 60%;
    padding-left: 25%;
`;

const About = () => {
    return (
        <AboutDiv>
            <SectionDiv>
                <AboutH3>Components </AboutH3>
                <AboutLi> Header: Shows the title of the current page.</AboutLi>
                <AboutLi>Drawer: It&apos;s used to navigate through the web application.</AboutLi>
                <AboutLi>Main Page: The content goes here.</AboutLi>
            </SectionDiv>

            <SectionDiv>
                <AboutH3>The functionalities</AboutH3>
                <AboutLi> Display all the weather available</AboutLi>
                <AboutLi>
                    Search the weather list using location city name e.g alska, ca etc.
                </AboutLi>
                <AboutLi> Select a single location by click on it</AboutLi>
            </SectionDiv>
        </AboutDiv>
    );
};

export default About;
