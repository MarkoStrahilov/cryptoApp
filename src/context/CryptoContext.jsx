import { createContext } from "react";

const CryptoContext = createContext()

export const CryptoProvider = ({children}) => {

    return <CryptoContext.Provider value={{

    }}>
        {children}
    </CryptoContext.Provider>
}

export default CryptoContext