module.exports = function check(str, bracketsConfig) {
  const pairs = new Map(bracketsConfig);
  const stack = [];
  for (const bracket of str) {
    if (pairs.get(stack.at(-1)) == bracket) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }
  return stack.length == 0;
}
