import React from "react";

import { TextField } from "@material-ui/core";

export const InputField = ({
    name,
    label,
    register,
    errors,
    type = "text",
    autoFocus = false,
    required = false,
}) => {
    return (
        <TextField
            name={name}
            type={type}
            variant="outlined"
            fullWidth
            id={name}
            label={label}
            inputRef={register}
            error={!!errors[name]}
            autoFocus={autoFocus}
            required={required}
            helperText={errors?.[name]?.message}
        />
    );
};

