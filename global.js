//global object
console.log(global);

setTimeout(() =>{
    console.log('in the timeout');
}, 3000);

const int = setInterval(() => {
    console.log("Hook'em Horns every one second");
}, 1000);

console.log(__dirname);
console.log(__filename);