import React, { useState } from "react";
import styled from "styled-components";

// import { ActionBarContext } from './ActionBarContext';
import Action from './Action';
import TweetActionIcon from './TweetActionIcons';
import LikeButton from './LikeButton/LikeButton';

export const ActionBar = ({ isRetweetedByUser, numRetweets, isLikedByUser, numLikes }) => {
    const [currentNumLikes, setCurrentNumLikes] = useState(numLikes);
    const [currentNumRetweets, setCurrentNumRetweet] = useState(numRetweets);
    const [isLiked, setIsLiked] = useState(isLikedByUser);
    const [isRetweeted, setIsRetweeted] = useState(isRetweetedByUser);


    const handleToggleRetweet = () => {
        if(isRetweeted === false) {
            setIsRetweeted(true);
            setCurrentNumRetweet(currentNumRetweets + 1);
        } else{
            setIsRetweeted(false);
            setCurrentNumRetweet(currentNumRetweets - 1);
        }
    };
    const handleToggleLike = () => {
        if(isLiked === false) {
            setIsLiked(true);
            setCurrentNumLikes(currentNumLikes + 1);
        } else {
            setIsLiked(false);
            setCurrentNumLikes(currentNumLikes - 1);
        }
    };

    return(
        <Wrapper>
            <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
        </Action>
        <ActionWithNumber>
            <Action color="rgb(23, 191, 99)" size={40} onClick={handleToggleRetweet}> {/*onClick={handleToggleRetweet}*/}
                <TweetActionIcon
                kind="retweet"
                color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
                />
            </Action>
            <div className='numOfRetweet'>{currentNumRetweets}</div>
        </ActionWithNumber>
        <ActionWithNumber>
            <Action  color="rgb(224, 36, 94)" size={40} onClick={handleToggleLike}>
                <LikeButton isLiked={isLiked} />
            </Action>
            <div className='numOfLike'>{currentNumLikes}</div>
        </ActionWithNumber>
        <Action color="rgb(27, 149, 224)" size={40}>
            <TweetActionIcon kind="share" />
        </Action>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 15px;
`;

const ActionWithNumber = styled.div`
    display: flex;
    align-items: center;

    div{
        margin: 0;
    }
`;
