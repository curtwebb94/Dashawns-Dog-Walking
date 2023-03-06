import { Walkers } from "./Walkers.js"
import { CityList } from "./CityList.js"
import { Assignments } from "./Assignments.js"
import { RegisteredPets } from "./RegisteredPets.js"

const mainContainer = document.querySelector("#container")

const newWalk = Walkers()
const newCityList = CityList()
const newAssignments = Assignments()
const newRegisteredPets = RegisteredPets()

const applicationHTML = `
<h1>DeShawn's Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${newCityList}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${newWalk}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${newRegisteredPets}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${newAssignments}
</article>
`

mainContainer.innerHTML = applicationHTML

