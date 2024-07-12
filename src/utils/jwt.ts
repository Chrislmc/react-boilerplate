const TOKEN_KEY = 'refine-auth';
const PROFILE_KEY = 'refine-profile';

const clear = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(PROFILE_KEY);
};
const set = (token: string, profile: any) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
};
const get = () => {
    return typeof localStorage !== 'undefined' &&
    {
        token: localStorage.getItem(TOKEN_KEY),
        profile: JSON.parse(localStorage.getItem(PROFILE_KEY) ?? "{}"),
    };
};

export const jwt = {
    clear,
    set,
    get
};