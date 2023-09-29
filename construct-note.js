// add whatever parameters you deem necessary
//determines if the message can be made out of the chars
function constructNote(message, chars) {
    if(chars.length ===0) return false;
    //get the character counts of each parameter
    let msgCount = createCharCount(message);
    let chrCount = createCharCount(chars);

    //ensure that chrCount has at least as many of each character as msgCount
    for(let key in msgCount)
        if(msgCount[key] > chrCount[key]) return false;
    return true;
}
//helper function that creates an object with the char count of a string
function createCharCount(str){
    let chrCount = {};
    for(let chr of str){
        if(chrCount[chr])chrCount[chr]++;
        else chrCount[chr] = 1;
    }
    return chrCount;
}
