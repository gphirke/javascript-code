//Write a function in javascript that takes in an array of object 
//and group them by key passed

var obj = [{
           employeeId: "2001",
           designation: "Developer",
           experience: "4 years"
       },{
           employeeId: "2002",
           designation: "QA",
           experience: "3 years"
       },{
           employeeId: "2003",
           designation: "Developer",
           experience: "3 years"
       }];

//o/p should be like 
//
   {
       "Developer": [
           {
               employeeId: "2001",
               designation: "Developer",
               experience: "4 years"
           },
           {
               employeeId: "2003,
               designation: "Developer",
               experience: "3 years"
           }
       ],
       "QA": [
           {
               employeeId: "2002",
               designation: "QA",
               experience: "3 years"
           }
       ]
   }

//**********solution**********//

function groupBy(designation) {
   var tempObj = {};
   obj.map(function(ele){
       if(!tempObj.hasOwnProperty(ele[designation])){
           tempObj[ele[designation]] = [];
       }
       tempObj[ele.designation].push(ele);
   });
   return tempObj;
}

console.log(groupBy("designation"));


// Solution 2: 
//Without using map

var groupByResult = (function(groupBy) {
  var groupByResult = {};
  for (var ele of obj) {
    if (!groupByResult[ele[groupBy]]) {
      groupByResult[ele[groupBy]] = [];
    }
    // groupByResult[ele[groupBy]].push(copyObjectExcept(ele, groupBy));
     groupByResult[ele[groupBy]].push(ele);
  }
  return groupByResult;
}("designation"))


console.log(groupByResult);

