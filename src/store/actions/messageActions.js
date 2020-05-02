export const sendMessage = (message) => {
    return (dispatch, getState,{ getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('messages').add({
            ...message,
            senderFirstName:  profile.firstName,
            senderLastName: profile.lastName,
            senderId: authorId,
            sentAt: new Date()
        }).then (() => {
            dispatch({type: 'SEND_MESSAGE', message})

        }).catch((err) => {
            dispatch({ type: 'SEND_MESSAGE_ERROR', err });
        })
    }
};