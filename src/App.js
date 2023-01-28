import {useState} from 'react';
import { ethers } from 'ethers';
import './App.css';
import contractJson from './contracts/ERC20Factory.json';
import erc20Json from './contracts/ERC20.json';
import mintableJson from './contracts/ERC20Mintable.json';
import cpammJson from './contracts/CPAMM.json';

function App() {

  //Address
  const contractAddress="0x1Fb1173a01c4B41074B623c498B22cD33Ef3a5Ce"
  const contractCPAMMAdd = "0xF2d45bC4D63327ada53Fb743Ae16c9a59714f054"
  //wallet and contracts
  const [walletAddress, setWalletAddress] = useState("")
  const [signer, setSigner] = useState()
  const [contract, setContract] = useState()
  const [CPAMMContract, setCPAMMContract] = useState()
  //token
  const [token1Address, settoken1Address] = useState("")
  const [token2Address, settoken2Address] = useState("")
  const [token1Balance, settoken1Balance] = useState("")
  const [token2Balance, settoken2Balance] = useState("")
  const [token1, setToken1] = useState()
  const [token2, setToken2] = useState()
  //MINT
  const [inputMint1, setInputMint1] = useState('');
  const [inputMint2, setInputMint2] = useState('');
  //ADDLiquidity
  const [liq1, setLiq1] = useState('')
  const [liq2, setLiq2] = useState('')





  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    await setWalletAddress(accounts[0])
    const signer = provider.getSigner();
    await setSigner(signer);

    
    const contract = new ethers.Contract(contractAddress,contractJson.abi,signer)
    await setContract(contract)
    const token1Address = await contract.getAddressForSymbol("TK1")
    const token2Address = await contract.getAddressForSymbol("TK2")
    await settoken1Address(token1Address)
    await settoken2Address(token2Address)

    //CPAMM contract connection
    const contractCPAMM = new ethers.Contract(contractCPAMMAdd, cpammJson.abi, signer, token1Address, token2Address)
    await setCPAMMContract(contractCPAMM)
  }

  async function tokenBalance() {
    
    //Token1
    const token1 = new ethers.Contract(token1Address, erc20Json.abi, signer)
    setToken1(token1)
    const token1Bal = await token1.balanceOf(walletAddress)
    const token1Balance = ethers.utils.formatUnits(token1Bal,0)
    settoken1Balance(token1Balance)
    
    //Token2
    const token2 = new ethers.Contract(token2Address, erc20Json.abi, signer)
    setToken2(token2)
    const token2Bal = await token2.balanceOf(walletAddress)
    const token2Balance = ethers.utils.formatUnits(token2Bal,0)
    settoken2Balance(token2Balance)
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
    const inputMint1Format = ethers.utils.parseUnits(inputMint1,0);
    await token1Mint.mint(walletAddress, inputMint1Format);
  }

  //Mint token2
  function handleChange2(event) {
    setInputMint2(event.target.value);
  }
  function handleSubmit2() {
    mintToken2();
  }
  async function mintToken2() {
    const token2Mint =new ethers.Contract(token2Address,mintableJson.abi, signer)
    const inputMint2Format = ethers.utils.parseUnits(inputMint2,0);
    await token2Mint.mint(walletAddress, inputMint2Format);
  }


  //Add liquidity
  // function InputAddLiq1(event) {
  //   setLiq1(event.target.value);
  // }
  // function InputAddLiq2(event) {
  //   setLiq2(event.target.value);
  // }
  // function submitAddLiq(event) {
  //   event.preventDefault();
  //   addLiquid();
  // }

  // async function addLiquid() {
  //   const liq1Format = ethers.utils.parseUnits(liq1);
  //   const liq2Format = ethers.utils.parseUnits(liq2);
  //   await token1.approve(contractCPAMMAdd,liq1Format)
  //   await token2.approve(contractCPAMMAdd,liq2Format)
  //   await CPAMMContract.addLiquidity(liq1Format,liq2Format)
    

  // }
  
  

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

        <h4>Token2</h4>
        <input type="text" value={inputMint2} onChange={handleChange2}/>
        <button onClick={handleSubmit2}>Mint</button>

      </div>
      <div className='token'> 
        <button onClick={tokenBalance}>Balance</button>
        <h3>The current token balance in your account are:</h3>
        <h4>TK1 Balance: {token1Balance}</h4>
        <h4>TK2 Balance: {token2Balance}</h4>
      </div>
      
      {/* <div className='addLiq'> 
          <h3>Add Liquidity</h3>
          <form onSubmit={submitAddLiq}>
            <h4>Token1 Amount:</h4>
            <input type="text" value={liq1} onChange={InputAddLiq1} />
          <br/><br/>
            
            <h4>Token2 Amount:</h4>
            <input type="text" value={liq2} onChange={InputAddLiq2} />
          <br/><br/>
          
          <button type="submit">Submit</button>
          </form>
      </div> */}
      
    </div>
  );
}

export default App;
