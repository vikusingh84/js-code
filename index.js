var family=[
  {"name":"jack","age":25},
  {"name":"vikas","age":30},
  {"name":"meera","age":35},
  {"name":"Divyansh","age":15}]
  
  //find age greater than 18
  result=family.filter(({age})=>age>18)
  console.log(result);
  
  var emp=[
    {"name":"jack","age":25,"sal":15000},
    {"name":"vikas","age":30,"sal":20000},
    {"name":"meera","age":35,"sal":30000},
    {"name":"Divyansh","age":15,"sal":40000}]
  
    // Sort by name
    function compare(a,b){
      if(a.name<b.name){
        return -1
      }
      if(a.name>b.name){
        return 1
      }
      return 0
    }
  console.log(emp.sort(compare))
  
  // find sal greater than 15000
  
  console.log(emp.filter(({sal})=>sal>15000))
  
  // find higest sal
  
  let highSal=emp.reduce((prev,current)=>prev.sal>current.sal?prev:current)
  console.log(highSal)
  
  
  // Write a function filter ([1,2,4,6,3,5], val=>val<4)
  
  function filterNumaber(arr,condation){
  
    let result=arr.filter(condation)
    return result;
  
  }
  output=filterNumaber([1,2,4,6,3,5], val=>val<4)
  console.log(output)
  
  //unique array
  
  let arr=[1,1,2,4,4,6,3,3,5]
  
  uniqueArr=new Set(arr);
  backtoarray=[...uniqueArr]
  console.log(backtoarray)
  
  //Reverse Array
  let arrRev=[1,2,4,6,3,5]
  
  for(s=0,e=arrRev.length-1;s<e;s++,e--){
    let temp=arrRev[s];
    arrRev[s]=arrRev[e]
    arrRev[e]=temp
  }
  console.log(arrRev)
  
  // Sort array
  
  for(i=0;i<arrRev.length;i++){
    for(j=i+1;j<arrRev.length;j++)
    if(arrRev[i]>arrRev[j]){
      let temp=arrRev[i];
      arrRev[i]=arrRev[j]
      arrRev[j]=temp 
    }
  }
  
  console.log(arrRev)
  
  var obj=[{ "id": "a", "children": [{ "id": "a_1" }] }, { "id": "b", "children": [{ "id": "b_1", "children": [{ "id": "b_1_1" }] }] }, { "id": "c", } ];
  
  function findAllByKey(obj, keyToFind) {
    return Object.entries(obj)
      .reduce((acc, [key, value]) => (key === keyToFind)
        ? acc.concat(value)
        : (typeof value === 'object' && value)
        ? acc.concat(findAllByKey(value, keyToFind))
        : acc
      , []) || [];
  }
  
  const ids = findAllByKey(obj, 'id');
  
  console.log(ids)