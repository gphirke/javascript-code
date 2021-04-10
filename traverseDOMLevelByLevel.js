// Given a DOM tree, flatten it into an one dimensional array, in the order of layer by layer, like below.

// reference https://bigfrontend.dev/problem/Traverse-DOM-level-by-level

function flatten(tree) {
  var result = [];
  var temp = [tree];
   while(temp.length > 0) {
     var child = temp.shift();
     if (child) {
        result.push(child);
        for(const el of child.children) {
          temp.push(el);
        }
     }

   }
 
  return result;
}
