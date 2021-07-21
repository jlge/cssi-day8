const getMessages = () => {
    const messagesRef = firebase.database().ref('/messages');
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        return data;
        //it isnt returning :(
    });
}


const displayMessages = () => {
    // Look through the messages retrieved from the database to see if there is anyone one matching the input
    const passcodeAttempt = document.querySelector('#passcode').value;
    const messages = getMessages();
    console.log("messages: " + messages);
    for (message in messages) {
        console.log("HIHII");
        const messageData = messages[message];
        console.log("messagedata " + messageData);
        if (messageData.passcode === passcodeAttempt) {
            // Hide the passcode view  
            const passcodeInput = document.querySelector('#passcodeInput');
            passcodeInput.style.display = 'none';
            
            // Show the message
            const messageDiv = document.querySelector('#message');
            messageDiv.innerHTML = message;

        }
    }

}


