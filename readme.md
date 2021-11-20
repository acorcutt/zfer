# zfer

A url-safe data encoder and decoder with compression.

## Installation

```
npm install zfer
```

```
yarn add zfer
```

```
pnpm add zfer
```

## Usage

```
import { encode, decode } from 'zfer';

const str = encode(obj);
const obj = decode(str);
```

## Example

```
const str = encode({string: 'hello', number: 123, boolean: true, array:['😃 😃 😃 😃 ']});

str == 'j89WRrzyAn0rP7oQ7Th5K9skcwk7WcFonEYIJ-w6PNBFXeI2Ipg5ryyjGrPmNnLKsMLNbgMZA76';

const obj = decode('PBsOVkv5');

obj == 'Hello';
```

## How it works

The object is packed with msgpack and compressed with pako, then the shortest of those buffers is encoded as a base62 url-safe string which can be transfered as part of a url, query string or hash that can be decoded back to an object.
