import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { CurrentUserContext } from '../CurrenUserContext';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { currentUser, status } = React.useContext(CurrentUserContext);
    const [currentProfile, setCurrenProfile] = React.useState(null);
    const [profileStatus, setProfileStatus] = React.useState("loading")
    const { profileId } = useParams();

    React.useEffect(async () => {
        if(currentUser.profile.handle === profileId){
            setCurrenProfile(currentUser);
            setProfileStatus(status);
        } else {
            try{
                const fetchResponse = await fetch(`/api/${profileId}/profile`)
                const fetchBody = await fetchResponse.json();
                setCurrenProfile(fetchBody);
                setProfileStatus("idle");
            }catch(error){
                setProfileStatus("error")
            }
        }
    }, [])
    console.log(currentProfile, 'current')

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
                        <div>
                            <img className="avatarSrc" src={currentProfile.profile.avatarSrc} />
                            <div>{currentProfile.profile.displayName}</div>
                            <div>{currentProfile.profile.handle}</div>
                        </div>
                    </HandlerInfo>
                </div>
            </Wrapper>
        )
    }
};

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
`;

const HandlerInfo = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px black;
    height: 40%;

    .bannerSrc{
        height: 40%;
    }
    .avatarSrc{
        border-radius: 50%;
        border: white 3px solid;
        width: 12%;
    }
`;

export default Profile;