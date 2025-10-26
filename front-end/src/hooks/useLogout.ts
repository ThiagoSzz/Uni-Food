export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  };

  return { logout };
};
