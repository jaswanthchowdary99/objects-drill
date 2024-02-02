function pairs(obj){

    const allKeyValuePairs = [];
    for(let key in obj){
        let value = obj[key];
        let newKeyValuePairs = [key,value];
        allKeyValuePairs.push(newKeyValuePairs);
    }
    return allKeyValuePairs;
}
module.exports = pairs;