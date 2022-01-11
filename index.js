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


// Implement a function called wrapAdjective:

// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be:

// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
// Run learn to verify you've gotten this set of tests passing.

function result() {
    return "a hard worker";
}

function wrapAdjective(emphatic = "*") {
    let words = result()
    let sentence = `You are ${emphatic}${words}${emphatic}!`;
    console.log (sentence);
};

wrapAdjective();
wrapAdjective('||');