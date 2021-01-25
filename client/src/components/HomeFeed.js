import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { ReactComponent as Logo } from "../assets/logo.svg"; //To remove
import Tweets from './Tweets';

const HomeFeed = () => {
    const [status, setStatus] = React.useState("loading");
    const [tweets, setTweets] = React.useState([]);

    React.useEffect(() => {
        if(status === "loading"){
            fetch('/api/me/home-feed')
                .then((res) => res.json())
                .then((json) => {
                    // setData(json);
                    setStatus('idle');
                    setTweets(Object.values(json.tweetsById))
                })
        }
        return () => {
            setStatus('loading');
        }
    }, [])

    // if(status === 'idle'){
    //     console.log(tweets, 'data')
    // }

    return (
        <Div >
            <Sidebar></Sidebar>
            <div className="container">
                <h1 className="title">Home Feed</h1>
                <div className="inputWithAvatar">
                    <img className="userImg" src={Logo}/>
                    <textarea className="textArea" type="text" placeholder="What's happening?"></textarea>
                </div>
                <div className="sendBtn">
                        <p>Number of letters left</p>
                        <button>Meow</button>
                </div>
                {tweets.length > 0 ? (
                    tweets.map((tweet) => {
                        return (<Tweets 
                        tweet={tweet}
                        />)
                    })
                ):('')}
            </div>
        </Div>
    )
};

const Div = styled.div`
    display: flex;

    .sendBtn{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        border-bottom: 12px solid rgb(231,233,238);
        margin-top: 20px;
        padding-bottom: 20px;

        button{
            font-size: 1.2em;
            padding: 15px 20px;
            color: white;
            background-color: rgb(173,145,253);
            border: 20px;
            border-radius: 40px;
            margin-right: 60px;
        }
    }
`;


export default HomeFeed;