export const isLoggedIn = () => sessionStorage.getItem('BPS-user') !== null;

export const createSession = (user: string) => {
  sessionStorage.setItem('BPS-user', user);
};

export const removeSession = () => {
  sessionStorage.removeItem('BPS-user');
};
