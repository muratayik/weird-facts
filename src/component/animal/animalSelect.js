import React from 'react'

import { FormControl, Grid, MenuItem, Select, Typography } from '@material-ui/core'
import { useStyles } from './animalSelect.styling'

const AnimalSelect = ({ selectedAnimal, setSelectedAnimal }) => {

    const classes = useStyles()

    const animalList = [
        { key: 'cat', value: 'CAT' },
        { key: 'dog', value: 'DOG' },
        { key: 'horse', value: 'HORSE' },
        { key: 'snail', value: 'SNAIL' },
    ]

    return (
        <Grid container>
            <div className={classes.animalTypeSelectContainer}>
                <Typography variant='h6'>
                    Select Animal Type
                </Typography>
                <FormControl>
                    <Select
                        value={selectedAnimal}
                        onChange={(event) => {
                            setSelectedAnimal(event.target.value);
                        }}
                        displayEmpty
                        className={classes.animalTypeSelect}
                    >
                        <MenuItem value="" disabled>
                            <em>Please Select...</em>
                        </MenuItem>
                        {animalList.map(animal => (
                            <MenuItem
                                key={animal.key}
                                value={animal.key}
                            >{animal.value}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </Grid>
    )

}

export default AnimalSelect