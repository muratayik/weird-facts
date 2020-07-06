import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { getToken } from 'util/token'

const GuardedRoute = ({ ...rest }) => {
    return getToken()
        ? <Route {...rest} />
        : <Redirect to='/signIn' />
}

export default GuardedRoute