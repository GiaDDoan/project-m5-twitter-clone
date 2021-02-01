import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";

import Sidebar from "./Sidebar";
import { ActionBar } from "./ActionBar/ActionBar";

import { VscArrowLeft } from "react-icons/vsc";

const TweetDetails = () => {
  const [tweetStatus, setTweetStatus] = React.useState("loading");
  const [tweet, setTweet] = React.useState(null);
  const { tweetId } = useParams();
  let history = useHistory();

  React.useEffect(async () => {
    try {
      const fetchResponse = await fetch(`/api/tweet/${tweetId}`);
      const fetchBody = await fetchResponse.json();
      setTweet(fetchBody.tweet);
      setTweetStatus("idle");
    } catch (error) {
      setTweetStatus("error");
    }
  }, []);

  function handleBackToFeed() {
    history.push("/");
  }

  if (tweetStatus === "loading") {
    return <div>Loading</div>;
  } else if (tweetStatus === "error") {
    return <div>ERROR</div>;
  } else if (tweetStatus === "idle") {
    console.log(tweet);
    return (
      <Wrapper>
        <Sidebar />
        <div className="container">
          <BackToFeed>
            <VscArrowLeft onClick={handleBackToFeed} className="logo" />
            <div>Meow</div>
          </BackToFeed>
          <TweetContainer>
            <div className="handleContainer">
              <img className="userImg" src={tweet.author.avatarSrc} />
              <div className="_handle">
                <div>{tweet.author.displayName}</div>
                <p>@{tweet.author.handle}</p>
              </div>
            </div>
            <div>
              <div className="tweetText">{tweet.status}</div>
              {tweet.media.length !== 0 ? (
                <img className="media" src={tweet.media[0].url} />
              ) : (
                ""
              )}
              <Moment className="time" format="MMMM Do YYYY, h:mm a">
                {tweet.timestamp}
              </Moment>
            </div>
          </TweetContainer>
          <ActionBar
            isRetweetedByUser={tweet.isRetweeted}
            numRetweets={tweet.numRetweets}
            isLikedByUser={tweet.isLiked}
            numLikes={tweet.numLikes}
          />
        </div>
        {/* <div>{tweet.status}</div> */}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;

  .container {
  }
`;
const BackToFeed = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgb(231, 233, 238);
  padding: 10px 20px;
  .logo {
    font-size: 1.3em;
  }
  div {
    font-size: 1.4em;
    font-weight: bold;
    padding-left: 10px;
  }
`;
const TweetContainer = styled.div`
  .handleContainer {
    display: flex;
    padding: 30px 25px;
  }
  ._handle {
    padding-left: 10px;
    div {
      font-size: 1.4em;
      font-weight: bold;
    }
    p {
      font-size: 1.1em;
      font-weight: 400;
      color: rgb(112, 112, 113);
    }
  }
  .tweetText {
    font-size: 1.2em;
    padding-left: 25px;
  }
  .media {
    width: 95%;
    height: 550px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .time {
    font-size: 1.05em;
    color: rgb(112, 112, 113);
    padding-left: 25px;
  }
`;

export default TweetDetails;
