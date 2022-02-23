const isPalindrome = (name) => {
    let len = Math.floor(name.length / 2);
    for (let i = 0; i < len; i++) {
      if (name.toLowerCase()[i] !== name[name.length - i - 1]) return false;
      else if (i === len - 1) return true
      else continue
    };
  };
  
  const findE = (name) => {
    return name.includes('e') ? `It’s Premium User! Welcome, ${name}!` : `It's user ${name}`
  };
  
  const slice5 = (name) => {
    return name.length > 5 ? `${name.substring(0, 5)}...` : name
  };
  
  const User = ({ name }) => {
    let classN;
    isPalindrome(name) ? classN = "name--highlighted" : classN = "name";
    return (
      <div className={classN}>{findE(slice5(name))}</div>
    )
};
  
export default User;