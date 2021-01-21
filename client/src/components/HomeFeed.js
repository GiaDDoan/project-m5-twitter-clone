import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { ReactComponent as Logo } from "../assets/logo.svg"; //To remove

const HomeFeed = () => {
    return (
        <Div >
            <Sidebar></Sidebar>
            <div className="container">
                <h1 className="title">Home Feed</h1>
                <div className="inputWithAvatar">
                    <img className="currentUserImg" src={Logo}/>
                    <input className="inputField" type="text" placeholder="What's happening?"></input>
                </div>
                <div className="sendBtn">
                        <p>100</p>
                        <button>Meow</button>
                </div>
            </div>
        </Div>
    )
};

const Div = styled.div`
    display: flex;

    .sendBtn{
        margin-top: 10px;
        display: flex;
        margin-left: 65vw;

        button{
            font-size: 1.2em;
            padding: 15px 20px;
            color: white;
            background-color: rgb(173,145,253);
            border: 20px;
        }
    }
`;


export default HomeFeed;