import { EthereumProvider as Provider } from "./ethereum-provider/EthereumProvider";
export const EthereumProvider = Provider;
export type { EthereumProviderOptions, RpcEvent, RpcMethod } from "./ethereum-provider/EthereumProvider";
export * from "./ethereum-provider/constants/rpc";
export default Provider;