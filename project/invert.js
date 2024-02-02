function invert(obj){
    const newObject = {};
    for(let key in obj){
        let value = obj[key];
        value = JSON.stringify(value);
        newObject[value] = key ;
      

    }
    return newObject;
}
module.exports = invert;