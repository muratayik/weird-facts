import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'

import { useStyles } from './header.styling'
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
                    {user.isUserFetched && (
                        <>
                            <Link to={'/animal'}>
                                <Typography className={classes.linkItem}>
                                    Animals
                                </Typography>
                            </Link>
                            <div className={classes.userInfo}>
                                <Typography className={classes.linkItem}>
                                    {user.email}
                                </Typography>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={onSignOut}
                                    color="inherit"
                                    className={classes.logoutIcon}
                                >
                                    <ExitToApp />
                                </IconButton>
                            </div>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )

}

export default Header