/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    const result = _coinChange(coins,amount)
    
    return result === Infinity ? -1 : result
    
};
var _coinChange = function(coins,amount,memo={}){
    
    //base case 
    //minimum no. of coin to make zero cent , mean zero
    
    if(amount === 0) return 0
    if(amount<0) return Infinity
    if(amount in memo) return memo[amount]
    
    let minCoins = Infinity
    
    for (const coin of coins){
        const numCoins = _coinChange(coins,amount-coin,memo)
        minCoins = Math.min(numCoins,minCoins)
        
    }
    memo[amount] = minCoins + 1
    
    return minCoins + 1
}