// const employes = [
//   {id:121,Name:"Empl1",Designation:"IT",Start:1983, End:2015},
//   {id:122,Name:"Empl2",Designation:"Sell",Start:1985, End:2017},
//   {id:123,Name:"Empl3",Designation:"Design",Start:1988, End:2005},
//   {id:124,Name:"Empl4",Designation:"Tech",Start:1983, End:2005},
//   {id:125,Name:"Empl5",Designation:"IT",Start:1981, End:2015},
//   {id:126,Name:"Empl6",Designation:"Sell",Start:1983, End:2012},
//   {id:127,Name:"Empl7",Designation:"Design",Start:1993, End:2015},
//   {id:128,Name:"Empl8",Designation:"Tech",Start:1989, End:2005},
//   {id:129,Name:"Empl9",Designation:"IT",Start:1983, End:2005},

// ]
// for (let employe=0; employe < employes.length; employe++){
//   console.log(employes[employe])
// }
// employes.map((emp,index)=>{console.log(`The name of the ${emp.Name} having employement id is${emp.id} with id designation is ${emp.Designation} which index is ${index}`,Array)})

// const newEmp=employes.map((emp)=>emp.id)
// console.log(newEmp);

// const filterArray= employes.filter((emp)=> emp.End-emp.Start >=25)
// console.log(filterArray);
// const filterArray = employes.filter(emp=>emp.Designation==='IT' && emp.End-emp.Start >=25  ).map(emp=>emp.Name)
// console.log(filterArray);


// const mu = [45,13,56,14,58,64,23,14,02,42]
// const newMu= mu.sort((a,b) => b-a)
// console.log(newMu);



// const newvalue = [45,13,56,14,58,]
// const newReduce = newvalue.reduce(myvalue , )


// function time(){
//   let dt = new Date();
//   let ht = dt.getHours();
//   let mt = dt.getMinutes();
//   let st = dt.getSeconds();


//   document.writeln(ht,mt,st)

//   setInterval(time,1000)
// }


// ================================ 24-Nov-2022=======================================

// const mu = [45,13,56,14,58,64,23,14,02,42]
// mu.forEach(inc => {console.log(`the mu value incesre by ${inc + 5}`)})
// const mom = mu.filter(age => age>=18 && age<=50);
// console.log(mom)

// =======================reduce=========================================
// const smallArray = [45,13,56,14,58,64,23,14,02,42];

// const accumulator = smallArray.reduce((age,sandesh) => {return age/sandesh})
// console.log(accumulator)

// smallArray.some()







// ==============================================10/12/22======================================


// ==================================for reverse() method===============================

// const popArray = [45,13,56,14,58,]
// const newPop = popArray.reverse();
// console.log(newPop);

// ==================================for Split() method===============================

// const everyArray = "my name is sandesh sarade"
// const result = everyArray.split(' ') 
// //  const newresult = result.lastIndexOf('sandesh')
// console.log(result);
// ==================================for join() method===============================

// const muJoin = [45,13,56,14,58,64,23,14,02,42];
// const result = muJoin.join('&');
// console.log(result);
// ==================================for multidiamensional() method===============================
// const software = [['sandesh','27','old'],
//                   ['piyush','23','old'],
//                   ['naina','26','old']
//                 ]
// console.log(software[2][0]);
// ==================================for include() method===============================
// const muJoin = [45,13,56,14,58,64,23,14,02,42];
// const result = muJoin.includes(4);
// console.log(result);
// op true or false
// ==================================for unshift() method===============================
// const everyArray = ["my", "name", "is", "sandesh" ,"sarade"]
//  everyArray.shift("21")
// console.log(everyArray);
// 

// =================Higher Order Array Methods===============================================
// forEach methods 