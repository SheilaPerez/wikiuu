import React from 'react';

export interface GlobalState {
    isLogged: boolean;
    modalState: {
        isRegisterModalOpen: boolean;
        isLoginModalOpen: boolean;
        isPassModalOpen: boolean;
    }
};

export interface GlobalContextProps {
    globalState: GlobalState;
    setGlobalState: (globalState: GlobalState) => void;
}
export const initialGlobalState = {
    globalState: {
        isLogged: false,
        modalState: {
            isRegisterModalOpen: false,
            isLoginModalOpen: false,
            isPassModalOpen: false
        }
    },
    setGlobalState: () => { }
}
const GlobalContext = React.createContext<GlobalContextProps>(initialGlobalState);
export const GlobalContextProvider = GlobalContext.Provider;
export default GlobalContext;