import React from "react";
import { Typography } from "@material-ui/core";

export const CopyRight = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © Weird Facts "}
            {new Date().getFullYear()}
        </Typography>
    );
};
