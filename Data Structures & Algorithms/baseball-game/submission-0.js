class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for(const operation of operations){
            if(operation === '+'){
                if(stack.length !== 0){
                    stack.push((stack[stack.length - 1]) + (stack[stack.length - 2]))
                }
            } 
            else if(operation === 'C'){
                if(stack.length !== 0){
                    stack.pop()
                }
            }
            else if (operation === 'D'){
                if(stack.length !== 0){
                    stack.push(stack[stack.length - 1] * 2)
                }
            }
            else {
                stack.push(Number(operation))
            }
            
        }

        return stack.reduce((a,b) => a+b,0)
    }
}
