const name = "sherlock";
console.log(name);
const greet=(name)=>{
    console.log(`hello, ${name}`);
}
greet(`Bahubali`);
greet(`kattappa`);
globalThis.setTimeout(()=> {
    console.log(`In the timeout`);
    clearInterval(int)  
},5000)
const int = setInterval(() => {
 console.log("In the every iterval"); 
},2000);



