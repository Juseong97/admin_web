
const ACCESS_TOKEN_KEY = 'jwt_token';

export const userTokenHandler = {
    getToken : () : string | null => {
        if(typeof window === 'undefined') return null;
      return localStorage.getItem(ACCESS_TOKEN_KEY);
    },
    setToken : (token : string) => {
        if(typeof window === 'undefined') return null;
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },
    removeToken : () => {
        if(typeof window === 'undefined') return null;
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
    hasToken : () : boolean => {
        // return Boolean(userTokenHandler.getToken());
        return !!(userTokenHandler.getToken());
    }
}