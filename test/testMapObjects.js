const testObject = require("../testObjectInfo");
const  {mapObject,cb} = require("../project/mapobjects");

const resultMapObject = mapObject(testObject,cb);
console.log(resultMapObject);