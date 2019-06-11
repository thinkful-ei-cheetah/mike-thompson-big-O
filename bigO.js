// 1a. Big O of O(1)
// 1b. Big O of O(n)
// 2. Big O of O(1), because it is constant, it is going over one 'if' statement
// 3. Big O of O(n^2), because it has nested 'for' loop
// 4. Big O of O(n), because it looped over the array once
// 5. Big O of O(n), because it looped over the array once
// 6. Big O of O(n^2), because it has nested 'for' loop
// 7. Big O of O(n), because it looped over the array once and is the longest delay
// 8. Big O of O(log(n)), because there are some remainer or fraction of input 
//    remaining in each iterations
// 9. Big O of O(1), because its a singular element in an array
// 10. Big O of O(n), because approaches 1 since anything less than two or 
//     not divisible by 1 will be 1 and it's most likely that n will be divisible 
//     by 1 < i < 10 unless it's a prime number, which is unlikely

// 11. Tower of Hanoi
function TOH(disc, pillars, src, dest, spare) {
  if(disc === 1) {
    pillars = move(pillars, src, dest)
  } 
  else {
    TOH(disc - 1, pillars, src, spare, dest)
    pillars = move(pillars, src, dest)
    TOH(disc - 1, pillars, spare, dest, src)
  }
  return pillars
}

function move(pillars, src, dest) {
  console.log(`Move ${src} to ${dest}`)
  pillars[dest].unshift(pillars[src].shift())
  return pillars
}
pillars = {'a': [1, 2, 3], 'b': [], 'c': []}
TOH(3, pillars, 'a', 'c', 'b')
console.log(pillars)


// 12 iterative versions
function sheepJump(n) {
  for(let i = 0; i < n; i++) {
    if(i < n) {
      console.log(`${n - i}: Another sheep jump over the fence`)
    } else {
      console.log('All sheeps have jumped over the fence')
    }
  }
}
// sheepJump(4);
// 14-1: O(n), linear: depends on one value of variable


function pwrCalc(int, pwr) {
  if(pwr < 0) {
    return 'exponent should be >= 0';
  }
  let prod = 1;
  while(pwr > 0) {
    prod = int * prod;
    pwr--;
  }
  return prod;
}
// console.log(pwrCalc(2, 4));
// console.log(pwrCalc(10, 2));
// 14-2: O(n), linear: depends on one value of variables


function revString(str) {
  let revStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    revStr += str.slice(i, i + 1);
  }
  return revStr;
}
// console.log(revString('hello'));
// 14-3: O(n), linear: depends on the length of string


function triNumb(n) {
  let sum = 0;
  for(let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}
// console.log(triNumb(5))
// 14-4: O(n), linear: depends on one value of variable


function strSplit(str, sep) {
  let splitstr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== sep) {
      splitstr += str.slice(i, i + 1);
    }
  } 
  return splitstr;
}
// console.log(strSplit('02/20/2020', '/'));
// 14-5: O(n), linear: depends on one value and length of variables


function fib(n) {
  let result = [];
  for(let i = 1; i <= n; i++) {
    if(i === 1) {
      result.push(0);
    } else if(i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result.pop();
}
// console.log(fib(7));
// console.log(fib(8));
// 14-6: O(n^2), polymonial: ???


function factorial(n) {
  let result = 1;
  for(let i = 1; i <= n + 1; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorial(4));
// 14-7: O(n), linear: depends on one value of variable


// 13. Recursive Big O
function countSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
    return '';
  }
  console.log(`${num}: Another sheep jumped over the fence`);
  countSheep(num - 1);
}
// countSheep(3);
// 13-1: O(n), linear: the function depends on how large the input value is

function powerCalculator(base, exp) {
  if (exp === 0) {
    return 1;
  }
  const exponent = base * powerCalculator(base, exp - 1);
  return exponent;
}
// console.log(powerCalculator(2, 7));
// 13-2: O(n), linear: the function depends on the input values


function revString(str) {
  if (str === '') {
    return '';
  }
  const newChar = str[str.length - 1];
  return newChar + revString(str.slice(0, str.length - 1));
}
// console.log(revString('hello'));
// 13-3: O(n), linear: the function depends on how long the string is


function triangularNumber(base) {
  if (base === 1) {
    return 1;
  }
  return base + triangularNumber(base - 1);
}
// console.log(triangularNumber(4));
// console.log(triangularNumber(5));
// 13-4: O(n), linear: the function will only be called as many times 
//       as base is equal to


function stringSplitter(str, limit) {
  if (str === '') {
    return '';
  }
  const newChar = str[0];
  if (str[0] === limit) {
    return stringSplitter(str.slice(1), limit);
  } else {
    return newChar + stringSplitter(str.slice(1), limit);
  }
}
// console.log(stringSplitter('0/2/2/0/20/2/0', '/'));
// 13-5: O(n), linear: function runs equal amount of times as the seporator 
//       in a string


function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(4));
// 13-6: O(n^2), polynomial: it is dependent on both the size of 'n' and 
//       the recursion is called twice


function factorial(n){
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));
// 13-7: O(n), linear: function depends on the size of value 'n'


const maze = function(labyrinth, position=0, row, col, direction='S',path){
  if(col<0 || row < 0){
      return;
  }
  if(col>=labyrinth[0].length || row>=labyrinth.length){
      return;
  }
 
  path[position] = direction;
  position++;

  if (labyrinth[row][col] === 'e'){
      PrintPath(path, 1, position - 1);
      return;
  }
  if (labyrinth[row][col] === ' ') {
      // The current cell is free. Mark it as visited
      labyrinth[row][col] = 's';
      // Invoke recursion to explore all possible directions
      maze(labyrinth,position,row, col - 1, 'L',path); // left
      maze(labyrinth,position,row - 1, col, 'U',path); // up
      maze(labyrinth,position,row, col + 1, 'R',path); // right
      maze(labyrinth,position,row + 1, col, 'D',path); // down
      // Mark back the current cell as free
      //lab[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;

}
const PrintPath = function (path, startPos, endPos){
  console.log('Found path to the exit: ');
  console.log(path);
}
//
// 13-8:


const mazeAll = function(labyrinth, position=0, row, col, direction='S',path){
  if(col<0 || row < 0){
      return;
  }
  if(col>=labyrinth[0].length || row>=labyrinth.length){
      return;
  }
 
  path[position] = direction;
  position++;

  if (labyrinth[row][col] === 'e'){
      PrintPath(path, 1, position - 1);
      return;
  }
  if (labyrinth[row][col] === ' ') {
      // The current cell is free. Mark it as visited
      labyrinth[row][col] = 's';
      // Invoke recursion to explore all possible directions
      mazeAll(labyrinth,position,row, col - 1, 'L',path); // left
      mazeAll(labyrinth,position,row - 1, col, 'U',path); // up
      mazeAll(labyrinth,position,row, col + 1, 'R',path); // right
      mazeAll(labyrinth,position,row + 1, col, 'D',path); // down
      // Mark back the current cell as free
      labyrinth[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;
}
// 
// 13-9: 


function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);
}
//
// 13-10: 


let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};
function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}
//another version of the solution
function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}
//
// 13-11:


function toBinary(num) {
  if (num === 0){
    return '';
  }
  const binary = Math.floor(num%2);
  return  toBinary(Math.floor(num/2)) + binary;
}
// console.log(toBinary(56));
// 13-12: 