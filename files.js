const fs = require ('fs');

// fs.readFile('./docs/blog1.txt', (err, data) +>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');
//
// fs.writeFile('./docs/blog1.text', 'hello, world', ()=>{
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt', 'hello, world', ()=>{
//     console.log('file was written');
//
// });

//directories
if(fs.existsSync('./assets')){
fs.mkdir('./assets', (err) =>{
    if (err){
        console.log(err);
    }
    console.log('folder created');
    });
    } else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}
    if (fs.existsSync('./docs/deleteme.txt')){
        fs.unlink('./docs/deleteme.txt')
        if (err) {
            console.log(err)
        }
    console.log('file deleted this time');
    }