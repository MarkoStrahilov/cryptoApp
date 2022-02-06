import { createContext } from "react";
import axios from 'axios'
import { useState } from "react";

const CryptoContext = createContext()

export const CryptoProvider = ({children}) => {

    const [crypto, setCrypto] = useState([])

    const getData = async function(coinId) {
        
        const options = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '9260077293msh32c654a0d27e390p1a812cjsn8fb1995a5d19'
            }
          };
          
        axios.request(options).then(function (response) {
            setCrypto(response.data)
        }).catch(function (error) {
            console.error(error);
        });
          
    }



    return <CryptoContext.Provider value={{
        crypto
    }}>
        {children}
    </CryptoContext.Provider>
}

export default CryptoContext