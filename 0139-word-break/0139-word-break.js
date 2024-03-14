/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
   
    let memo = {}
    
    const rec=(startIndex)=>{
        if(startIndex === s.length) return true;
        if(startIndex in memo ) return memo[startIndex]
    
        for(const word of wordDict){
            
            if(s.startsWith(word,startIndex)){
                if(rec(startIndex + word.length)){
                    
                    memo[startIndex] = true;
                    return true
                }
            }
        }
       
       
        memo[startIndex] = false;
        return false;
    }
  
    return rec(0)
    
};