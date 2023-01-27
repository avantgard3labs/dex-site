import {useState} from 'react';
import { ethers } from 'ethers';
import './App.css';
import contractJson from './contracts/ERC20Factory.json';
import erc20Json from './contracts/ERC20.json';
import mintableJson from './contracts/ERC20Mintable.json';
import cpammJson from './contracts/CPAMM.json';

function App() {

  const [walletAddress, setWalletAddress] = useState("")
  const [signer, setSigner] = useState()
  const [contract, setContract] = useState()
  const [token1Address, settoken1Address] = useState("")
  const [token2Address, settoken2Address] = useState("")
  const [token1Balance, settoken1Balance] = useState("")
  const [token2Balance, settoken2Balance] = useState("")
  const [token1, setToken1] = useState()
  const [token2, setToken2] = useState()
  const [inputMint1, setInputMint1] = useState('');
  const [inputMint2, setInputMint2] = useState('');
  const [CPAMMContract, setCPAMMContract] = useState()




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

    //CPAMM contract connection
    const contractCPAMMAdd = "0x39BEDc6d570B542B3B044e59C3d544F9D6C8AD22"
    const contractCPAMM = new ethers.Contract(contractCPAMMAdd, cpammJson.abi, signer, token1Address, token2Address)
    setCPAMMContract(contractCPAMM)
  }

  async function tokenBalance() {
    
    //Token1
    const token1 = new ethers.Contract(token1Address, erc20Json.abi, signer)
    setToken1(token1)
    const token1Bal = await token1.balanceOf(walletAddress)
    const token1Balance = ethers.utils.formatEther(token1Bal)
    const balanceWithoutDecimals1 = parseFloat(token1Balance).toFixed(0)
    settoken1Balance(balanceWithoutDecimals1)
    
    //Token2
    const token2 = new ethers.Contract(token2Address, erc20Json.abi, signer)
    setToken2(token2)
    const token2Bal = await token2.balanceOf(walletAddress)
    const token2Balance = ethers.utils.formatEther(token2Bal)
    const balanceWithoutDecimals2 = parseFloat(token2Balance).toFixed(0)
    settoken2Balance(balanceWithoutDecimals2)
  }

  
  //Mint token1
  function handleChange1(event) {
    setInputMint1(event.target.value);
  }
  function handleSubmit1() {
    mintToken1(inputMint1);
  }
  async function mintToken1() {
    const token1Mint =new ethers.Contract(token1Address,mintableJson.abi, signer)
    const inputMint1InWei = ethers.utils.parseUnits(inputMint1);
    await token1Mint.mint(walletAddress, inputMint1InWei);
  }

  //Mint token2
  function handleChange2(event) {
    setInputMint2(event.target.value);
  }
  function handleSubmit2() {
    mintToken2(inputMint2);
  }
  async function mintToken2() {
    const token2Mint =new ethers.Contract(token2Address,mintableJson.abi, signer)
    const inputMint2InWei = ethers.utils.parseUnits(inputMint2);
    await token2Mint.mint(walletAddress, inputMint2InWei);
  }


  
  

  return (
    <div className='Wallet'>
      <div className='wallet'>
        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>Address: {walletAddress}</h3>
      </div>
      <div className='mint'> 
        <h3>To mint tokens:</h3>
        
        <h4>Token1</h4>
        <input type="text" value={inputMint1} onChange={handleChange1}/>
        <button onClick={handleSubmit1}>Mint</button>

        <h4>Token1</h4>
        <input type="text" value={inputMint2} onChange={handleChange2}/>
        <button onClick={handleSubmit2}>Mint</button>

      </div>
      <div className='token'> 
        <button onClick={tokenBalance}>Balance</button>
        <h3>The current token balance in your account are:</h3>
        <h4>TK1 Balance: {token1Balance}</h4>
        <h4>TK2 Balance: {token2Balance}</h4>
      </div>
      
    </div>
  );
}

export default App;
