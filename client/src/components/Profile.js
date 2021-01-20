import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar";
// import { CurrentUserContext } from '../CurrenUserContext';

const Profile = () => {
    // const { currentUser, status } = React.useContext(CurrentUserContext);
    // console.log(currentUser, status, 'TEST');

    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState('loading');

    React.useEffect(() => {
        if(status === 'loading'){
            fetch('/api/me/profile')
            .then((res) => res.json())
            .then((json) => {
                setCurrentUser(json);
                setStatus('idle');
            })
        }
        return () => {
            setStatus('loading');
        }
    },[]);
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