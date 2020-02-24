module.exports = function countCats(arr) {
  let locArr = [];
  arr.forEach(el => el.forEach(elem => locArr.push(elem)));
  return locArr.reduce((t,c) =>(c=='^^')? t+1 : t,0);
};
