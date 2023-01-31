//Q1
   function foo(){
    console.log("hello")
   };
   foo();

  //Q2 
   function add()
    let a=3;
    let b=4;
    let c=7;
    console.log(a+b+c);
   
   
// Q3   

const Arrowfun=()=>{
    console.log("Arrow function.")
}
Arrowfun();
//ans:-arrow function

//Q4

//Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
//ans-undefined

//Q5
//Print output: 

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//ans- 21
      //undefined

//Q6

// Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};
//ans-20,40

//Q7

//Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    
    var count=1;
for(let i=n; i>0;i--){
    count *= i;
}
return count;
}
const facto=factorial(5);
console.log(facto)
//ans:- 120


























//Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    
    var count=1;
for(let i=n; i>0;i--){
    count *= i;
}
return count;
}
const facto=factorial(5);
console.log(facto)
//ans:- 120