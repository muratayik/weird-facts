import React from 'react'

import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'

import { useStyles } from './animalFactList.styling'

const AnimalFactList = ({ animalFacts }) => {


    const classes = useStyles()

    if (!animalFacts) return null

    return (
        <Grid container spacing={2} className={classes.listContainer}>
            {animalFacts.map((animalFact) => (
                <AnimalFactListItem key={animalFact._id} animalFact={animalFact} classes={classes} />
            ))}
        </Grid>
    )
}

const AnimalFactListItem = ({ animalFact, classes }) => {

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={animalFact.avatar} />
                }
                title={animalFact.userName}
                subheader={animalFact.postingDate}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                    {animalFact.text}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default AnimalFactList