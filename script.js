const JustFood = (početLudí) => {
    return `Catering od Just food pre ${početLudí} ľudí je za ${početLudí * 6} €. `
}
const YourMama = (početLudí) => {
    return `Catering od Your Mama pre ${početLudí} ľudí je za ${početLudí * 8} €. `
}

const FlavourHaven = (početLudí) => {
    return `Catering od Flavor Haven pre ${početLudí} ľudí je za ${početLudí * 10} €. `
}

console.log(JustFood(100))
console.log(YourMama(150))
console.log(FlavourHaven(170))

const nazov = "Mikuláš"
function createEvent(nazov, početLudí, cateringFunkcia)  {
    const cateringSprava = cateringFunkcia(početLudí)
    return `Udalosť ${nazov} ${cateringSprava}`
}

document.body.innerHTML += (createEvent(nazov, 100, YourMama))