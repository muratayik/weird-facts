import React from 'react'

import { CredentialsForm } from 'component/form'

const Register = () => {

    const onFormSubmit = async (formValues) => {
        console.log(formValues)
    }

    return (
        <>
            <CredentialsForm onFormSubmit={onFormSubmit} headerLabel='Register' submitButtonText='Register' />
        </>
    )

}

export default Register