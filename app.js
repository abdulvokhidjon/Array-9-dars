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


