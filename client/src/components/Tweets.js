import React from 'react';
import styled from "styled-components";

import Moment from 'react-moment';
import { AiOutlineRetweet } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';

const Tweets = ({ tweet, status }) => {
    return (
        // <>
        // {tweet.retweetFrom && tweet.author ? (
        //     <RetweetBanner>
        //         <div class='retweetTextContainer'>
        //             <AiOutlineRetweet class='retweetIcon'/>
        //             <div class='retweetText'>{tweet.retweetFrom.displayName} Remeowed</div>
        //         </div>
        //         <div class='tweetContainer'>
        //             <img class='userImg' src={tweet.author.avatarSrc}/>
        //             <div>
        //                 <Handle>{tweet.author.displayName}</Handle>
        //                 <div>{tweet.status}</div>
        //             </div>
                    
        //         </div>
        //     </RetweetBanner>
        //     ):(
                // <TweetBanner>
                //     <div class='tweetAndImg'>
                //         <img class='userImg' src={tweet.author.avatarSrc}/>
                //         <div>
                //             <Handle>{tweet.author.displayName}</Handle>
                //             <div>{tweet.status}</div>
                //         </div>
                        
                //     </div>
                    
                // </TweetBanner>
        //     )}
        // </>
        <>
            {tweet.retweetFrom ? (
                <RetweetBanner className='retweetTextContainer'>
                    <AiOutlineRetweet className='retweetIcon'/>
                    <div class='retweetText'>{tweet.retweetFrom.displayName} Remeowed</div>
                </RetweetBanner>
            ):('')}
            <TweetBanner>
                <div className='tweetAndImg'>
                    <img className='userImg' src={tweet.author.avatarSrc}/>
                    <div className='tweetBody'>
                        <Handle>{tweet.author.displayName} <span>@{tweet.author.handle} - <Moment format="MMM Do YYYY">{tweet.timestamp}</Moment></span></Handle>
                        <p>{tweet.status}</p>
                        {tweet.media.length !== 0 ? (
                            <img className='media' src={tweet.media[0].url}/>
                        ):('')}
                        <footer>Comment, Retweet, Like, Save</footer>{/*//To replace with the ActionBar*/}
                    </div>   
                </div> 
            </TweetBanner>        
        </>
    )
}

const RetweetBanner = styled.div`
    display: flex;
    margin: 5px 0 5px 38px;
    .retweetIcon{
        font-size: 1.2em;
    }
    .retweetText{
        margin-left: 5px;
        font-size: 0.85em;
        font-weight: 400;
        color: rgb(112,112,113);
    }
`;
const TweetBanner = styled.div`
    border-bottom: 2px solid rgb(231,233,238);

    .userImg{
        margin-right: 10px;
    }
    .tweetAndImg{
        display: flex;
        margin-left: 8px;
    }
    .tweetBody{
        width: 100%;
    }
    p{
        margin-bottom: 30px;
    }
    .media{
        width: 500px;
        border-radius: 12%;
        margin-bottom: 30px;
    }
    footer{
        border: black solid 2px;
    }
`;
const Handle = styled.h3`
    span{
        font-size: 0.85em;
        font-weight: 400;
        color: rgb(112,112,113);
    }
`;

export default Tweets;