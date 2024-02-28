/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   
    let obj = {}
    for(const str of strs){
        let sorted = str.split('').sort().join('')
        if(!obj[sorted]){
            obj[sorted] = [str]
        }
        else{
            obj[sorted].push(str)
        }
    }
    return Object.values(obj)
};