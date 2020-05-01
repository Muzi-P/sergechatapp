export const sendMessage = (message) => {
    return (dispatch, getState,{ getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(message);
        firestore.collection('messages').add({
            ...message,
            senderFirstName: "Muzi",
            senderLastName: "Gondwe",
            senderId: 1234,
            sentAt: new Date()
        }).then (() => {
            dispatch({type: 'SEND_MESSAGE', message})

        }).catch((err) => {
            dispatch({ type: 'SEND_MESSAGE_ERROR', err });
        })
    }
};