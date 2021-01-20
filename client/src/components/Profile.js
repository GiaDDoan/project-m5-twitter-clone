import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";

const Profile = () => {
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