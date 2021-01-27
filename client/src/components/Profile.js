import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { CurrentUserContext } from '../CurrenUserContext';

const Profile = () => {
    const { currentUser, status } = React.useContext(CurrentUserContext);
    // console.log(currentUser.profile, status,'CURRENT USER');

    if(status ==="loading"){
        return( 
            <div>loading wheel</div>
        )
    } else if(status === "error"){
        return(
            <div>ERROR bomb</div>
        )
    } else {
        return (
            <Div>
                <Sidebar></Sidebar>
                <Div>{currentUser.profile.displayName}</Div>
            </Div>
        )
    }
};

const Div = styled.div`
    display: flex;
`;

export default Profile;