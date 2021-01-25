import React from 'react';
import styled from 'styled-components';

import { ActionBarContext } from '../ActionBarContext';
import Heart from './Heart';

const LikeButton = ({ size = 40, isLiked }) => {
    const heartSize = size * 0.6;
    const {
        isLikedByCurrentUser
    } = React.useContext(ActionBarContext);
    // console.log(isLikedByCurrentUser, 'LikeButoon');

    return (
        <Wrapper>
            <Heart width={heartSize} isToggled={isLiked}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;

export default LikeButton