# random-float-pro
Generate a random float

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