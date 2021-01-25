import React from "react";
import styled from "styled-components";

import { ActionBarContext } from './ActionBarContext';
import Action from './Action';
import TweetActionIcon from './TweetActionIcons';
import LikeButton from './LikeButton/LikeButton';

export const ActionBar = ({}) => {
    const {
        isLikedByCurrentUser,
        setIsLikedByCurrentUser,
        isRetweetedByCurrentUser,
        setIsRetweetedByCurrentUser,
        handleToggleLike,   
    } = React.useContext(ActionBarContext);

    return(
        <Wrapper>
            <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
        </Action>
        <Action color="rgb(23, 191, 99)" size={40} > {/*onClick={handleToggleRetweet}*/}
            <TweetActionIcon
            kind="retweet"
            color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            />
        </Action>
        <Action color="rgb(224, 36, 94)" size={40} onClick={handleToggleLike}>
            <LikeButton isLiked={isLikedByCurrentUser} />
        </Action>
        <Action color="rgb(27, 149, 224)" size={40}>
            <TweetActionIcon kind="share" />
        </Action>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    display: flex;
    justify-content: space-evenly;
`;