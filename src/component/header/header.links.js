import React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'

import { useStyles } from './header.styling'

const HeaderLinks = ({ user }) => {

    const classes = useStyles()

    return (
        <>
            {user && user.isUserFetched && (
                <Link to={'/animal'}>
                    <Typography className={classes.linkItem}>
                        Animals
                    </Typography>
                </Link>)
            }
        </>
    )

}

export default HeaderLinks