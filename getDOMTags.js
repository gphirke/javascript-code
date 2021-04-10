// Given a DOM tree, please return all the tag names it has.

// Your function should return a unique array of tags names in lowercase, order doesn't matter.


// reference https://bigfrontend.dev/problem/get-DOM-tags



function getTags(tree) {
  // your code here
  var result = [];
  var search = function(root) {
    if (result.indexOf(root.tagName.toLowerCase()) < 0) {
        result.push(root.tagName.toLowerCase());
    }
    if (root.children.length > 0) {
       
       for (let i=0; i<root.children.length; i++) {
         let tag = root.children[i].tagName.toLowerCase();
          
         if (result.indexOf(tag) < 0) {
            result.push(tag);
          }
         
         search(root.children[i]);
       }
     } 
  }
  search(tree);
  return result;

}

//solution 2

function getTags(tree) {
  const set = new Set()
  
  const stack = [tree]
  
  while (stack.length > 0) {
    const top = stack.pop()
    set.add(top.tagName.toLowerCase())
    stack.push(...top.children)
  }
  
  return [...set]
}




