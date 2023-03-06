import { getWalkers, getCities, getWalkerCities } from "./database.js"
const daWalkerCities = getWalkerCities()
const cities = getCities()



// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignedObjects = []
    // Iterate the array value of walkerCities
    for (const daWalker of daWalkerCities) {
        if (walker.id === daWalker.walkerId) {
            assignedObjects.push(daWalker)
        }
    }
    // Check if the primary key of the walker equals the foreign key on the assignment

    // If it does, add the current object to the array of assignments

    // After the loop is done, return the assignments array
    return assignedObjects
}


// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (assignedObjects) => {
    // Define an empty string that will get appended with matching cities
    let cityObject = ""
    // Iterate the array of assignment objects
    for (const object of assignedObjects) {

        for (const city of cities) {
            if (city.id === object.cityId) {
                // Add the name of the matching city to the string of city names
                cityObject = `${cityObject} and ${city.name}`
            }
        }
    }   // For each assignment, iterate the cities array to find the match

    // Add the name of the matching city to the array of city names

    // After the loop is done, return the string
    return cityObject
}

// const assignedObject = filterWalkerCitiesByWalker(walker)
// const assignedCity = assignedCityNames(assignedObject)


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, walkerId] = itemClicked.id.split("--") //walkerId is now the primary Key

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const walker of walkers) {

                /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
                    if (walker.id === parseInt(walkerId)) {
                        const assignedObjects = filterWalkerCitiesByWalker(walker)
                        const cities = assignedCityNames(assignedObjects)
                
                        window.alert(`${walker.name} services ${cities}`)
                    }
                }
        }
    }
)



const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

