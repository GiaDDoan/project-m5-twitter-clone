import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";

const Notifications = () => {
    return (
        <Div>
            <Sidebar></Sidebar>
            <Div>Notifications</Div>
        </Div>
    )
};

const Div = styled.div`
    display: flex;
`;

export default Notifications;