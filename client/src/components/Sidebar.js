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
            <StyledLink to='/'>
                <AiOutlineHome className='logo'/>
                <p>Home Feed</p>
            </StyledLink>
            <StyledLink to='/:profile/abc'>
                <CgProfile className='logo'/>
                <p>Profile</p>
            </StyledLink>
            <StyledLink to='/notifications'>
                <MdNotificationsNone className='logo'/>
                <p>Notifications</p>
            </StyledLink>
            <StyledLink to='/bookmarks'>
                <FiBookmark className='logo'/>
                <p>Bookmarks</p>
            </StyledLink>
        </SidebarNav>
    )
};

const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const StyledLink = styled(Link)`//To change (Link) => (NavLink)
    margin: 10px 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: bold;

    .logo{
        font-size: 1.6em;
    }
    p{
        margin-left: 15px;
        font-size: 1.4em;
    }
    /* &.active {
        color: ${COLORS.primary};
    } */
`

const StyledLogo = styled(Logo)`
    height: 100px;
`;

export default Sidebar;