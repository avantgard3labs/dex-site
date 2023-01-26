import {useState} from 'react';
import { ethers } from 'ethers';
import './App.css';

function App() {

  const [walletAddress, setWalletAddress] = useState("")
  
  
  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    setWalletAddress(accounts[0])
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    console.log(ethers.utils.formatEther(balance))
    }


  return (
    <div className='Wallet'>
      <div>
        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>Address: {walletAddress}</h3>
      </div>
       
    </div>
  );
}

export default App;
