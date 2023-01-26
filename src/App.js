import {useState} from 'react';
import { ethers } from 'ethers';
import './App.css';
import contractJson from './contracts/ERC20Factory.json';

function App() {

  const [walletAddress, setWalletAddress] = useState("")
  
  
  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    setWalletAddress(accounts[0])
    const signer = provider.getSigner();

    const contractAddress="0xFF3EeEB33FA028EAa7cbcd518AE01563ce81717A"
    const contract = new ethers.Contract(contractAddress,contractJson.abi,signer)

    const token1Address = await contract.getAddressForSymbol("TK1")
    const token2Address = await contract.getAddressForSymbol("TK2")

 

 }
    


  return (
    <div className='Wallet'>
      <div className='wallet'>
        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>Address: {walletAddress}</h3>
      </div>
      <div className='token'>
        
      </div>
       
    </div>
  );
}

export default App;
