var facebookProfile = {
    name: 'Ezekiel Paris',
    friends: 1210,
    messages: ['happy birthday to me', 'Updated my facebook Profile', 'one year ago memory'],

    postMessage: (message) => {
        facebookProfile.messages.push(message);
    },

    deleteMessage: (index) => {
        facebookProfile.messages.splice(index, 1)
    },

    addFriend: () => {
        ++facebookProfile.friends;
    },

    removeFriend: () => {
        --facebookProfile.friends;
    }


};