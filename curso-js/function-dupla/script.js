function square(x){
    return x * x;
}

function addSquares(a, b){
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));