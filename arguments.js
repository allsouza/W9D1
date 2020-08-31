function sum(...nums) {
    let total = 0;
    nums.forEach(function(num) {
        total += num;
    });
    return total;
}

// console.log(sum(1, 2, 3, 4, 5));
// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;

// ------------------------------------------------------------------------------------------------------------------------

// Function.prototype.myBind = function (ctx) {
//     const fn = this;
//     let args = Array.from(arguments);
//     debugger
//     return function() {
//         debugger
//         args = args.concat(Array.from(arguments));
//         return fn.apply(ctx, args.slice(1,args.length));
//     };
// }

Function.prototype.myBind = function (ctx, ...bindArgs) {
    const fn = this;
    return function(...callArgs) {
         return fn.apply(ctx, bindArgs.concat(callArgs));
    };
}

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


// -----------------------------------------------------------------------------------------------------------------------
// use this as a callback
Function.prototype.curry = function(numArgs) {
    const numbers = [];
    function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs){
            let sum = numbers.reduce( function(acc, el){ // (acc, el) => acc + el;
                return acc + el;
            })
            return sum;
        }
        else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  console.log(sumThree(4, 20, 6)); // == 30
  
  // you'll write `Function#curry`!
  let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
  console.log(f1 = f1(4)); // [Function]
  console.log(f1 = f1(20)); // [Function]
  console.log(f1 = f1(6)); // = 30
  
  // or more briefly:
  console.log(sumThree.curry(3)(4)(20)(6)); // == 30

