const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sa = parseFloat(sampleActivity);
  if ((typeof sampleActivity != "string") || isNaN(sa)  || ( sa <= 0) || (sa > MODERN_ACTIVITY)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sa) / (0.693 / HALF_LIFE_PERIOD));
};
