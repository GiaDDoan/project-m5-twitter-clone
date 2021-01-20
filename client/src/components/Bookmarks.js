import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";

const Bookmarks = () => {
    return (
        <Div>
            <Sidebar></Sidebar>
            <Div>Bookmarks</Div>
        </Div>
    );
};

const Div = styled.div`
    display: flex;
`;

export default Bookmarks;