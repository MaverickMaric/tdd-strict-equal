/* eslint-disable eqeqeq */
// if first input exactly equals second input, return true 
// (do not use === op)
/*const strictEquals = (a, b) => {
  if (a !== b) return false
  else return true
}*/

/*  Traditional function
function strictEquals(a, b) {
    if (a !== b)
  return false;
    else
  return true;
}
 */

function strictEquals(a, b) {
  if (typeof a != typeof b) return false
  return (a == b)
}

module.exports = strictEquals
