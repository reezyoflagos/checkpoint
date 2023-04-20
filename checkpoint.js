// Algorithm: Sum of Distinct Elements in Two Sets

// 1. Initialize sum = 0.
// 2. Create two arrays to represent Set 1 and Set 2.
// 3. Loop through each element in Set 1:
//    a. For each element, check if it is not present in Set 2.
//    b. If it is not present in Set 2, add it to sum.
// 4. Loop through each element in Set 2:
//    a. For each element, check if it is not present in Set 1.
//    b. If it is not present in Set 1, add it to sum.
// 5. Print the sum, which represents the sum of all distinct elements from the two sets.
// Set 1 and Set 2 as arrays
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Initialize sum
let sum = 0;

// Loop through each element in Set 1
for (let i = 0; i < set1.length; i++) {
  // Check if element is not present in Set 2
  if (!set2.includes(set1[i])) {
    // Add element to sum
    sum += set1[i];
  }
}

// Loop through each element in Set 2
for (let i = 0; i < set2.length; i++) {
  // Check if element is not present in Set 1
  if (!set1.includes(set2[i])) {
    // Add element to sum
    sum += set2[i];
  }
}

// Print the sum of all distinct elements from the two sets
console.log("Sum of distinct elements: " + sum);
