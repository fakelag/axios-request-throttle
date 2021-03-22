# axios-request-throttle

Throttle axios request-per-second rate with 3 lines of code. The main difference with this module and others like [axios-throttled](https://www.npmjs.com/package/axios-throttled) is that you don't have to create a new axios instance, and by extension don't have to fix imports project-wide. Apply once and every axios.get, post, put, delete etc is throttled.

## Installation
```
yarn add axios-request-throttle
```

or 

```
npm i axios-request-throttle
```

## Usage
```ts
import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';

axiosThrottle.use(axios, { requestsPerSecond: 5 });
```
