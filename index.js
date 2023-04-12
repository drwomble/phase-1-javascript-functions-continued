
function saturdayFun(activity){
    if (activity === undefined){
    return "This Saturday, I want to roller-skate!";
}
    else {
        return `This Saturday, I want to ${activity}!`;
    }
}

function mondayWork(activity){
    if (activity === undefined){
        return "This Monday, I will go to the office.";
    }
    else {
        return `This Monday, I will ${activity}.`;
    }
}

// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
//   }
//   outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"

function wrapAdjective(flair = "*"){
    const encouragingPromptFunction = function (empathy = "special"){
        return `You are ${flair}${empathy}${flair}!`;
    }
    return encouragingPromptFunction;
}
