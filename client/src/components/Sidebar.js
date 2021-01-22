import React from 'react';
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { COLORS } from "../constants/colors"

//ICONS
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsNone } from 'react-icons/md';
import { FiBookmark } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <SidebarNav>
            <StyledLogo />
            <StyledLink exact to='/'>
                <AiOutlineHome className='logo'/>
                <p>Home Feed</p>
            </StyledLink>
            <StyledLink exact to='/:profile/abc'>
                <CgProfile className='logo'/>
                <p>Profile</p>
            </StyledLink>
            <StyledLink exact to='/notifications'>
                <MdNotificationsNone className='logo'/>
                <p>Notifications</p>
            </StyledLink>
            <StyledLink exact to='/bookmarks'>
                <FiBookmark className='logo'/>
                <p>Bookmarks</p>
            </StyledLink>
        </SidebarNav>
    )
};

const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    padding-left: 4.5vw;
    width: 400px;
    border: 2px red solid;
    height: 100vh;
`
const StyledLink = styled(NavLink)`//To change (Link) => (NavLink)
    margin: 5px 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: flex-start;
    width: 67%;
    padding: 10px 10px;
    border-radius: 30px; 

    .logo{
        font-size: 1.6em;
    }
    p{
        margin-left: 15px;
        font-size: 1.4em;
    }
    &.active {
        color: ${COLORS.primary};
        background-color: ${COLORS.secondary};
    }
`

const StyledLogo = styled(Logo)`
    height: 100px;
`;

export default Sidebar;