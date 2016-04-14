# node-jandan [![NPM version](https://img.shields.io/npm/v/node-jandan.svg)](https://npmjs.com/package/node-jandan) [![NPM downloads](https://img.shields.io/npm/dm/node-jandan.svg)](https://npmjs.com/package/node-jandan) [![Build Status](https://img.shields.io/circleci/project/egoist/node-jandan/master.svg)](https://circleci.com/gh/egoist/node-jandan)

> Jandan.net Node.js API

## Install

```bash
$ npm install --save node-jandan
```

## Usage

```js
import {ooxx, boring} from 'node-jandan'

(async function () {
  const ooxxPics = await ooxx({page: 2})
  const boringPics = await boring({page: 3})
})()
```

Example result: [ooxx](http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=1) | [boring](http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_pic_comments&page=1)

## License

MIT © [EGOIST](https://github.com/egoist)
