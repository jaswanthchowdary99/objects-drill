const obj = require("../testObjectInfo");
const defaults = require("../project/default");

const defaultProps = { shift : 'general', designation : 'software developer', Married : true, }; 
const resultDefaults  = defaults(obj,defaultProps);
console.log(resultDefaults);