import React, { useContext } from 'react'
import { AppContext } from '../ContextProvider'

const Volunteer = () => {
    const { loggedIn } = useContext(AppContext)
    loggedIn(true)
    return (
        <div className="container">
            <h3>This is volunteer page</h3>
        </div>)
}

export default Volunteer