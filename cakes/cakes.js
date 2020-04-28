function cakes(recipe, available) {
  const output = {}

  for (let key in recipe) {
    output[key] = available[key] / recipe[key]
  }

  console.log("output ", output)

  for (let key in output) {
    console.log("output key ", output[key])
    if (isNaN(output[key]) || output[key] < 1) {
      return 0
    } else {
      //console.log("sf", Math.floor(Math.min(...Object.values(output))))
      return Math.floor(Math.min(...Object.values(output)))
    }
  }
}

//must return 2
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
// must return 0
//console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 })); 