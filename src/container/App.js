import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from 'util/history'
import SignIn from './SignIn'
import Register from './Register'
import { Header } from 'component/header'


const App = () => {

    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route path='/signIn' component={SignIn} />
                <Route path='/register' component={Register} />
            </Switch>
        </Router>
    )
}

export default App