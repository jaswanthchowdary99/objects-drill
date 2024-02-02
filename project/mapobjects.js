function mapObject(obj, cb){
    const modifiedObject = {};
    for(let key in obj){
        const value = obj[key];
        let modifiedValue = cb(value);
        modifiedObject[key]=modifiedValue;
    }
    return modifiedObject;
}
function cb(value){
    let newValue = value + 5 ;
    return newValue;
}
module.exports = {mapObject,cb};