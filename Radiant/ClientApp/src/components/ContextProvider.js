import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ContextProvider = (props) => {
    const [userIsLogged, setUserIsLogged] = useState(false)
    

    const loggedIn = (flag) => {
        setUserIsLogged( flag )
        console.log("login clicked", userIsLogged)
    }
    return (
        <AppContext.Provider value={{ userIsLogged, loggedIn }}>
            {props.children}
        </AppContext.Provider>
        )
}

export default ContextProvider