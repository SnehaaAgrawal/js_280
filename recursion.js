function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

........................................

function gcd(a, b) {
  if (b === 0)
    return a;
  return gcd(b, a % b);
}

console.log(gcd(48, 18)); // Output: 6

................................

function range(x, y) {
  let result = [];
  for (let i = x + 1; i < y; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(2, 9));
Output: [3, 4, 5, 6, 7, 8]

....................................


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
Output: 21

.........................................

function power(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(8, 2));
Output: 64


...............................................

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let seq = fibonacci(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}

console.log(fibonacci(10)); 
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


........................................


function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7));  // false

.............................................


function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  return binarySearch(arr, target, mid + 1, end);
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 5)); // Output: 5


..................................................

function mergeSort(arr) {
  // Base case: array with 1 or 0 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  Split the array into two halves
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  // Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from left and right and add the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left or right (if any)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([34, 7, 23, 32, 5, 62]));
Output: [5, 7, 23, 32, 34, 62]
