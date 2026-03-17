const uniqueArray = [1, 2, 3, 7, 9, 8, 9, 7, 4];
const uniqueset = new Set(uniqueArray);
const sortedUniqueArray = Array.from(uniqueset).sort((a, b) => a - b);

console.log("Elements:", sortedUniqueArray);
