const TokenKey = 'token_id'

export function isLogged() {
    return localStorage.getItem(TokenKey)
}

export function removeToken(){
    return localStorage.removeItem(TokenKey)
}