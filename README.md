# random-float-pro

![npm](https://img.shields.io/npm/v/random-float-pro.svg) ![license](https://img.shields.io/npm/l/random-float-pro.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/random-float-pro.svg)  

Generate a random floating point number

![nodei.co](https://nodei.co/npm/random-float-pro.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/random-float-pro.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/random-float-pro.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/random-float-pro.svg)

![](https://david-dm.org/Prosen-Ghosh/random-float-pro/status.svg)
![](https://david-dm.org/Prosen-Ghosh/random-float-pro/dev-status.svg)

## Features

## Development Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.3 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
# Installation
## npm Install
```npm i random-float-pro```

## Browser Install

### For Development Use
```https://rawgit.com/Prosen-Ghosh/random-float-pro/master/random-float-pro.js```

### For Production Use
```https://cdn.rawgit.com/Prosen-Ghosh/random-float-pro/master/random-float-pro.js```

# Usage

```javascript
const randomFloat = require('random-float-pro');

randomFloat({
	min : 1,
	max : 10
})
//=> 9.908731650177293

randomFloat({
	min : 1,
	max : 10,
	fractionDigit : 2
})
// => 3.83

randomFloat({
	a : 1,
	b : 100,
	c : 5
})
//=> 91.55243

randomFloat({
	min : -100,
	max : -10,
	fractionDigit : 2
})
//=> -27.58
```

# API

#### randomFloat

`randomFloat(options)` Options should be an `object`.
- `min` - Start Number (Random Floating number generates from this range.)
- `max` - End number (Random Floating number generates from till this range.)
- `fractionDigit` - Range (Return a number in fixed point notation).

## Author

Prosen Ghosh

## License
 - **MIT** 
