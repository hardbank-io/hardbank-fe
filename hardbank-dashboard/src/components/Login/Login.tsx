import Onboard from 'bnc-onboard'
import React from 'react'
import Web3 from 'web3'


export default function Login() {
    let web3
    const key = process.env.REACT_APP_BLOCKNATIVE_API_KEY
    const network_id = 1
    const [currentState, setCurrentState] = React.useState<any>()
    
    React.useEffect(() => {
        console.log(currentState, 'wallet')
    }, [currentState]);

    async function checkWallet() {
        await onboard.walletSelect()
        await onboard.walletCheck()
        const walletState = onboard.getState()
        setCurrentState(walletState)
    }
    const onboard = Onboard({
        dappId: key,
        networkId: network_id,
        walletSelect: {
            wallets: [
                { walletName: 'ronin' }
            ]
        },
        walletCheck: [
            { checkName: 'derivationPath' },
            { checkName: 'connect' },
            { checkName: 'accounts' },
            { checkName: 'network' },
            { checkName: 'balance', minimumBalance: '100000' }
        ],
        subscriptions: {
          wallet: wallet => {
            // instantiate web3 when the user has selected a wallet
            web3 = new Web3(wallet.provider)
            console.log(`${wallet.name} connected!`, wallet)
          }
        }
      })

    return ( 
        <>
            {currentState && currentState.address 
            ?
            <span className="text-sm text-white">Logged in as: <b>{currentState.address}</b> <br /> Balance: <b>{currentState.balance}</b></span>
            :
            <button className="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark" onClick={checkWallet}>
                Login with wallet
            </button>
            }
        </>
    )
    
}
