// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function timesHundred (num) {
    return num * 100;
}

const resultTimes100 = numbers.map(timesHundred);

const resultsTime100 = numbers.map(function timesHundred(num) {
    return num * 100;
});

const resultsTimes100 = numbers.map(function(num) {
    return num * 100;
});

const resultsOfTimes100 = numbers.map((num) => {
    return num * 100;
});

const results = numbers.map(num => num * 100);

console.log(resultTimes100);
console.log(resultsTime100);
console.log(resultsTimes100);
console.log(resultsOfTimes100);
console.log(results);

