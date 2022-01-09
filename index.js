// Easy 1, add 5 nums
const add = (...numRest) => numRest.reduce((a,b) => a+b,0);

//Easy 2, check odd or even
const checkIsEven = num => num % 2 === 0 ? "even" : "odd";
