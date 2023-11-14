
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...

  let falseAccounts = [];

  for (let i = 0; i < array.length; i++) {
    let totalWithdrawals = 0;
    let totalDeposits = 0;
    let saidBalance = array[i].balance;

     if(array[i].deposits) {
    for (let x = 0; x < array[i].deposits.length; x++) {
        totalDeposits += array[i].deposits[x]
      }    
    }

    if (array[i].withdrawals) {
    for (let y = 0; y < array[i].withdrawals.length; y++) {
        totalWithdrawals += array[i].withdrawals[y]
    }
  }

    if (saidBalance !== (totalDeposits - totalWithdrawals)) {
      falseAccounts.push(array[i])
    }
  }
  return falseAccounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
