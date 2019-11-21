import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useDeepCompareEffect from "use-deep-compare-effect";
import styled from "@emotion/styled";
import ErrorComp from "./ErrorComp";
import Loading from "./Loading";
import { timeConverter } from "./Helpers";

const StoryDiv = styled.div`
    margin-top: 5em;
    min-width: 320px;
    overflow: hidden;
`;

const StoryHeading = styled.div`
    width: 100%;
    background: white;
    font-size: 1.2rem;
`;

const DetailsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    justify-content: center;
    align-content: center;
    color: black;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: black;
    font-size: 1.3rem;
    font-family: "Noe Display";
    font-weight: bold;
    padding: 0.5em;
`;

const OuterDetails = styled.span`
    margin-left: 0;
`;

const InnerDetails = styled.span`
    margin-left: 1em;
    color: blue;
`;

const OuterDetails2 = styled.span`
    color: black;
`;

const InnerDetails2 = styled.span`
    color: blue;
    margin-top: 1em;
    margin-left: -1em;
`;

const ButtonDiv = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    background-color: #ffffff;
    font-size: 20px;
    justify-content: center;
    margin-top: 2em;
`;

const Button = styled.button`
    min-width: 60px;
    background-color: black;
    color: #ffffff;
    font-size: 20px;
    align-self: center;
    border-radius: 5px;
    padding: 10px;
    margin-left: 1em;
    &:hover {
        cursor: pointer;
        background-color: red;
    }
`;

function StoryDetails(props) {
    const { id } = props.match.params;

    const [storyDetails, setStoryDetails] = useState({});
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState({ message: "" });

    // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
    useDeepCompareEffect(() => {
        getStoryDetails(id);
    }, [storyDetails, id]);

    // Fetch data from the MongoDb database
    const getStoryDetails = async id => {
        const url = `http://localhost:5000/stories/single_story/${id}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setStoryDetails(data[0]);
        } catch (e) {
            setError(e);
        }
    };

    // Handler to Main page or root
    const handleBack = event => {
        event.preventDefault();
        setRedirect(true);
    };

    // Output handler
    const showStoryDetails = item => (
        <DetailsWrapper className="root-details">
            {Object.entries(item).map(([k, value], i) => {
                // Replacing null value with null string
                if (value == null) value = "null";

                // Converting the time to UTC
                if (k === "time") value = timeConverter(value);

                return value && typeof value !== "object" ? (
                    <Details key={i} className="details" data-label={k}>
                        <OuterDetails className="outer-details">{k}:</OuterDetails>
                        <InnerDetails className="inner-details">{value}</InnerDetails>
                    </Details>
                ) : (
                    <Details key={i} className="details" data-label={k}>
                        <OuterDetails2 className="outer-details2">{k}:</OuterDetails2>
                        <InnerDetails2 className="inner-details2">
                            {showStoryDetails(value)}
                        </InnerDetails2>
                    </Details>
                );
            })}
        </DetailsWrapper>
    );

    return (
        <StoryDiv className="table-row">
            <StoryHeading className="weather-h2">
                <h2>The Story details</h2>
            </StoryHeading>
            {error.message.length !== 0 ? (
                <ErrorComp data={error} />
            ) : Object.keys(storyDetails).length === 0 ? (
                <Loading />
            ) : redirect ? (
                <Redirect to={`/`} />
            ) : (
                showStoryDetails(storyDetails)
            )}
            <ButtonDiv className="button-group">
                <Button className="back-button" onClick={handleBack}>
                    Back
                </Button>
            </ButtonDiv>
        </StoryDiv>
    );
}

export default StoryDetails;
