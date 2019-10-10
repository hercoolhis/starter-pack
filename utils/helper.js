const addMultipleNumbers = (numberArray) => {
    let total = 0;

    if (numberArray.length === 0) {
        return false;
    }

    numberArray.forEach(number => {
        total += number;
    });

    return total;
}

const isAuthorizedPromise = (userList, user) => {

    const checkForUserAfterTimeout = () => { 
        
        return new Promise((res) => {
            const p = new Promise((resolve) => {
                setTimeout(() => { resolve(userList.indexOf(user) >= 0); }, 10);                
            })            
    
            p.then((value) => {
                res(value)
            })
        })
        
    } 
    
    return new Promise((resolve) => {
        resolve(checkForUserAfterTimeout());
    });
  }

module.exports = {
    addMultipleNumbers,
    isAuthorizedPromise
}