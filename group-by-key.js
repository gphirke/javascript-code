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
