/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {      
  let partner = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i)
    if (partner[curr]) {
        stack.push(partner[curr]);
    } else {
      if (stack.pop() !== curr) {
          return false;
      }
    }
  }

  return stack.length === 0
};