const chainMaker = {
  chains : [],
  error : false,
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    let converted;
    try{
      converted = value.toString();
    }
    catch(e){
      converted = value + '';
    }
    this.chains.push(converted);
    return this
  },
  removeLink(position) {
    let doIt = ()=>{
      this.chains = [];
      this.error = true;
      throw new Error();
    }
    if (typeof position != 'number') {
      return doIt();
    };
    if ((position != Math.floor(position)) || (position < 1) || (position > this.chains.length)) {
        return doIt();
    };
    this.chains.splice(position-1, 1);
    return this
  },
  reverseChain() {
    this.chains.reverse();
    return this
  },
  finishChain() {
    let locChains = this.chains.filter(el => el)
    this.chains = [];
    return locChains.reduce((t,c,i,a)=>{
      return (locChains.length-1 != i) ? (t + `( ${c} )~~`) : (t + `( ${c} )`);
    }, '')
  }
};

module.exports = chainMaker;
