// Your code goes here


const destination = document.querySelector(".destination")
const mountainExcursion = document.querySelector(".mountainExcursion")
const islandGetAway = document.querySelector(".islandGetAway")
const h4 = document.querySelector("h4")
const footer = document.querySelector(".footer")


destination.addEventListener("click", e => {
    console.log(e)
})

dispatchEvent.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hi")
    })
})

// mountainExcursion.addEventListener("click", e => {
//     console.log(e)
// })

// mountainExcursion.addEventListener('mouseover' , function(event) {
//     mountainExcursion.style.backgroundColor = ('blue');
//     mountainExcursion.style.borderRadius = ('10%');
// });


islandGetAway.addEventListener ('mouseover', function(event) {
    islandGetAway.style.backgroundColor = ('red');
    islandGetAway.style.borderRadius = ('10%');
});