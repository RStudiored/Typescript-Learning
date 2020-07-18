function startGame() {
    alert('testing');
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Startting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
