function generateHashtag(str) {
	if (str.trim().length === 0) return false;
	let cleanStr = str.trim().split(" ").filter(el => el !== '');
	let hashStr = '#' + cleanStr.map(w => [w.split("")[0].toUpperCase(), ...w.split("").slice(1)].join("")).join("");
	return hashStr.length > 140 ? false : hashStr;
}