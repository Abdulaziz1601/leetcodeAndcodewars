function isPangram(string) {
  const fc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  string = string.toLowerCase();
  for (const el of fc) if (!string.includes(el)) return false;
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
