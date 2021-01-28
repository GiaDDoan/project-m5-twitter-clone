import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { CurrentUserContext } from '../CurrenUserContext';
import { useParams, NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import { COLORS } from "../constants/colors";
import Tweets from './Tweets';

const Profile = () => {
    const { currentUser, status } = React.useContext(CurrentUserContext);
    const [currentProfile, setCurrenProfile] = React.useState(null);
    const [profileStatus, setProfileStatus] = React.useState("loading");
    const [tweets, setTweets] = React.useState([]);
    const { profileId } = useParams();

    const fetchProfileTweet = () => {
        fetch(`/api/${profileId}/feed`)
                .then((res) => res.json())
                .then((json) => {
                    // setData(json);
                    setProfileStatus('idle');
                    let tweetsArr = Object.values(json.tweetsById)
                    let newArr = tweetsArr.sort(function(a,b){
                        return new Date(b.timestamp) - new Date(a.timestamp)
                    })
                    setTweets(newArr);
                })
    }

    React.useEffect(async () => {
        if(currentUser.profile.handle === profileId){
            setCurrenProfile(currentUser);
            setProfileStatus(status);
        } else {
            try{
                const fetchResponse = await fetch(`/api/${profileId}/profile`);
                const fetchBody = await fetchResponse.json();
                setCurrenProfile(fetchBody);
                setProfileStatus("idle");
            }catch(error){
                setProfileStatus("error")
            }
        }
    }, [])
    React.useEffect(() => {
        fetchProfileTweet();
    },[])
    // console.log(currentProfile, 'current')

    console.log(tweets, 'Profile')

    if(profileStatus ==="loading"){
        return( 
            <div>loading wheel</div>
        )
    } else if(profileStatus === "error"){
        return(
            <div>ERROR bomb</div>
        )
    } else {
        return(
            <Wrapper>
                <Sidebar />
                <div className="container">
                    <HandlerInfo>
                        <img className="bannerSrc" src={currentProfile.profile.bannerSrc}/>
                        <div className="containerOverall">
                            <header className="containerNoBanner">
                                <img className="avatarSrc" src={currentProfile.profile.avatarSrc} />
                                <div>{currentProfile.profile.displayName}</div>
                                <div>{currentProfile.profile.handle}</div>
                                <div>{currentProfile.profile.bio}</div>
                                <div>
                                    <span>ICON</span> &nbsp;
                                    {currentProfile.profile.location} &nbsp;
                                    <span><Moment format="MMMM YYYY">{currentProfile.profile.joined}</Moment></span>
                                </div>
                                <div>
                                    {currentProfile.profile.numFollowing} Following &nbsp;
                                    <span>{currentProfile.profile.numFollowers} Followers</span>
                                </div>
                            </header>
                            <footer>
                                <button type="button">Tweets</button>
                                <button type="button">Media</button>
                                <button type="button">Likes</button>
                            </footer>
                        </div>
                    </HandlerInfo>
                    <div>
                        {tweets.length > 0 ? (
                            tweets.map((tweet) => {
                                return (
                                    <Tweets 
                                        tweet={tweet}
                                    />)
                            })
                        ):('')}
                    </div>
                </div>
            </Wrapper>
        )
    }
};

const Wrapper = styled.div`
    display: flex;
    /* width: 100vw; */
`;

const HandlerInfo = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 2px;
    /* height: auto; */

    .bannerSrc{
        height: 40%;
    }
    .containerNoBanner{
        margin-top: -78px;
    }
    header{
        padding-left: 25px;
    }
    .avatarSrc{
        border-radius: 50%;
        border: white 3px solid;
        width: 15%;
    }
    footer{
        border-bottom: 2px solid rgb(231,233,238);
        margin-top: 40px;

        button{
            width: calc(100%/3);
            height: 50px;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 1.1em;
            font-weight: 540;

            &:active {
                color: ${COLORS.primary};
                border-bottom: 3px solid ${COLORS.primary};
            }
            :hover{
                border-bottom: 3px solid ${COLORS.primary};
            }
        }
    }
`;

export default Profile;