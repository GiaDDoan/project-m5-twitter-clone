import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { CurrentUserContext } from '../CurrenUserContext';

const Profile = () => {
    const { currentUser, status } = React.useContext(CurrentUserContext);
    console.log(currentUser, status,'CURRENT USER');

    return (
        <Div>
            <Sidebar></Sidebar>
            <Div>Profile</Div>
        </Div>
    )
};

const Div = styled.div`
    display: flex;
`;

export default Profile;