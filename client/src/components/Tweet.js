import React from 'react';
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg"; //To remove

const Tweet = ({ tweet, status }) => {
    return (
        <Banner>TWEET{tweet.author.avatarSrc}</Banner>
    )
}

const Banner = styled.div`
    border: green solid 2px;
    height: 150px;
`;

export default Tweet;