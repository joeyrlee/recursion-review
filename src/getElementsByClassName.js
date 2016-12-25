// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var elements = [];
  var searchDom = function(node) {
    if (Array.prototype.includes.call(node.classList, className)) {
      elements.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      if (!!node.childNodes[i].classList) {
        searchDom(node.childNodes[i]);
      }
    }
  }

  searchDom(document.body);
  return elements;
};
