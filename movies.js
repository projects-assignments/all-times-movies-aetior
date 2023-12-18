/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
export function turnHoursToMinutes(array) {
    let newArray = array.map(function(element){
        let duration = element.duration;
        let arrayDuration = duration.split("h")
        if (arrayDuration.length == 1) {
            arrayDuration.unshift('0')
        }
        let hoursToMinutes = parseInt(arrayDuration[0])*60;
        let minutesNumber = parseInt(arrayDuration[1])
        let durationInMinutes;
        if (!isNaN(minutesNumber)) {
            durationInMinutes = hoursToMinutes + minutesNumber;
        } else {
            durationInMinutes = hoursToMinutes;
        }
        return {...element,duration:durationInMinutes}
    })
    
    return newArray
}
// Get the average of all rates with 2 decimals
export function ratesAverage(array){
    let total = array.reduce(function(acum,element){
        element.rate==""&&(element.rate=0);
        let elemenNumber = parseFloat(element.rate)
        acum += elemenNumber;
        return acum;
    },0)
    // console.log(total)
    
    let average = total/array.length
    return +average.toFixed(2)
}
// Get the average of Drama Movies
export function dramaMoviesRate(array){
   let moviedrama = array.filter((element)=>{
    let drama = element.genre.includes('Drama')
    return drama;
   })
   return  moviedrama.length>0? ratesAverage(moviedrama):undefined;
}

// Order by time duration, in growing order
// Order by time duration, in growing order
export function orderByDuration(array) {
    if (array.length <= 1) {
      return array;
    } else {
      let sortedArray = array.sort((a, b) => {
        if (a.duration === b.duration) {
            if (a.title>b.title){
                return 1
            }else{
                return-1
            }
        //   return a.title.localeCompare(b.title);
        }
        return a.duration - b.duration;
      });
  
      return sortedArray;
    }
  }
// How many movies did STEVEN SPIELBERG
export function howManyMovies(array){
    array.length===0&&array
    let newMovies = array.filter((element) => {
        // element.director = "Steven Spielberg";
        if (element.genre.includes("Drama") && element.director == "Steven Spielberg")
            return element
    })
    return `Steven Spielberg directed ${newMovies.length} drama movies!`
}

// Order by title and print the first 20 titles

 export const orderAlphabetically = (movies) => {
    return movies.slice(0, 20).map((movie) => movie.title).sort();
  };
  
  

// Best yearly rate average
// movies.js


  