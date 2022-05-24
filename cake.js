function cakes(recipe, available) {
    for(let i = 0; i< Object.keys(recipe).length; i++) {
        console.log(Object.keys(recipe).includes(Object.keys(available)[i]));
    }

    console.log(recipe)
    console.log(available)

    return
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 