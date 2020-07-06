import React from 'react'

import { CircularProgress, Grid } from '@material-ui/core'

import { useStyles } from './spinner.styling'

const Spinner = () => {

    const classes = useStyles()

    return (
        <Grid container>
            <CircularProgress className={classes.spinner} color="secondary" />
        </Grid>
    )

}

export default Spinner