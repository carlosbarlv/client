import Cookies from 'js-cookie'

const COOKIE_KEY_USER_DATA = 'fibankingUserData'
const COOKIE_KEY_SESSION_TOKEN = 'fibankingSession'

export const isLoggedIn = (): boolean => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA]

  return !requiredCookiesKeys.some(
    (cookieKey) => Cookies.get(cookieKey) === undefined
  )
}

type UserData = {
  businessId: string
  username: string
  sessionCookie: {
    token: string
    expiration: string
  }
}

export const createSession = (user: UserData): void => {
  const { businessId, username, sessionCookie } = user
  const { token: sessionToken, expiration: sessionExpiration } = sessionCookie
  const cookiesExpiration = new Date(sessionExpiration)
  const sessionInfo = JSON.stringify({
    businessId,
    username,
  })

  Cookies.set(COOKIE_KEY_USER_DATA, sessionInfo, { expires: cookiesExpiration })

  Cookies.set(COOKIE_KEY_SESSION_TOKEN, sessionToken, {
    expires: cookiesExpiration,
  })
}

export const removeSession = (): void => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA]

  requiredCookiesKeys.forEach((cookieKey) => Cookies.remove(cookieKey))
}

export const getSessionInfo = (): UserData => {
  return isLoggedIn() ? Cookies.getJSON(COOKIE_KEY_USER_DATA) : {}
}

export const getSessionToken = (): string => {
  return Cookies.get(COOKIE_KEY_SESSION_TOKEN) || ''
}
