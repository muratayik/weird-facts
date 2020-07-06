import React from 'react'

import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import faker from 'faker'

import { useStyles } from './animalFactList.styling'

const AnimalFactList = ({ animalFacts }) => {

    console.log(faker.date.past().toDateString())


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

    const userName = faker.name.findName()

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={faker.image.avatar()} />
                }
                title={`${userName}`}
                subheader={faker.date.past().toDateString()}
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