class Node{
    val = null;
    minNumber = null;
    constructor(val, minNumber){
        this.val = val;
        this.minNumber = minNumber
    }
}

class MinStack {
    minNumberTracker = null;
    constructor() {
        this.stack = [];
    }

    isEmpty(){
        return this.stack.length === 0;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const el = new Node(val, null);
        if(this.isEmpty()){
            el.minNumber = val;
        } else {
            const top = this.getMin();
            el.minNumber = top < val ? top : val;
        }
        this.stack.push(el);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.stack[this.stack.length - 1].minNumber;
    }
}
