import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { ReactComponent as Logo } from "../assets/logo.svg"; //To remove
import Tweet from './Tweet';

const HomeFeed = () => {
    const [data, setData] = React.useState(null)
    const [status, setStatus] = React.useState("loading");

    React.useEffect(() => {
        if(status === "loading"){
            fetch('/api/me/home-feed')
                .then((res) => res.json())
                .then((json) => {
                    setData(json);
                    setStatus('idle');
                })
        }
        return () => {
            setStatus('loading');
        }
    }, [])

    if(status === 'idle'){
        // console.log(data.tweetsById, 'HomeFeed');
    }
    

    return (
        <Div >
            <Sidebar></Sidebar>
            <div className="container">
                <h1 className="title">Home Feed</h1>
                <div className="inputWithAvatar">
                    <img className="currentUserImg" src={Logo}/>
                    <textarea className="textArea" type="text" placeholder="What's happening?"></textarea>
                </div>
                <div className="sendBtn">
                        <p>100</p>
                        <button>Meow</button>
                </div>
                <Tweet data={data} status={status}/>
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