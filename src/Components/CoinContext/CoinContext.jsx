import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProver = ({children})=> {


    return <CoinContext.Provider value={{}}>
        {children}
    </CoinContext.Provider>
}

export default CoinContextProver;