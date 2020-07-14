import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'

import { useStyles } from './header.styling'
import HeaderLinks from './header.links'
import HeaderUserInfo from './header.userInfo'
import HeaderSignOut from './header.signout'
import { signOut } from 'store/auth/actions'

const Header = () => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const user = useSelector(root => root.user)

    const onSignOut = () => {
        dispatch(signOut())
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Weird Facts
                    </Typography>
                    <HeaderLinks user={user} />
                    <div className={classes.userInfo}>
                        <HeaderUserInfo user={user} />
                        <HeaderSignOut user={user} onClick={onSignOut} />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )

}

export default Header