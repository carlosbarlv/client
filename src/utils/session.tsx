export const isLoggedIn = (): boolean => {
  return sessionStorage.getItem('BPS-user') !== null
}

type UserData = {
  businessId: string
  token: string
  username: string
}

export const createSession = (user: UserData): void => {
  const { businessId, token, username } = user
  const sessionInfo = JSON.stringify({
    businessId,
    token,
    username,
  })

  sessionStorage.setItem('BPS-user', sessionInfo)
}

export const removeSession = (): void => {
  sessionStorage.removeItem('BPS-user')
}

export const getSessionInfo = (): UserData => {
  return isLoggedIn()
    ? JSON.parse(sessionStorage.getItem('BPS-user') || '')
    : {}
}
