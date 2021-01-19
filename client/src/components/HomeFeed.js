import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";

const HomeFeed = () => {
    return (
        <Div>
            <Sidebar></Sidebar>
            <div>Home Feed</div>
        </Div>
    )
};

const Div = styled.div`
    display: flex;
`;


export default HomeFeed;