import React, { useState } from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
    // React.useEffect(() => {
    //     if(status === "loading"){
    //         fetch('/api/me/profile')
    //             .then((res) => res.json())
    //             .then((json) => {
    //                 setCurrentUser(json);
    //                 setStatus('idle');
    //         })
    //     }
    //     return () => {
    //         setStatus('loading');
    //     }
    // }, []);
    React.useEffect(async () => {
        if(status === "loading"){
            try{
                const fetchResponse = await fetch('/api/me/profile');
                const fetchBody = await fetchResponse.json();
                setStatus('idle');
                setCurrentUser(fetchBody);
            } catch(error){
                console.log('ERROR')
                setStatus('error');
            }
        }
        return () => {
            setStatus('loading');
        }
    }, []);

    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
        </CurrentUserContext.Provider>
    );
};