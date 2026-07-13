class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_day = 0
        sell_day = buy_day + 1
        list_size = len(prices)
        profit = 0
        if(list_size == 0 or list_size == 1):
            return profit

        while(buy_day < (len(prices)-1)):
            while(sell_day < len(prices)):
                calc_profit = prices[sell_day] - prices[buy_day] 
                if(profit < calc_profit):
                    profit = calc_profit
                sell_day+=1
            buy_day+=1
            sell_day = buy_day + 1

        return profit