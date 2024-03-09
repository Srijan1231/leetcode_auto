/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n===1){
        return 1;
    }else if( n === 2){
        return 2;
    }
    else{
        let firstStep = 1;
        let secondStep = 2
        
        for (let i=3; i<=n; i++){
            let currentStep = firstStep + secondStep
            firstStep = secondStep
            secondStep = currentStep
            console.log(secondStep)
        }
        return secondStep;
    }
    
};