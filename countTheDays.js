function countDays(d) {
	const now = new Date();
	if (d.getDate() === now.getDate() && d.getYear() === now.getYear() && d.getMonth() === now.getMonth()) {
		return "Today is the day!";
	} else if (now.getYear() <= d.getYear()) {
		if (d.getMonth() <= now.getMonth()) {
			if (d.getDate() < now.getDate()) {
				return "The day is in the past!";
			}
		}
	}
	return `${(d.getMonth() - now.getMonth()) * 31 + d.getDate() - now.getDate()} days`;
}

console.log(countDays(new Date("February 28, 2016")));