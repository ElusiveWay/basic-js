module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  const dreamTeamName = members.reduce((t,c,i,a) => {
    if (typeof a[i] != 'string') return t;
    let locChar = a[i].replace(/[ ]+/g,'').toUpperCase()[0];
    if (!(isNaN(locChar*1))) return t;
    return t+locChar; 
  },'').split('').sort().join('');
  return (dreamTeamName.length == 0) ? false : dreamTeamName;
};