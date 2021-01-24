import React from 'react';
import styled from "styled-components";

import { AiOutlineRetweet } from 'react-icons/ai';

const Tweets = ({ tweet, status }) => {
    return (
        <>
        {tweet.retweetFrom && tweet.author ? (
            <RetweetBanner>
                <div class='retweetTextContainer'>
                    <AiOutlineRetweet class='retweetIcon'/>
                    <div class='retweetText'>{tweet.retweetFrom.displayName} Remeowed</div>
                </div>
                <div class='tweetContainer'>
                    <img class='userImg' src={tweet.author.avatarSrc}/>
                    <TweetBody>{tweet.author.displayName}</TweetBody>
                </div>
            </RetweetBanner>
            ):(
                <TweetBanner>
                    <div class='tweetAndImg'>
                        <img class='userImg' src={tweet.author.avatarSrc}/>
                        <TweetBody>{tweet.author.displayName}</TweetBody>
                    </div>
                    
                </TweetBanner>
            )}
        </>
        // <Banner>
        //     <img class='userImg' src={tweet.author.avatarSrc}/>
        //     <TweetBody>
        //         <h3>{tweet.author.displayName} <span class='handle'>@{tweet.author.handle}</span></h3>
        //     </TweetBody>
        // </Banner>
    )
}

const RetweetBanner = styled.div`
    /* border: green solid 2px; */
    border-bottom: 2px solid rgb(231,233,238);
    /* height: {tweet.retweetFrom ? 200px : 150px}; */
    height: 200px;
    display: flex;
    flex-direction: column;

    .retweetTextContainer{
        display: flex;
        margin: 7px 0 7px 38px;
    }
    .retweetIcon{
        font-size: 1.2em;
        /* margin-top: 10px; */
    }
    .retweetText{
        margin-left: 5px;
        font-size: 0.85em;
        font-weight: 400;
        color: rgb(112,112,113);
    }

    .tweetContainer{
        display: flex;
    }
    img{
        margin-left: 8px;
        margin-right: 10px;
    }
`;
const TweetBanner = styled.div`
    height: 180px;
    border-bottom: 2px solid rgb(231,233,238);

    img{
        margin-right: 10px;
    }
    .tweetAndImg{
        display: flex;
        margin-left: 8px;
        margin-top: 10px;
    }
`;
const TweetBody = styled.h3`
`;

export default Tweets;