import React from 'react'
import { useDispatch } from 'react-redux'

import { CredentialsForm } from 'component/form'
import { trySignIn } from 'store/auth/actions'

const SignIn = () => {

    const dispatch = useDispatch()

    const onFormSubmit = async (formValues) => {
        dispatch(trySignIn(formValues))
    }

    return (
        <>
            <CredentialsForm onFormSubmit={onFormSubmit} headerLabel='Sign In' submitButtonText='Sign In' />
        </>
    )

}

export default SignIn