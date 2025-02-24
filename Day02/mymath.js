let sum=(a,b) => {return a+b};
let diff=(a,b) => {return a-b};
let mul=(a,b) => {return a*b};
let div=(a,b) => {return a/b};

// module.exports={sum,diff,mul,div};

const obj = {
    sum,
    mul,
    diff,
    div
}

module.exports = obj;