module.exports = function repeater(str, options) {
    let out = '';
    const params = {
            string : str + '',
            repeatTimes : options.repeatTimes || 1,
            separator: options.separator || '+',
            addition: (options.addition === undefined) ? '' : options.addition + '',
            additionRepeatTimes : options.additionRepeatTimes || 1,
            additionSeparator : options.additionSeparator || '|'
    }
    for(let i = params.repeatTimes; i>0 ; i--){
        out += params.string; 
        for(let a = params.additionRepeatTimes; a>0 ; a--){
            out += params.addition;
            if (a>1) out+=params.additionSeparator;
        } 
        if (i>1) out += params.separator;
    }
    return out;
};
  