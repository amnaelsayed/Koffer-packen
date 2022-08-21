// setTimeout(()=>{
  
//     console.log("hallo");
  

//  },1000);
let count = 0;
 const interval = setInterval(()=>{
  
  count +=1;
console.log(count);
if(count ===10){
  clearInterval(interval)
}

},1000);