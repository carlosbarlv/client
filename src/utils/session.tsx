export const isLoggedIn = () => sessionStorage.getItem('BPS-user') !== null

export const createSession = (user: any) => {
  const { businessId, token, username } = user
  const sessionInfo = JSON.stringify({
    businessId,
    token,
    username,
  })

  sessionStorage.setItem('BPS-user', sessionInfo)
}

export const removeSession = () => {
  sessionStorage.removeItem('BPS-user')
}

export const getSessionInfo = () => {
  return isLoggedIn()
    ? JSON.parse(sessionStorage.getItem('BPS-user') || '')
    : {}
}
