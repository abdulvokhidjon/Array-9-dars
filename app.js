// Array|9-dars

// N{1}

// function getNamesByGrade(students, grade) {
//   const gradeRanges = {
//     5: [85, 100],
//     4: [70, 85],
//     3: [60, 70],
//   };

//   const [minPercent, maxPercent] = gradeRanges[grade];

//   return students
//     .filter(
//       (student) =>
//         student.percent >= minPercent && student.percent <= maxPercent
//     )
//     .map((student) => student.name);
// }

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const namesWithGrade5 = getNamesByGrade(students, 5);
// console.log(namesWithGrade5);

// N{1} 2-usul

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   return students
//     .map((students) => {
//       if (students.percent > 85) {
//         return { name: students.name, percent: students.percent, grade: 5 };
//       } else if (students.percent <= 85 && students.percent > 70) {
//         return { name: students.name, percent: students.percent, grade: 4 };
//       } else {
//         return { name: students.name, percent: students.percent, grade: 3 };
//       }
//     })
//     .filter((student) => {
//       return student.grade == grade;
//     })
//     .map((student) => {
//       return student.name;
//     });
// }

// const result = getNamesByGrade(students, 5);
// console.log(result);

// N{2}

// function countWords(animals) {
//   return animals.reduce((wordCounts, animal) => {
//     wordCounts[animal] = (wordCounts[animal] || 0) + 1;
//     return wordCounts;
//   }, {}); // Start with an empty object
// }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const wordCounts = countWords(animals);
// console.log(wordCounts);

// N{3}

// const inputString = prompt("Marhamat qilib raqamlar kiriting vergul bilan ajratgan holda (,) ( M: 1,2,3):");

// const numbers = inputString.split(",").map(Number);

// const squaredNumbers = numbers.map((number) => number * number);

// console.log(squaredNumbers);

// N{4}

// function sumPositiveNumbers(numbers) {
//   return numbers
//     .filter((number) => number > 0)
//     .reduce((sum, number) => sum + number, 0);
// }

// const numbers = [1, -4, 12, 0, -3, 29, -150];
// const sumOfPositives = sumPositiveNumbers(numbers);
// console.log(sumOfPositives);

// N{5}

// function getInitials(name) {
//   return name
//     .split(" ")
//     .map((word) => word[0].toUpperCase())
//     .join("");
// }

// const name = "George Raymond Richard Martin";
// const initials = getInitials(name);
// console.log(initials);

// N{6}

// function getAgeDifference(people) {
//   people.sort((person1, person2) => person1.age - person2.age);

//   const youngestAge = people[0].age;
//   const oldestAge = people[people.length - 1].age;

//   return oldestAge - youngestAge;
// }

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const ageDifference = getAgeDifference(people);
// console.log(ageDifference);

// N{7}
// function juftVaToqAjratish(numbers) {
//   const juftSonlar = numbers.filter((number) => number % 2 === 0);
//   const toqSonlar = numbers.filter((number) => number % 2 !== 0);
//   return [ toqSonlar, juftSonlar];
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [toqlar, juftlar] = juftVaToqAjratish(numbers);

// console.log("Toq sonlar : ", toqlar);
// console.log("Juft sonlar :", juftlar);

// N{8}

// function removeDuplicates(arr) {
//   return arr.reduce((unique, current) => {
//     if (!unique.includes(current)) {
//       unique.push(current);
//     }
//     return unique;
//   }, []);
// }

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr);

// N{9}

// function sortProducts(products, sortBy, sortOrder = "asc") {
//   return products.sort((a, b) => {
//     let result;
//     if (typeof a[sortBy] === "string") {
//       result = a[sortBy].localeCompare(b[sortBy]);
//     } else {
//       result = a[sortBy] - b[sortBy];
//     }

//     return sortOrder === "asc" ? result : -result;
//   });
// }

// const products = [
//   { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0.1 },
//   { id: 2, name: "Product B", price: 20, rating: 3.8, discount: 0.2 },
// ];

// const sortedById = sortProducts(products, "id");
// const sortedByNameDesc = sortProducts(products, "name", "desc");
// const sortedByPriceAsc = sortProducts(products, "price");

// console.log(sortedById);
// console.log(sortedByNameDesc);
// console.log(sortedByPriceAsc);

// N{10}

// function findHighestRatedProduct(products) {
//   const sortedByRating = products.sort((a, b) => b.rating - a.rating);

//   return sortedByRating[0];
// }

// const products = [
//   { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0.1 },
//   { id: 2, name: "Product B", price: 20, rating: 3.8, discount: 0.2 },
// ];

// const highestRatedProduct = findHighestRatedProduct(products);
// console.log(highestRatedProduct);

// N{11}

// function findLowestPricedProduct(products) {
//   const sortedByPrice = products.sort((a, b) => a.price - b.price);

//   return sortedByPrice[0];
// }

// const products = [
//   { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0.1 },
//   { id: 2, name: "Product B", price: 20, rating: 3.8, discount: 0.2 },

// ];

// const lowestPricedProduct = findLowestPricedProduct(products);
// console.log(lowestPricedProduct);

// N{12}

// function calculateTotalProductPrice(products) {
//   return products.reduce((total, product) => total + product.price, 0);
// }

// const products = [
//   { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0.1 },
//   { id: 2, name: "Product B", price: 20, rating: 3.8, discount: 0.2 },
// ];

// const totalPrice = calculateTotalProductPrice(products);
// console.log(totalPrice);

// N{13}

// function getProductNames(products) {
//   return products.map((product) => product.name);
// }

// const products = [
//   { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0.1 },
//   { id: 2, name: "Product B", price: 20, rating: 3.8, discount: 0.2 },
// ];

// const productNames = getProductNames(products);
// console.log(productNames);

// N{14}

// function findProductNameById(products, idToFind) {
//   const foundProduct = products.find((product) => product.id === idToFind);

//   return foundProduct ? foundProduct.name : null;
// }

// const products = [
//   { id: 1, name: "Product A", price: 10, rating: 4.5, discount: 0.1 },
//   { id: 2, name: "Product B", price: 20, rating: 3.8, discount: 0.2 },
//   { id: 5, name: "Product E", price: 30, rating: 4.2, discount: 0.15 },
// ];

// const productName = findProductNameById(products, 5);
// console.log(productName);

// N{15}

// function removeProductById(products, idToRemove) {
//   return products.filter((product) => product.id !== idToRemove);
// }

// const products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];

// const updatedProducts = removeProductById(products, 4);
// console.log(updatedProducts);

// N{16}

// function isOnlyLetters(str) {
//   return str
//     .split("")
//     .every((char) => char.toLowerCase() >= "a" && char.toLowerCase() <= "z");
// }

// const testString1 = "Hello";
// const testString2 = "Hello123";
// const testString3 = "123";

// console.log(isOnlyLetters(testString1));
// console.log(isOnlyLetters(testString2));
// console.log(isOnlyLetters(testString3));

// N{17}

// function getTruthyFalsy(arr) {
//   return {
//     truthy: arr.filter(Boolean),
//     falsy: arr.filter(val => !Boolean(val))
//   };
// }

// const inputArray = [false, 1, 10, "", null, "abdulvohid", 1.13, 0];
// const result = getTruthyFalsy(inputArray);
// console.log(result);

// N{18}

// function getWordLengths(str) {
//   return str.split(" ").map((word) => word.length);
// }

// const inputString = "Men Abdulvohidman. Dasturchiman";
// const wordLengths = getWordLengths(inputString);
// console.log(wordLengths);

// N{19}

// function checkStringContainsSpace(str) {
//   return str.split(" ").length > 1;
// }

// const input = "Men Abdulvohidman. Dasturchiman";
// const result = checkStringContainsSpace(input);

// console.log(result);

// N{20}

// function objectToKeyValuePairsArray(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// const obj = {
//   a: 2,
//   b: 5,
//   c: 7,
// };

// const result = objectToKeyValuePairsArray(obj);

// console.log(result);

// N{21}

// function digitSum(n) {
//   if (n === 0) {
//     return 0;
//   }

//   return (n % 10) + digitSum(Math.floor(n / 10));
// }

// const number = 12345;
// const result = digitSum(number);

// console.log(result);

// N{22}

// const averagePercentage =
//   pupils.reduce((acc, pupil) => acc + pupil.percentage, 0) / pupils.length;

// const updatedPupils = pupils.map((pupil) => {
//   return {
//     ...pupil,
//     averageClassPercentage: averagePercentage,
//   };
// });

// return updatedPupils;

// N{23}

// const gradeMapping = (pupil) => {
//   const percentage = pupil.percentage;

//   if (percentage >= 90) {
//     return 5;
//   } else if (percentage >= 80) {
//     return 4;
//   } else if (percentage >= 70) {
//     return 3;
//   } else {
//     return 2;
//   }
// };

// const updatedPupils = pupils.map((pupil) => {
//   return {
//     ...pupil,
//     grade: gradeMapping(pupil),
//   };
// });

// return updatedPupils;

// N{24}

// const passOrFailMapping = (pupil) => {
//   return pupil.percentage >= 70;
// };

// const updatedPupils = pupils.map((pupil) => {
//   return {
//     ...pupil,
//     isPassed: passOrFailMapping(pupil),
//   };
// });

// return updatedPupils;

// N{25}

// const students = [
//   {
//       name: "Elbek",
//       percentage: 95,
//   },
//   {
//       name: "Zafar",
//       percentage: 78,
//   },
//   {
//       name: "Dear",
//       percentage: 83,
//   },
//   {
//       name: "Brave",
//       percentage: 88,
//   },
//   {
//       name: "Babur",
//       percentage: 66,
//   },
//   {
//       name: "Camron",
//       percentage: 75,
//   },
// ];

// let passedCount = 0;
// let failedCount = 0;

// students.forEach(student => {
//   if (student.percentage >= 70) {
//       passedCount++;
//   } else {
//       failedCount++;
//   }
// });

// console.log("Number of students who passed:", passedCount);
// console.log("Number of students who failed:", failedCount);
