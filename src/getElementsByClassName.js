// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var searchNodes = function(node) {
    if (node.classList !== undefined && node.classList.contains(className)) {
      result.push(node);
    } 
    for (var i = 0; i < node.childNodes.length; i++) {
      searchNodes(node.childNodes[i]);
    }
  };
  searchNodes(document.body);
  return result;
};