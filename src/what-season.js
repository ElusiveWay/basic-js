module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (Object.getOwnPropertyNames(date).length != 0) throw new Error();
    const year = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter'];
    return year[date.getMonth()];
};
