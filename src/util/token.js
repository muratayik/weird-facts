
const TOKEN_NAME = 'weirdFactsToken'

export const getToken = () => {

    return sessionStorage.getItem(TOKEN_NAME) ||
        localStorage.getItem(TOKEN_NAME) ||
        ''

}

export const setToken = (token, rememberMe = true) => {
    clearTokens()
    rememberMe
        ? localStorage.setItem(TOKEN_NAME, token)
        : sessionStorage.setItem(TOKEN_NAME, token)
}

export const clearTokens = () => {
    sessionStorage.removeItem(TOKEN_NAME)
    localStorage.removeItem(TOKEN_NAME)
}