const maxProfit = function(prices) {
    
    let profit = 0
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) { //here we are saying to put the higher num before the lower num 
            profit += prices[i] - prices[i - 1]
            
        }
    }
    return profit
}

console.log(maxProfit([2, 7, 1, 5, 3, 6, 4])) // output = 12

//we want to get the max profit from this array which represents stock amount on a given day by 
//buying and selling the stock. e.g purchasing the stock on the lowest day and selling it on the highest day.
//so 2 is a lower stock day than 7 so profit is 7 - 2 and so on.