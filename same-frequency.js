// add whatever parameters you deem necessary
//determines if both integers have the same frequency of digits
function sameFrequency(num1, num2) {
    //creat charcount objects
    let num1ChrCount = createCharCount(String(num1));
    let num2ChrCount = createCharCount(String(num2));

    //deep compare the two
    for(let key in num1ChrCount){
        if(num1ChrCount[key] !== num2ChrCount[key]) return false;
    }
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