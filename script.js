/* 
    1. element
    2. event type (addEventListener) 
    3. event handler (what code needs to run when event is triggered)
*/
// When Cohort's Favourite TV Shows is clicked, print out the text of that element
const titleEl = document.querySelector("#title");
titleEl.addEventListener("click", function(event) {
    console.log(event.target.innerText);
})


document.addEventListener("mousemove", (event) => {
    // console.log(event);
})

document.addEventListener("scroll", (event) => {
    // console.log(event);
})

const emailInput = document.querySelector(".form__email-input");
emailInput.addEventListener("keyup", function(event) {
    console.log(event.target.value)
})

/*
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", function(event) {
    event.target.username.value

})
*/

setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);
console.log(3);
console.log(4);
console.log(5);
