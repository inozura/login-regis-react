
export const setLocalStorage = (key, data) => localStorage.setItem(key ? key : 'jwtToken', data);

export const getLocalStorage = (key) => localStorage.getItem(key ? key : 'jwtToken');

export const deleteLocalStorage = (key) => localStorage.removeItem(key ? key : 'jwtToken');