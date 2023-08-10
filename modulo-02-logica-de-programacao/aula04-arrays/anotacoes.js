const arrayCreation1 = Array(6).fill(); // * [ undefined, undefined, undefined, undefined, undefined, undefined ]
const arrayCreation2 = Array.from({ length: 6 }); // * [ undefined, undefined, undefined, undefined, undefined, undefined ]
const arrCreation3 = Array.from({length: 10}, (_, i) => i + 1) // * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]