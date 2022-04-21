// a brute force solution to find substring
function getIndexOfSubString(str, subStr) {
  // an empty string is always a substring
  if (!subStr) {
    return 0;
  }
  for (let i = 0; i < str.length; i++) {
    let j = 0;
    let k = i;
    for (; j < subStr.length; j++, k++) {
      if (!(str[k] === subStr[j])) {
        break;
      }
    }
    if (j === subStr.length) {
      return i;
    }
  }
  return -1;
}
