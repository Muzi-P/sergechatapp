
const initState = {
    expanses: [
        { id: '1', description: 'Rent', value: 4500, percentage: -1 },
        { id: '2', description: 'Electricity', value: 600, percentage: -1 },
        { id: '3', description: 'Food', value: 5000, percentage: -1 },
        { id: '4', description: 'Tithes', value: 3000, percentage: -1 }
    ]
}
const expansesReducer = (state = initState, action) => {
    return state
}

export default expansesReducer