const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
	// Return an array of just the names of kitties who are orange e.g.
	// ['Tiger', 'Snickers']
	orangePetNames(cats) {

		var orangeCats = cats
			.filter(cat => {return cat.color === 'orange'})
			.map(catto => {return catto.name})
		return orangeCats;

	// Annotation:
	// Chaining methods, first we're going to use filter to return all orange cats
	// then we're going to use map to only keep the color key-value of the cat objects
  },

	sortByAge(cats) {
    // Sort the kitties by their age

		return cats.sort((cat1, cat2) => {return cat2.age - cat1.age});
    // Annotation:
    // There's a sorting method used. It compares 2 cats at a time
	// it compares tiger to felicia, then snickers to tiger,
	// then max to snickers, tiger and felicia to understand the oldest to youngest. 
  },

	growUp(cats) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
		cats.forEach(cat => {cat.age += 2})
		return cats;
	// Annotation:
	// forEach is a logical solution for this problem. We know that forEach 
	// doesnt return anything, but we can use it to modify existing objects.
	// We do this and then return the object at the end of the function. 
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */
	// Bare table
	const usersByClub = {};
	clubs.forEach(club => {
		club.members.forEach(member => {
			usersByClub[member] ? usersByClub[member].push(club.club) : usersByClub[member] = [club.club];
		});
	});
    // Annotation:
    // 1: Build bare table
	// 2: iterate through each club 
	// 3: iterate through each member of the club
	// 4: if the user exists in the club, add the club to the member list
	// 5: rinse and repeat
	return usersByClub;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    spe = []
    /* CODE GOES HERE */
    mods.forEach((mod) => {
		var studentsPerInstructor = mod.students/mod.instructors
		spe.push({ mod: mod.mod, studentsPerInstructor: studentsPerInstructor})
    })

    return spe;
    // Annotation:
    // 1- iterate through each mod
	// 2- divide students by instructors
	// 3- store output in new object array 
	// 4- return output
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
	const flavorStock = cakes.reduce((flavorStock, cake) =>{
		flavorStock.push({flavor: cake.cakeFlavor, inStock: cake.inStock});
		return flavorStock;
	}, [])
	return flavorStock;
    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */
	var inStockCakes = cakes.filter((cake) =>cake.inStock > 0);
	return inStockCakes;
    // Annotation:
    // 1 - We know filter iterates through each element of the array
	// 2 - this allows us keep only those with the specific condition: > 0
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
	var total = cakes.reduce((sum,cake) => sum + cake.inStock,0);
	return total;
    // Annotation:
    // Reduce is the best solution we've learned so far to sum up all elements in an array
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
	var toppings = [];
    /* CODE GOES HERE */
	cakes.forEach((cake) => {
		cake['toppings'].forEach(topping => {
			toppings.includes(topping) ? null : toppings.push(topping);
		});
	});
	return toppings;
    // Annotation:
    // We could use forEach or reduce for this. I decided to use forEach because
	// 		ive already used reduce more than the rest. 
	// It's looping through all cakes, then all toppings in each cake and adding
	//		the topping to the toppings array every time it doesnt already exist. 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */
	const groceries = cakes.reduce((groceries, cake) => {
		cake.toppings.forEach((topping) =>{
			groceries[topping]? groceries[topping]++: groceries[topping] = 1
		});
		return groceries
	}, {});
	return groceries;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */
    return classrooms.filter((room) => {
      return room.program === 'FE'
    })
    // Annotation:
    // Write your annotation here as a comment


  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */
    var FEStudents = 0;
    var BEStudents = 0;
    return classrooms.reduce((acc, room) => {
      room.program === 'FE' ? FEStudents += room.capacity : BEStudents += room.capacity
      acc['feCapacity'] = FEStudents;
      acc['beCapacity'] = BEStudents;
      return acc;
    }, {})
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
    return classrooms.sort((room1, room2) => {
      return room1.capacity - room2.capacity;
    })
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
	removeViolence(books) {
		// Your function should access the books data through a parameter (it is being passed as an argument in the test file)
		// return an array of all book titles that are not horror or true crime. Eg:

		//  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
		//   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
		//   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
		//   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
		//   'Catch-22', 'Treasure Island']


		/* CODE GOES HERE */
		return books.reduce((acc, book)=>{
			book.genre === 'Horror' || book.genre ==='True Crime'? null:acc.push(book.title)
			return acc;
		},[])
		// Annotation:
		// Write your annotation here as a comment

 	},
  	getNewBooks(books) {
		// return an array of objects containing all books that were
		// published in the 90's and 00's. Inlucde the title and the year Eg:

		// [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
		//  { title: 'Life of Pi', year: 2001 },
		//  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

		/* CODE GOES HERE */
		return books.reduce((acc,book)=>{
			book.published >= 1990 && book.published <= 2009 ? acc.push({'title':book.title, 'year':book.published}) : null;
			return acc;
		},[])
		// Annotation:
		// Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
	return weather.reduce((acc,point) =>{
		var avg = (point.temperature.high + point.temperature.low)/2
		acc.push(avg);
		return acc;
	},[])
    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
	return weather.reduce((acc,point) =>{
		var phrase;
		point.type === 'sunny' || point.type === 'mostly sunny' ? acc.push(`${point.location} is ${point.type}.`): null;
		return acc;
	},[])
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
	sorted = weather.sort((point1,point2) => {
		return point2.humidity - point1.humidity;
	})
	return weather[0];
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */
	var toVisit = [];
	var visited = [];
	nationalParks.forEach((park) => {
		park.visited === false ? toVisit.push(park.name) : visited.push(park.name);
	});
	return {'parksToVisit': toVisit, 'parksVisited': visited}
	
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    /* CODE GOES HERE */
	var states = nationalParks.reduce((acc,park) => {
		acc[park.location]? null : acc.push(park.location)
		return acc
	},[])
	var output = []
	states.forEach((state) => {
		var parkName;
		nationalParks.forEach((park) => {
			park.location === state ? parkName = park.name : null
		})
		var parkList = { [state]: parkName}
		output.push(parkList)
	});
	return output;
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
	var activities = nationalParks.reduce((acc,park) =>{
		acc.push(park.activities)
		return acc;
	},[])
	return [...new Set(activities.flat())];
    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */
	return breweries.reduce((acc,brewery) =>{
		acc+=brewery.beers.length
		return acc
	},0)
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */
	return breweries.reduce((acc,brewery) =>{
		acc.push({'name':brewery.name, 'beerCount': brewery.beers.length})
		return acc;
	},[])
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
	var beers = []
	breweries.forEach((brewery) =>{
		beers.push(brewery.beers);
	})
	beers = beers.flat();
	beers = beers.sort((beer1,beer2)=>{
		return beer2.abv - beer1.abv
	})
	output = beers[0];
	return output;
    // Annotation:
    // Write your annotation here as a comment
	// - get list of all beers
	// - order by abv
	// - return first in list
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */
	var instructorsList = instructors.reduce((acc,instructor) =>{
		var cohort = cohorts.find((cohort) =>{
			return cohort.module === instructor.module
		});
		acc.push({'name':instructor.name, 'studentCount':cohort.studentCount})
		return acc;
	},[]);
	return instructorsList;
    // Annotation:
    // Write your annotation here as a comment
	// - List out each instructor
	// ---- list out each cohort and compare the instructor's mod and the cohort mod, keep the match
	// ---- return object with the instructor and the cohort mod's student count
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */
	var cohortList = cohorts.reduce((acc,cohort) => {
		var instructorList = instructors.filter((instructor) => {
			return cohort.module === instructor.module
		})
		var instructorLength = instructorList.length;
		acc[`cohort${cohort.cohort}`] = cohort.studentCount/instructorLength
		return acc;
	},{})
	return cohortList;
    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */
	var instructorList = instructors.reduce((acc,instructor) => {
		var moduleList = cohorts.reduce((acc,cohort) => {
			var found = instructor.teaches.some(skill => cohort.curriculum.includes(skill))
			found? mod = acc.push(cohort.module):null;
			return acc;
		},[])
		acc[`${instructor.name}`] = moduleList
		return acc;
	},{})
	return instructorList;
    // Annotation:
    // Write your annotation here as a comment
	// -- Iterate through each instructor
	// ------ Iterate through each cohort 
	// ---------- Compare the two teaches and curriculum arrays to see if at least one exists in each
	// ---------- put the module of the arrays that have a match inside inside an array and return
	// ------ return new object of instructors and mod list returned inside inner reduce
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */
	var topicList = cohorts.reduce((acc,cohort) =>{
		cohort.curriculum.forEach((topic)=>{
			var instructorList = instructors.reduce((acc,instructor) => {
				instructor.teaches.includes(topic) ? acc.push(instructor.name): null;
				return acc;
			},[])
			acc[`${topic}`] = instructorList;
		})
		return acc;
	},{})
	return topicList;
    // Annotation:
    // Write your annotation here as a comment
	// -- Iterate through each cohort to get topic list
	// ---- Iterate through each topic
	// ---- Get instructor list of each topic (yes, there's dupes)
	// ---- Construct object of topics and place their instructor's list
	// ---- return the object
	// ---- GUCCI 😎
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
	var bossLoyalty = []
	var bossList = Object.keys(bosses)
	bossList.forEach((bossName) =>{
		var loyalty = sidekicks.reduce((acc,sidekick) =>{
			sidekick["boss"] === bosses[bossName].name? acc+= sidekick.loyaltyToBoss : null;
			return acc;
		},0);
		bossName = bossName[0].toUpperCase() + bossName.slice(1).toLowerCase()
		bossLoyalty.push({"bossName": bossName, "sidekickLoyalty": loyalty})
	});
	return bossLoyalty;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
