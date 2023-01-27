import {useState} from 'react';
import { ethers } from 'ethers';
import './App.css';
import contractJson from './contracts/ERC20Factory.json';

function App() {

  const [walletAddress, setWalletAddress] = useState("")
  const [signer, setSigner] = useState()
  const [contract, setContract] = useState()
  const [token1Address, settoken1Address] = useState("")
  const [token2Address, settoken2Address] = useState("")
  const [token1Balance, settoken1Balance] = useState("")

  
  
  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    await setWalletAddress(accounts[0])
    const signer = provider.getSigner();
    setSigner(signer);

    const contractAddress="0x0e2F3f475800302C6b024669009eDb1F58f44f93"
    const contract = new ethers.Contract(contractAddress,contractJson.abi,signer)
    setContract(contract)
    const token1Address = await contract.getAddressForSymbol("TK1")
    const token2Address = await contract.getAddressForSymbol("TK2")
    settoken1Address(token1Address)
    settoken2Address(token2Address)
    
  }

  async function tokenBalance() {
    
  }
    


  return (
    <div className='Wallet'>
      <div className='wallet'>
        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>Address: {walletAddress}</h3>
      </div>
      <div className='token'> 
        <button onClick={tokenBalance}>Balance</button>
        <h3>The current token balance in your account are:</h3>
        <h4>TK1 Balance: </h4>
        <h4>TK2 Balance: </h4>
      </div>
       
    </div>
  );
}

export default App;
