import React from 'react'

import { ExitToApp } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

import { useStyles } from './header.styling'

const HeaderSignOut = ({ user, onClick }) => {

    const classes = useStyles()

    return (
        <>
            {user && user.isUserFetched && (
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={onClick}
                    color="inherit"
                    className={classes.logoutIcon}
                >
                    <ExitToApp />
                </IconButton>
            )
            }
        </>
    )

}

export default HeaderSignOut