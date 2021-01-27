import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { ReactComponent as Logo } from "../assets/logo.svg"; //To remove
import Tweets from './Tweets';
import Input from './Input';
import { CurrentUserContext } from '../CurrenUserContext';

const maxCharLength = 280;

const HomeFeed = () => {
    const [status, setStatus] = React.useState("loading");
    const [tweets, setTweets] = React.useState([]);
    const [inputValues, setInputValues] = React.useState({ textInput:""});
    const [inputLength, setInputLength] = React.useState(maxCharLength);
    // const { currentUser } = React.useContext(CurrentUserContext);
    // const [newTweet, setNewTweet] = React.useState(currentUser);

    const handleChange = (val, item) => {
        setInputValues({ ...inputValues, [item]: val })
    }

    const fetchHomeFeed = () => {
        fetch('/api/me/home-feed')
                .then((res) => res.json())
                .then((json) => {
                    // setData(json);
                    setStatus('idle');
                    setTweets(Object.values(json.tweetsById))
                })
    }
    React.useEffect(() => {
        if(status === "loading"){
            fetchHomeFeed();
        }
        return () => {
            setStatus('loading');
        }
    }, [])
    React.useEffect(() => {
        if(inputValues.textInput !== ""){
            setInputLength(maxCharLength - inputValues.textInput.length);
        };
        
    }, [inputValues]);
    console.log(inputLength, 'LENGTH');
    console.log(inputValues, 'value');

    const handleSubmit = (ev) => {
        ev.preventDefault();

        fetch("/api/tweet", {
            method: "POST",
            body: JSON.stringify({status: inputValues.textInput}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            setStatus("loading");
            fetchHomeFeed();
        })

    }
    if(status === "loading"){
        return(
            <div>Loading</div>
        )
    } else {
        return (
            <Div >
                <Sidebar></Sidebar>
                <div className="container">
                    <h1 className="title">Home Feed</h1>
                    <div className="inputWithAvatar">
                        <img className="userImg" src={Logo}/>
                        <Input 
                            name="textInput"
                            type="text"
                            placeholder="What's happening?"
                            handleChange={handleChange}
                            value={inputValues.textInput}
                        />
                    </div>
                    <div className="sendBtn">
                            {inputLength > 0 ? (
                                <p>{inputLength}</p>
                                ):(
                                <p>MAX</p>)
                            }
                            <button onClick={handleSubmit}>Meow</button>
                    </div>
                    {tweets.length > 0 ? (
                        tweets.map((tweet) => {
                            return (
                                <Tweets 
                                    tweet={tweet}
                                />)
                        })
                    ):('')}
                </div>
            </Div>
        )  
    }

    
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