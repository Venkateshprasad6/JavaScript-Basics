//JAVASCRIPT CLOSURE
const points = (pointsCalc) => {
  console.log("Outside Function Running");

  const totalPoints = pointsCalc;

  // ADD POINTS
  const addPoint = (points) => {
    return totalPoints + points;
  };

  //REMOVE POINTS
  const removePoints = (points) => {
    return totalPoints - points;
  };

  //TOTAL POINTS
  const getTotalPoints = () => {
    return totalPoints;
  };
  return {
    addPoint,
    removePoints,
    getTotalPoints,
  };
};
const table = points(100);
console.log(table.addPoint(10));
console.log(table.removePoints(40));
console.log(table.getTotalPoints());
