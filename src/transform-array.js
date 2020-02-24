module.exports = function transform(arr) {
    const commands = [
        "--discard-next",
        "--discard-prev",
        "--double-next",
        "--double-prev"
    ]
    const find = (a)=>{
        let total = [];
        for(let i=0; i < a.length; i++){
            switch(a[i]){
                case "--discard-next": 
                    if (commands.every(e=>e!==a[i+1])) i++;
                    break;
                case "--discard-prev":
                    if (commands.every(e=>e!==a[i-1])) total.pop();
                    break;
                case "--double-next":
                    if (commands.every(e=>e!==a[i+1]) && (a[i+1] !== undefined)) total.push(a[i+1]);
                    break;
                case "--double-prev":
                    if ((a[i-1]!==undefined) && (commands.every(e=>e!==a[i-1]))) total.push(a[i-1]) 
                    break;
                default: total.push(a[i])
            }
        }
        return total;
    }
    //------------------------------------------//
    if (!(arr instanceof Array)) throw new Error();
    return find(arr);
};
