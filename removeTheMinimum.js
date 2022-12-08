function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const min = Math.min(...numbers);
  const removeIndex = numbers.findIndex((el) => el === min);
  return numbers.filter((_, i) => i !== removeIndex);
}