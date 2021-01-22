import React from 'react';
import styled from "styled-components";

const Tweet = ({ data, status }) => {
    // console.log(data.tweetsById, 'Tweet.js')
    let tweetArr = [];
    if(status ==='idle'){
        const TWEETS = data.tweetsById;
        Object.values(TWEETS).map((tweetData) => {
            // console.log(tweetData, 'tweetData');
            tweetArr.push(tweetData);
        })
    }
    console.log(tweetArr,'tweetA')

    return (
        <>
            {/* {tweet ? <Div>{tweet}</Div> : <Div>ERROR</Div>} */}
            {tweetArr.map((tweet) => {
                return(
                    <Banner>{tweet.id}</Banner>
                )
            })}
        </>
    )
}

const Banner = styled.div`

`;

export default Tweet;