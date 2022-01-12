import { useState } from 'react';

const useAuth = initialValue => {
    const [isAuth, setIsAuth] = useState(initialValue); 

    const login = () => new Promise(resolve => {
        setIsAuth(true);
        resolve()
    });

    const logout = () => new Promise(resolve => {
        setIsAuth(false);
        resolve()
    });
    // const login = () => {
    //     setIsAuth(true);
    // };
    // const logout = () => {
    //     setIsAuth(false);
    // };

    return [isAuth, login, logout];
}

export default useAuth;