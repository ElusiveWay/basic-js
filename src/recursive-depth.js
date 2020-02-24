module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0) {
        let maxDepth = depth;
        if ( arr instanceof Array ){
            depth++;
            if (depth > maxDepth) maxDepth = depth;
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++){
                    let loopDepth = this.calculateDepth(arr[i], depth);
                    if (loopDepth > maxDepth) maxDepth = loopDepth;
                }
            }
        }
        return maxDepth;
    }
};