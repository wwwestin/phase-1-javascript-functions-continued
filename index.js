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


function result(emphatic = "*") {
    let words = wrapAdjective();
    let sentence = `You are ${emphatic}${words}${emphatic}!`;
    return sentence; 
}

function wrapAdjective() {
    return "a hard worker";
};

result();
result('||'); 
