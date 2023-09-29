// add whatever parameters you deem necessary
//checks if the substring exists as a set of characters in the same order in superstring
function isSubsequence(sub, str) {
    //loop through the superstring comparing consecutive characters of the substring
    let subChr = 0;
    for(let strChr of str){
        if(strChr === sub[subChr]) subChr++;
        if(subChr === sub.length) return true;
    }
    return false;
}
