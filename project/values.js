function values(obj) {
     
    let allvalues = [];
    for(let key in obj){
        let value = obj[key];
        allvalues.push(value);
    }
    return allvalues;
}
module.exports = values;