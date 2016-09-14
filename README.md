
# cloneArgs v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Takes an `arguments` object, spits out an `[]` clone.

```js
cloneArgs = require('cloneArgs');

function wat() {
  return cloneArgs(arguments);
}

var args = wat(1, 2, 3) // => [1, 2, 3]
```

**But why?** Because using `Array.prototype.slice` on an `arguments` object
makes the containing function non-optimizeable.
