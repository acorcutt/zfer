import { deflate, inflate } from 'pako';
import { encode as pack, decode as unpack } from '@msgpack/msgpack';
import { encode as atob, decode as btoa } from './base62.js';

export function encode(obj) {
  const packed = pack(obj);
  const compressed = deflate(packed);

  const packed62 = atob(packed);
  const compressed62 = atob(compressed);

  if (packed62.length < compressed62.length) {
    // If compressed is bigger then just use packed
    return packed62;
  } else {
    // Splice a '-' into the middle of the compressed string
    const mid = Math.ceil(compressed62.length / 2);
    return compressed62.slice(0, mid) + '-' + compressed62.slice(mid);
  }
}

export function decode(str) {
  if (str.includes('-')) {
    return unpack(inflate(btoa(str.replace('-', ''))));
  } else {
    return unpack(btoa(str));
  }
}
