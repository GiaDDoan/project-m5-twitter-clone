import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

import Moment from 'react-moment';
import { AiOutlineRetweet } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';

import { ActionBar } from './ActionBar/ActionBar';
import { CurrentUserContext } from '../CurrenUserContext';

const Tweets = ({ tweet, status }) => {
    let history = useHistory();
    const { currentUser } = React.useContext(CurrentUserContext);

    function handleClick() {
        // if(currentUser.profile.handle === tweet.author.handle){
        //     history.push(`/api/me/profile`);
        //     console.log('handleClicked');
        // }
        history.push(`/${tweet.author.handle}`);
    }
    
    if(status === "loading"){
        <div>LOADING WHEEL</div>
    }
    return (
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
                        <Handle>
                            <span 
                                className='displayName'
                                onClick={handleClick}
                            >
                                {tweet.author.displayName}
                            </span> &nbsp;
                            <span>@{tweet.author.handle} - <Moment format="MMM Do YYYY">{tweet.timestamp}</Moment></span>
                        </Handle>
                        <p>{tweet.status}</p>
                        {tweet.media.length !== 0 ? (
                            <img className='media' src={tweet.media[0].url}/>
                        ):('')}
                        <ActionBar
                            isRetweetedByUser={tweet.isRetweeted}
                            numRetweets={tweet.numRetweets}
                            isLikedByUser={tweet.isLiked}
                            numLikes={tweet.numLikes}
                        />
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
        width: 95%;
        height: 400px;
        border-radius: 10px;
        margin-bottom: 30px;
    }
`;
const Handle = styled.h3`
    .displayName{
        font-weight: bold;
        font-size: 1.05em;
        color: black;

        :hover{
            border-bottom: 1px solid black;
        }
    };
    span{
        font-size: 0.85em;
        font-weight: 400;
        color: rgb(112,112,113);
    }
`;

export default Tweets;