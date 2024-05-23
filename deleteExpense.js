const deleteExpense = (id) => {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id == id) {
            expenses.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
};
