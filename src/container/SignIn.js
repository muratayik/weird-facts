import React from 'react'

import { CredentialsForm } from 'component/form'

const SignIn = () => {

    const onFormSubmit = async (formValues) => {
        console.log(formValues)
    }

    return (
        <>
            <CredentialsForm onFormSubmit={onFormSubmit} headerLabel='Sign In' submitButtonText='Sign In' />
        </>
    )

}

export default SignIn