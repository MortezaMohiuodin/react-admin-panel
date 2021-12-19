module.exports = function sum(array){
    if(!Array.isArray(array)) return null
    if(array.length === 0) return 0
    return array.reduce((a,b)=>{
        return a + b
    },0)
}