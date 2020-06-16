// Your code here
 let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])
  let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]
 let employeeRecords = createEmployeeRecords(twoRows)
 
function createEmployeeRecord(array){
    let obj = {};
     
  for(let i =0;i<array.length;i++){
       
    if(array[i] === "Gray"){
     obj.firstName = "Gray"
    }
     else if(array[i] === "Worm"){
     obj.familyName = "Worm"
    }
    else if(array[i] === "Security"){
     obj.title = "Security"
    }
      else if(array[i] === 1){
     obj.payPerHour = 1;
    }
  
  }
  obj.timeInEvents = [];
  obj.timeOutEvents = [];
   return obj;
   
}

function createEmployeeRecords(array){
   
   let employeeRecords = [...twoRows];
   
   employeeRecords.map((e)=>{
   e.map(item =>{
     console.log("hgkdcukhsjdv")
   })
      
   });
    return employeeRecords
}