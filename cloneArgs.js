
function cloneArgs(args) {
  var clone = [];
  var length = args.length;
  var index = -1;
  while (++index < length) {
    clone[index] = args[index];
  }
  return clone;
}

module.exports = cloneArgs;
