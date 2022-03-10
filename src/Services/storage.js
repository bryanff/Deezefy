
export const getItem = (key) => {
    const item = window.localStorage.getItem(key);
    if(item){
        return JSON.parse(item);
    }else{
        window.localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
};

export const setItem = (key, value) => {
    const item = window.localStorage.getItem(key);
    const stored = item ? JSON.parse(item) : [];
    window.localStorage.setItem(key, JSON.stringify([value, ...stored]));
};
