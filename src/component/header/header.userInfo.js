import React from 'react'

import { Typography } from '@material-ui/core'

import { useStyles } from './header.styling'

const HeaderUserInfo = ({ user }) => {

    const classes = useStyles()

    return (
        <>
            {user && user.isUserFetched && (
                <Typography className={classes.linkItem}>
                    {user?.email}
                </Typography>
            )}
        </>
    )

}

export default HeaderUserInfo