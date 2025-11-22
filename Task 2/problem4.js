function digitProductSum(n1, n2) {
  let s1 = String(n1).split("").reverse();
  let s2 = String(n2).split("").reverse();

  let sum = 0;


  let maxLen = Math.max(s1.length, s2.length);

  for (let i = 0; i < maxLen; i++) {
    let d1 = parseInt(s1[i] || 0);
    let d2 = parseInt(s2[i] || 0);
    sum += d1 * d2;
  }

  return sum;
}


console.log(digitProductSum(6, 34));   
console.log(digitProductSum(123, 456)); 
