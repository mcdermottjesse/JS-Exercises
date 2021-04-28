
const guitar = [
  {
    brand: 'Fender',
    rating: 4,
    year: 1968
  },
  {
    brand: 'Epiphone',
    rating: 3,
    year: 2009
  },
  {
    brand: 'Yamaha',
    rating: 2,
    year: 1999
  }
]

const metric = 'rating'

const guitarRating = (guitar, metric) => {
  
  let metricEval = 5; //change to 0 for highest rated brand

  let brand = "";

  for(let i = 0; i < guitar.length; i++) {

    if(metricEval > guitar[i][metric]) { //change to < for highest rated brand
      metricEval = guitar[i][metric]
      brand = guitar[i].brand
    }
  }
return brand

}

console.log(guitarRating(guitar, metric))