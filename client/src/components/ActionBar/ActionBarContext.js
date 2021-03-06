import React, { useState } from 'react';

export const ActionBarContext = React.createContext(null);

export const ActionBarProvider = ({ children }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);

    const [isRetweeted, setIsRetweeted] = useState(false);
    const [isRetweetedByCurrentUser, setIsRetweetedByCurrentUser] = useState(false);

    const handleToggleLike = ({ numLikes }) => {
        if(!isLikedByCurrentUser){
            setIsLikedByCurrentUser(true);
            return numLikes + 1;
        } else {
            setIsLikedByCurrentUser(false);
            return numLikes - 1;
        }
    };

    const handleToggleRetweet = ({ numLikes }) => {
        if(!isRetweetedByCurrentUser){
            setIsRetweetedByCurrentUser(true);
        } else {
            setIsRetweetedByCurrentUser(false);
        }
    };

    return (
        <ActionBarContext.Provider
            value={{
                isLikedByCurrentUser,
                setIsLikedByCurrentUser,
                isRetweetedByCurrentUser,
                setIsRetweetedByCurrentUser,
                handleToggleLike,
                handleToggleRetweet,
            }}
        >
            {children}
        </ActionBarContext.Provider>
    );
}