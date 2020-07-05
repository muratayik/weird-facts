import React from "react";
import { useForm } from "react-hook-form";

import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Box,
    Typography,
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import Container from "@material-ui/core/Container";

import { CopyRight } from './copyRight'
import { InputField } from './inputField'
import { useStyles } from './styling'

const CredentialsForm = ({ onFormSubmit, headerLabel, submitButtonText }) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {headerLabel}
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputField
                                name="email"
                                label="Email Address"
                                register={register({ required: "Enter your e-mail" })}
                                errors={errors}
                                autoFocus
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputField
                                name="password"
                                type="password"
                                label="Password"
                                register={register({ required: "Enter your password" })}
                                errors={errors}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {submitButtonText}
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <CopyRight />
            </Box>
        </Container>
    );
};

export default CredentialsForm
