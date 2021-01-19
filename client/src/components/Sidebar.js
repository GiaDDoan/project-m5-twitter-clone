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
        <>
            <Logo/>
            <SidebarNav>
                <StyledLink to='/'>
                    <AiOutlineHome />
                    <p>Home Feed</p>
                </StyledLink>
                <StyledLink to='/:profile/abc'>
                    <CgProfile />
                    <p>Profile</p>
                </StyledLink>
                <StyledLink to='/notifications'>
                    <MdNotificationsNone />
                    <p>Notifications</p>
                </StyledLink>
                <StyledLink to='/bookmarks'>
                    <FiBookmark />
                    <p>Bookmarks</p>
                </StyledLink>
            </SidebarNav>
        </>
    
    )
};

const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    /* height: 10vh; */

`
const StyledLink = styled(Link)`//To change (Link) => (NavLink)
    font-size: 1.5em;
    margin: 10px 0;
    text-decoration: none;
    display: flex;
    align-items: center;

    p{
        margin-left: 10px;
    }

    /* &.active {
        color: ${COLORS.primary};
    } */
`

export default Sidebar;