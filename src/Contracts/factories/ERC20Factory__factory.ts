/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20Factory, ERC20FactoryInterface } from "../ERC20Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "createToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "getAddressForSymbol",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506122d7806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c80632f2f2d56146200005757806348936c5514620000775780634f64b2be14620000ad578063aa6ca80814620000e3575b600080fd5b6200007560048036038101906200006f919062000470565b62000105565b005b6200009560048036038101906200008f9190620004fe565b620002cd565b604051620000a4919062000598565b60405180910390f35b620000cb6004803603810190620000c59190620005f0565b6200031a565b604051620000da919062000598565b60405180910390f35b620000ed6200035a565b604051620000fc9190620006f0565b60405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff16600185856040516200013192919062000757565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614620001b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001b090620007f9565b60405180910390fd5b600084848484604051620001cd90620003ea565b620001dc94939291906200085f565b604051809103906000f080158015620001f9573d6000803e3d6000fd5b50905060008190506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600185856040516200027992919062000757565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b600060018383604051620002e392919062000757565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b600081815481106200032b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000805480602002602001604051908101604052809291908181526020018280548015620003e057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831162000395575b5050505050905090565b611a03806200089f83390190565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126200042a576200042962000402565b5b8235905067ffffffffffffffff8111156200044a576200044962000407565b5b6020830191508360018202830111156200046957620004686200040c565b5b9250929050565b600080600080604085870312156200048d576200048c620003f8565b5b600085013567ffffffffffffffff811115620004ae57620004ad620003fd565b5b620004bc8782880162000411565b9450945050602085013567ffffffffffffffff811115620004e257620004e1620003fd565b5b620004f08782880162000411565b925092505092959194509250565b60008060208385031215620005185762000517620003f8565b5b600083013567ffffffffffffffff811115620005395762000538620003fd565b5b620005478582860162000411565b92509250509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005808262000553565b9050919050565b620005928162000573565b82525050565b6000602082019050620005af600083018462000587565b92915050565b6000819050919050565b620005ca81620005b5565b8114620005d657600080fd5b50565b600081359050620005ea81620005bf565b92915050565b600060208284031215620006095762000608620003f8565b5b60006200061984828501620005d9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b620006598162000573565b82525050565b60006200066d83836200064e565b60208301905092915050565b6000602082019050919050565b6000620006938262000622565b6200069f81856200062d565b9350620006ac836200063e565b8060005b83811015620006e3578151620006c788826200065f565b9750620006d48362000679565b925050600181019050620006b0565b5085935050505092915050565b600060208201905081810360008301526200070c818462000686565b905092915050565b600081905092915050565b82818337600083830152505050565b60006200073c838562000714565b93506200074b8385846200071f565b82840190509392505050565b6000620007668284866200072e565b91508190509392505050565b600082825260208201905092915050565b7f4552433230466163746f72793a20544f4b454e20414c5245414459204558495360008201527f5453000000000000000000000000000000000000000000000000000000000000602082015250565b6000620007e160228362000772565b9150620007ee8262000783565b604082019050919050565b600060208201905081810360008301526200081481620007d2565b9050919050565b6000601f19601f8301169050919050565b60006200083a838562000772565b9350620008498385846200071f565b62000854836200081b565b840190509392505050565b600060408201905081810360008301526200087c8186886200082c565b90508181036020830152620008938184866200082c565b90509594505050505056fe60806040523480156200001157600080fd5b5060405162001a0338038062001a038339818101604052810190620000379190620001fa565b818181600390816200004a9190620004ca565b5080600490816200005c9190620004ca565b5050505050620005b1565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d08262000085565b810181811067ffffffffffffffff82111715620000f257620000f162000096565b5b80604052505050565b60006200010762000067565b9050620001158282620000c5565b919050565b600067ffffffffffffffff82111562000138576200013762000096565b5b620001438262000085565b9050602081019050919050565b60005b838110156200017057808201518184015260208101905062000153565b60008484015250505050565b6000620001936200018d846200011a565b620000fb565b905082815260208101848484011115620001b257620001b162000080565b5b620001bf84828562000150565b509392505050565b600082601f830112620001df57620001de6200007b565b5b8151620001f18482602086016200017c565b91505092915050565b6000806040838503121562000214576200021362000071565b5b600083015167ffffffffffffffff81111562000235576200023462000076565b5b6200024385828601620001c7565b925050602083015167ffffffffffffffff81111562000267576200026662000076565b5b6200027585828601620001c7565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d257607f821691505b602082108103620002e857620002e76200028a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000313565b6200035e868362000313565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003ab620003a56200039f8462000376565b62000380565b62000376565b9050919050565b6000819050919050565b620003c7836200038a565b620003df620003d682620003b2565b84845462000320565b825550505050565b600090565b620003f6620003e7565b62000403818484620003bc565b505050565b5b818110156200042b576200041f600082620003ec565b60018101905062000409565b5050565b601f8211156200047a576200044481620002ee565b6200044f8462000303565b810160208510156200045f578190505b620004776200046e8562000303565b83018262000408565b50505b505050565b600082821c905092915050565b60006200049f600019846008026200047f565b1980831691505092915050565b6000620004ba83836200048c565b9150826002028217905092915050565b620004d5826200027f565b67ffffffffffffffff811115620004f157620004f062000096565b5b620004fd8254620002b9565b6200050a8282856200042f565b600060209050601f8311600181146200054257600084156200052d578287015190505b620005398582620004ac565b865550620005a9565b601f1984166200055286620002ee565b60005b828110156200057c5784890151825560018201915060208501945060208101905062000555565b868310156200059c578489015162000598601f8916826200048c565b8355505b6001600288020188555050505b505050505050565b61144280620005c16000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101d357806395d89b4114610203578063a457c2d714610221578063a9059cbb14610251578063dd62ed3e14610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c16102b1565b6040516100ce9190610cb3565b60405180910390f35b6100f160048036038101906100ec9190610d6e565b610343565b6040516100fe9190610dc9565b60405180910390f35b61010f610366565b60405161011c9190610df3565b60405180910390f35b61013f600480360381019061013a9190610e0e565b610370565b60405161014c9190610dc9565b60405180910390f35b61015d61039f565b60405161016a9190610e7d565b60405180910390f35b61018d60048036038101906101889190610d6e565b6103a8565b60405161019a9190610dc9565b60405180910390f35b6101bd60048036038101906101b89190610d6e565b6103df565b6040516101ca9190610dc9565b60405180910390f35b6101ed60048036038101906101e89190610e98565b6103f5565b6040516101fa9190610df3565b60405180910390f35b61020b61043d565b6040516102189190610cb3565b60405180910390f35b61023b60048036038101906102369190610d6e565b6104cf565b6040516102489190610dc9565b60405180910390f35b61026b60048036038101906102669190610d6e565b610546565b6040516102789190610dc9565b60405180910390f35b61029b60048036038101906102969190610ec5565b610569565b6040516102a89190610df3565b60405180910390f35b6060600380546102c090610f34565b80601f01602080910402602001604051908101604052809291908181526020018280546102ec90610f34565b80156103395780601f1061030e57610100808354040283529160200191610339565b820191906000526020600020905b81548152906001019060200180831161031c57829003601f168201915b5050505050905090565b60008061034e6105f0565b905061035b8185856105f8565b600191505092915050565b6000600254905090565b60008061037b6105f0565b90506103888582856107c1565b61039385858561084d565b60019150509392505050565b60006012905090565b6000806103b36105f0565b90506103d48185856103c58589610569565b6103cf9190610f94565b6105f8565b600191505092915050565b60006103eb8383610ac3565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461044c90610f34565b80601f016020809104026020016040519081016040528092919081815260200182805461047890610f34565b80156104c55780601f1061049a576101008083540402835291602001916104c5565b820191906000526020600020905b8154815290600101906020018083116104a857829003601f168201915b5050505050905090565b6000806104da6105f0565b905060006104e88286610569565b90508381101561052d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105249061103a565b60405180910390fd5b61053a82868684036105f8565b60019250505092915050565b6000806105516105f0565b905061055e81858561084d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610667576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065e906110cc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cd9061115e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107b49190610df3565b60405180910390a3505050565b60006107cd8484610569565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108475781811015610839576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610830906111ca565b60405180910390fd5b61084684848484036105f8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b39061125c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361092b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610922906112ee565b60405180910390fd5b610936838383610c19565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b390611380565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610aaa9190610df3565b60405180910390a3610abd848484610c1e565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b29906113ec565b60405180910390fd5b610b3e60008383610c19565b8060026000828254610b509190610f94565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c019190610df3565b60405180910390a3610c1560008383610c1e565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c5d578082015181840152602081019050610c42565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c8582610c23565b610c8f8185610c2e565b9350610c9f818560208601610c3f565b610ca881610c69565b840191505092915050565b60006020820190508181036000830152610ccd8184610c7a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d0582610cda565b9050919050565b610d1581610cfa565b8114610d2057600080fd5b50565b600081359050610d3281610d0c565b92915050565b6000819050919050565b610d4b81610d38565b8114610d5657600080fd5b50565b600081359050610d6881610d42565b92915050565b60008060408385031215610d8557610d84610cd5565b5b6000610d9385828601610d23565b9250506020610da485828601610d59565b9150509250929050565b60008115159050919050565b610dc381610dae565b82525050565b6000602082019050610dde6000830184610dba565b92915050565b610ded81610d38565b82525050565b6000602082019050610e086000830184610de4565b92915050565b600080600060608486031215610e2757610e26610cd5565b5b6000610e3586828701610d23565b9350506020610e4686828701610d23565b9250506040610e5786828701610d59565b9150509250925092565b600060ff82169050919050565b610e7781610e61565b82525050565b6000602082019050610e926000830184610e6e565b92915050565b600060208284031215610eae57610ead610cd5565b5b6000610ebc84828501610d23565b91505092915050565b60008060408385031215610edc57610edb610cd5565b5b6000610eea85828601610d23565b9250506020610efb85828601610d23565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f4c57607f821691505b602082108103610f5f57610f5e610f05565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f9f82610d38565b9150610faa83610d38565b9250828201905080821115610fc257610fc1610f65565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611024602583610c2e565b915061102f82610fc8565b604082019050919050565b6000602082019050818103600083015261105381611017565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110b6602483610c2e565b91506110c18261105a565b604082019050919050565b600060208201905081810360008301526110e5816110a9565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611148602283610c2e565b9150611153826110ec565b604082019050919050565b600060208201905081810360008301526111778161113b565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111b4601d83610c2e565b91506111bf8261117e565b602082019050919050565b600060208201905081810360008301526111e3816111a7565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611246602583610c2e565b9150611251826111ea565b604082019050919050565b6000602082019050818103600083015261127581611239565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112d8602383610c2e565b91506112e38261127c565b604082019050919050565b60006020820190508181036000830152611307816112cb565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061136a602683610c2e565b91506113758261130e565b604082019050919050565b600060208201905081810360008301526113998161135d565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113d6601f83610c2e565b91506113e1826113a0565b602082019050919050565b60006020820190508181036000830152611405816113c9565b905091905056fea2646970667358221220795f7d9131463cb41f76d00eeba77f9733555f8255f8fbbddbb3c9f07ff771b964736f6c63430008110033a26469706673582212209a5fac907d3a8abf1e93a2b768332b3ebf57a82c7e09917174c2ed93fb5ae69964736f6c63430008110033";

type ERC20FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Factory__factory extends ContractFactory {
  constructor(...args: ERC20FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Factory> {
    return super.deploy(overrides || {}) as Promise<ERC20Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Factory {
    return super.attach(address) as ERC20Factory;
  }
  override connect(signer: Signer): ERC20Factory__factory {
    return super.connect(signer) as ERC20Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20FactoryInterface {
    return new utils.Interface(_abi) as ERC20FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Factory {
    return new Contract(address, _abi, signerOrProvider) as ERC20Factory;
  }
}