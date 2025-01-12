function getPercentage(numerator, denominator) {
  if (denominator === 0) {
    //throw new Error('Denominator cannot be zero'); //Option 1: Throw an error
    return NaN; //Option 2: Return NaN to indicate invalid calculation
  }
  return (numerator / denominator) * 100;
}

// Example usage:
let percentage = getPercentage(5, 10);
console.log(percentage); // Output: 50

try{
  percentage = getPercentage(10, 0);
  console.log(percentage); // Output: Error or NaN
} catch (e) {
  console.error("Error:", e.message);
}

percentage = getPercentage(0,10);
console.log(percentage); //Output: 0

percentage = getPercentage(0,0); //potential bug
console.log(percentage); //Output: NaN