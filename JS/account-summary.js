var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: () => {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + ' and your interest rate is ' + savingsAccount.interestRatePercent + '%.'
    }
};

/* \n can be used to continue a statement in the new line

but "" must be used instead of '' while using the \n 

*/