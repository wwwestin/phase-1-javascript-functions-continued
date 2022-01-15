// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(monday = "go to the office") {
   return `This Monday, I will ${monday}.`;
};

mondayWork();
mondayWork("work from home");


function wrapAdjective(emphatic = '*') {
    const result = function(message) {
        return `You are ${emphatic}${message}${emphatic}!`;
    };
    return result;
}

console.log(wrapAdjective()('a hard worker'));
console.log(wrapAdjective()("||", 'a dedicated programmer', ));


// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
//   } 

// console.log(outer("Hello")("student", "JavaScript"));