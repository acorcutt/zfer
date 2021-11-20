import test from 'ava';
import { encode, decode } from './src/index.js';

test('import', (t) => {
  t.is(encode.constructor, Function);
  t.is(decode.constructor, Function);
});

test('encode string', (t) => {
  const str = 'hello world';
  const encoded = encode(str);
  t.is(str, decode(encoded));
});

test('encode special chars', (t) => {
  const str = '😃 ❤️ 跑 © لg ψ';
  const encoded = encode(str);
  t.is(str, decode(encoded));
});

test('encode object', (t) => {
  const obj = { string: 'hello world', num: 10, bool: true, null: null, array: [1, 2, 3] };
  const encoded = encode(obj);
  t.deepEqual(obj, decode(encoded));
});

test('encode compressed', (t) => {
  const str = 'this long text should use compression as its shorter than non-compressed version';
  t.true(encode(str).includes('-'));
});

test('encode non-compressed', (t) => {
  const str = 'hello';
  t.false(encode(str).includes('-'));
});

console.log(encode('Hello'));
