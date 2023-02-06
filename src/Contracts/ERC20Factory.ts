/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ERC20FactoryInterface extends utils.Interface {
  functions: {
    "tokens(uint256)": FunctionFragment;
    "createToken(string,string)": FunctionFragment;
    "getTokens()": FunctionFragment;
    "getAddressForSymbol(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "tokens"
      | "createToken"
      | "getTokens"
      | "getAddressForSymbol"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createToken",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getTokens", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAddressForSymbol",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAddressForSymbol",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC20Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20FactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTokens(overrides?: CallOverrides): Promise<[string[]]>;

    getAddressForSymbol(
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  tokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createToken(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTokens(overrides?: CallOverrides): Promise<string[]>;

  getAddressForSymbol(
    _symbol: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getTokens(overrides?: CallOverrides): Promise<string[]>;

    getAddressForSymbol(
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getAddressForSymbol(
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAddressForSymbol(
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}