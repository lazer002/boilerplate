const mon = require('mongoose')
const mongo = mon.connect('')
.then((res)=>{
    console.log('connected');
})
.catch((err)=>{
console.log(err);
})

module.exports = mongo
