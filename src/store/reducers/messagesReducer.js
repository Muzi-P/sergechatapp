
const initState = {
    messages: [
        {
            senderId: 'robby',
            text: 'Hey, how is it going?'
        },
        {
            senderId: 'erric',
            text: 'Great! How about you?'
        },
        {
            senderId: 'muzi',
            text: 'Good to hear! I am great as well'
        }
    ]
}
const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return Object.assign({}, state, {
                messages: [
                    ...state.messages,
                    {
                        text: action.message.message,
                    }
                ]
            })
        case 'SEND_MESSAGE_ERROR':
            console.log('send message error: ', action.err);
            return state
        default:
            return state
    }

}

export default messagesReducer