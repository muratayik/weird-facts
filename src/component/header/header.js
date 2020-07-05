import React from 'react'
import { Link } from 'react-router-dom'

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'


import { useStyles } from './header.styling'

const Header = () => {

    const classes = useStyles()

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Weird Facts
                    </Typography>
                    <Link to={'/animal'}>
                        <Typography className={classes.linkItem}>
                            Animals
                        </Typography>
                    </Link>
                    <div className={classes.userInfo}>
                        <Typography className={classes.linkItem}>
                            muratayik@gmail.com
                        </Typography>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => console.log('Logout')}
                            color="inherit"
                            className={classes.logoutIcon}
                        >
                            <ExitToApp />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )

}

export default Header