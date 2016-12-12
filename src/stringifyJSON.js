// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //number

  if (obj === null) {
    return 'null';
  } else if (typeof obj === undefined) {
    return '' + undefined;
  } else if (typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return "\"" + obj + "\"";
  } else if (typeof obj === 'boolean') {
    return '' + obj;
  // } else if (typeof obj === 'function') {
  //   return '';
  } else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
    }
    return '[' + obj + ']';
  } else if (typeof obj === 'object') {
    // if (Object.keys(obj).length === 0) {
    //   return "{}";
    // }
    // for (var key in obj) {
    //   obj[key] = stringifyJSON(obj[key]);
    // }

    var result = '';
    for (var key in obj) {
      if (obj[key] === undefined || obj[key] === {} || obj[key] === [] || typeof obj[key] === 'function') {
        return '{' + result.slice(0, -1) + '}';
        //console.log("entered");
        //delete obj[key];
      }
        result += "\"" + key + "\"";
        result += ':';
        result += stringifyJSON(obj[key]);
        result += ',';
    }
    return '{' + result.slice(0, -1) + '}';
  }
};
