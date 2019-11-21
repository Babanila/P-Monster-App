import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import useDeepCompareEffect from "use-deep-compare-effect";
import Output from "./Output";
import Search from "./Search";
import Loading from "./Loading";
import ErrorComp from "./ErrorComp";

const MainDiv = styled.div`
    width: 100%;
    margin-top: 5em;
`;

const SortDiv = styled.div`
    width: 100%;
    height: 6%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-text: center;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    top: 4em;
    left: 0;
    font-size: 1.2rem;
    background-color: white;
`;

const Span = styled.span`
    margin-right: 1em;
    font-size: 1.2rem;
    font-weight: bold;
`;

const ResultDiv = styled.div`
    margin-top: 9em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
`;

function MainView() {
    const [storyList, setStoryList] = useState([]);
    const [filterStory, setFilterStory] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [error, setError] = useState({ message: "" });

    // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
    useDeepCompareEffect(() => {
        getAllStories(storyList);
    }, [storyList]);

    // Fetch stories from the MongoDb
    const getAllStories = async () => {
        const url = `http://localhost:5000/stories`;
        try {
            const { data } = await axios(url);
            setStoryList(data);
        } catch (e) {
            setError(e);
        }
    };

    // Filter  stories by date
    const FilterStories = async (startDate, endDate) => {
        const url = `http://localhost:5000/stories/date/${startDate}/${endDate}`;
        try {
            const { data } = await axios(url);
            setFilterStory(data);
        } catch (e) {
            setError(e);
        }
    };

    // Handler for user input query search
    const handleInputChange = event => {
        const { name, value } = event.target;
        name === "start-date" ? setStartDate(value) : setEndDate(value);
    };

    // Input date submit handler
    const handleSubmit = event => {
        event.preventDefault();
        FilterStories(startDate, endDate);
    };

    return (
        <MainDiv>
            <SortDiv>
                <Span>Sort by Date:</Span>
                <Search
                    startDate={startDate}
                    endDate={endDate}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </SortDiv>

            {storyList.length === 0 && <Loading />}

            {error.message.length !== 0 ? (
                <ErrorComp data={error} />
            ) : (
                <ResultDiv>
                    {error.message.length === 0 && filterStory.length !== 0 ? (
                        <Output data={filterStory} />
                    ) : (
                        <Output data={storyList} />
                    )}
                </ResultDiv>
            )}
        </MainDiv>
    );
}

export default MainView;
