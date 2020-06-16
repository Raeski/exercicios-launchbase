const user = {
    name: 'Gustavo',
    transactions: [],
    balance: 0
};
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}
function getHigherTransactionByType(credit, debit) {  
    for (let loop of user){
        sum = sum + loop
    }
    return console.log(loop);
}