// add whatever parameters you deem necessary
//makes an object out of the given keys and values
function twoArrayObject(keys, values) {
    let constructedObj = {};
    for(i=0; i<keys.length; i++)
        constructedObj[keys[i]] = values[i] || null;
    return constructedObj;
}
