import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import styled from "@emotion/styled";
import { timeConverter } from "./Helpers";
import Loading from "./Loading";

const OutputCard = styled.div`
    width: 270px;
    margin: 1rem 1rem 1rem 1rem;
    background: #f6f6f6;
    border: 1px solid #f6f6f6;
    &: hover {
        border: 1px solid blue;
    }
`;

const CardPicture = styled.img`
    display: block;
    border: 0;
    width: 100%;
    height: auto;
`;

const CardContent = styled.div`
    padding: 1.4em;
`;

const CardTitle = styled.div`
    color: blue;
    align-text: center;
`;

const CardLink = styled(Link)`
    color: #000000;
    text-decoration: none;
`;

const CardContentKey = styled.span`
    color: black;
    font-weight: bold;
`;

const CardContentValue = styled.span`
    color: blue;
`;

const Output = ({ data }) => {
    return data.map((item, i) => (
        <LazyLoad key={i} placeholder={<Loading />}>
            <CardLink to={`story/${item.id}`} key={item.id} id="link-cols">
                <OutputCard className="card">
                    <picture className="card-picture">
                        <CardPicture src="https://wallpaperbro.com/img/438821.jpg" alt="weather" />
                    </picture>
                    <CardContent key={item.id}>
                        <CardTitle>
                            <h3 data-setid="item-id">{item.title}</h3>
                        </CardTitle>

                        <p>
                            <CardContentKey>Id: </CardContentKey>
                            <CardContentValue>{item.id} </CardContentValue>
                        </p>

                        <p>
                            <CardContentKey>By: </CardContentKey>
                            <CardContentValue>{item.by} </CardContentValue>
                        </p>

                        <p>
                            <CardContentKey>Score: </CardContentKey>
                            <CardContentValue>{item.score}</CardContentValue>
                        </p>

                        <p>
                            <CardContentKey>Time: </CardContentKey>
                            <CardContentValue>{timeConverter(item.time)}</CardContentValue>
                        </p>
                    </CardContent>
                </OutputCard>
            </CardLink>
        </LazyLoad>
    ));
};

export default Output;
