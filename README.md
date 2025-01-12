# Division by Zero Bug in Percentage Calculation

This repository demonstrates a common bug in JavaScript: the improper handling of division by zero.  The `getPercentage` function attempts to calculate a percentage, but it silently returns 0 when the denominator is zero.  This can hide underlying errors and lead to unexpected results.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected implementation.

## Bug
The primary issue is the lack of robust error handling when the denominator is zero.  While returning 0 prevents exceptions, it may not be the most appropriate response, as it could mask a more significant problem in the data.