import PromiseThrottle from 'promise-throttle';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

type Config = {
	requestsPerSecond: number;
	promiseImplementation?: PromiseConstructorLike;
};

const use = (axios: AxiosInstance, cfg: Config) => {
	const promiseThrottle = new PromiseThrottle({
		requestsPerSecond: cfg.requestsPerSecond,
		promiseImplementation: cfg.promiseImplementation,
	});

	const wrap = async (config: AxiosRequestConfig) => config;

	axios.interceptors.request.use((config: AxiosRequestConfig) => {
		return promiseThrottle.add(wrap.bind(this, config));
	});
};

export { use };
export default { use };
