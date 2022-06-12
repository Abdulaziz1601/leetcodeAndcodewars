function points(games) {
    let sumPts = 0;
    games.forEach(points => {
        const [x, y] = points.split(":");
        x === y ? sumPts++ : x > y ? sumPts+=3:null;
    });
    return sumPts;
}

