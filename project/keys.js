function keys(obj) {

    const allKey = [];
    for(let key in obj){
        allKey.push(key);
    }
    return (JSON.stringify(allKey));
}
module.exports = keys;