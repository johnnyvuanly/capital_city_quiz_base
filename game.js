// alert('Working!')

let url = 'https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-2/slim-2.json'

let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playAgainButton = document.querySelector('#play-again')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 

// TODO when the page loads, select an element at random from the countriesAndCodes array
let pageLoadCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]; // This selects a random element from the array, from stakeoverflow
// console.log(pageLoadCountry)
let pageLoadCountryName = pageLoadCountry.name // Here we just grab the name of the object that's returned 
// console.log(pageLoadCountryName)

// TODO display the country's name in the randomCountryElement 
randomCountryElement.innerHTML = pageLoadCountryName

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"
submitButton.addEventListener('click', function() {
    let userAnwser = userAnswerElement.value

    fetch(url)
        .then(response => {
            let JSONpromise = response.json()
            return JSONpromise
    }).then( (countryData) => {
        console.log(countryData)
    })
})

// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 
