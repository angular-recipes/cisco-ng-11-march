let f =  (n1: number , n2 : number) : number =>  n1 + n2;

let square = n => n*n;

console.log(square(3));

let sum = f(2,6);

let average = function(n1: number, n2: number, addFunc: Function) {
    return addFunc(n1, n2)/2;
}

let avg = average(3,4, (n1, n2) => n1 + n2);

console.log(avg);


