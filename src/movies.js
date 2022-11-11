// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  const mappedDirectors = moviesArray.map(movie=> movie.director)
  return mappedDirectors; 
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filterSteven = moviesArray.filter(movie => movie.director==='Steven Spielberg');
  const filterDrama = filterSteven.filter(movie => movie.genre.includes('Drama'));
  return filterDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length===0) return 0;
  const scoreArray = moviesArray.filter(movie => movie.score>=0);
  const totalScore = scoreArray.reduce((ac,val)=> ac + val.score,0);
  let avg= totalScore/moviesArray.length;
  return (Math.round(avg*100)/100)
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filterDrama = moviesArray.filter(movie => movie.genre.includes('Drama'));
  const filterScore = filterDrama.map(movie=>movie.score)
  if (filterScore.length===0) return 0;
  const totalScore= filterScore.reduce((acc,value) => acc + value, 0)
  let avg= (totalScore/filterScore.length);
  return (Math.round(avg*100)/100); // se que podria haber hecho Number(....fixedTo(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
  const sortedMovies = moviesCopy.sort((movie1,movie2)=>{
   let result = movie1.year - movie2.year;
   if (result!==0) return result
  if(movie1.title<movie2.title){
    return -1
  } else if (movie1.title>movie2.title){
    return 1
  } else {
    return 0;
  }
  })
  return sortedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
  const sortedMovies = moviesCopy.sort((movie1,movie2)=>{
    if(movie1.title<movie2.title){
      return -1
    } else if (movie1.title>movie2.title){
      return 1
    } else {
      return 0;
    }
  })
  const titles = sortedMovies.map(movies=>movies.title)
  return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
