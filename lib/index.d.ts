import { AxiosInstance } from 'axios';
declare type Config = {
    requestsPerSecond: number;
    promiseImplementation?: PromiseConstructorLike;
};
declare const use: (axios: AxiosInstance, cfg: Config) => void;
export { use, };
