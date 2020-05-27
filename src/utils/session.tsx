export const isLoggedIn = () => sessionStorage.getItem('BPS-user') !== null;

export const createSession = (user: any) => {
  const sessionInfo = JSON.stringify({
    businessId: user.ID_EMPRESA_DEF,
    costCenterId: user.ID_CENTRO_COSTO,
    username: user.USUARIO,
  });

  sessionStorage.setItem('BPS-user', sessionInfo);
};

export const removeSession = () => {
  sessionStorage.removeItem('BPS-user');
};

export const getSessionInfo = () => {
  return isLoggedIn()
    ? JSON.parse(sessionStorage.getItem('BPS-user') || '')
    : {};
};
