const orderedCount = (text) => {
  const counter = [[], [], [], [], [], [], [], []];
  text.split("").forEach((char, i) => (counter[i][1] === char ? (counter[i][1] += 1) : (counter[i][1] = 1)));
  return counter[0];
};

console.log(orderedCount("abdulaziz"));
