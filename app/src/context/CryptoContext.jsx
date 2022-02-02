import { createContext,useState } from "react";

const CryptoContext = createContext()

export const CryptoProvider = ({children}) => {

    const [cryptoData, setCryptoData] = useState([])

    const getData = async function() {
        let options = {
            method: 'GET',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              tiers: '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '50',
              offset: '0'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '9260077293msh32c654a0d27e390p1a812cjsn8fb1995a5d19'
            }
          };
          
        const cryptoCoins = await fetch('https://coinranking1.p.rapidapi.com/coins', options);
        const data = await cryptoCoins.json()
        setCryptoData(data)
    }


    return <CryptoContext.Provider value={{
        cryptoData,getData
    }}>
        {children}
    </CryptoContext.Provider>
}

export default CryptoContext