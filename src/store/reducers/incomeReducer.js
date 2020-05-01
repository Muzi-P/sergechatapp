const initState = {
    income: [
        { id: '1', description: 'Salary', value: 30000, percentage: -1 },
        { id: '2', description: 'Gift', value: 450, percentage: -1 },
        { id: '3', description: 'Tax Return', value: 1500, percentage: -1 },
        { id: '4', description: 'Debt', value: 740, percentage: -1 }
    ]
}
const incomeReducer = (state = initState, action) => {
    return state
}

export default incomeReducer