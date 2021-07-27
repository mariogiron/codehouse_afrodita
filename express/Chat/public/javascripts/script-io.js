const socket = io();

const inputName = document.getElementById('inputName');
const inputMessage = document.getElementById('inputMessage');
const btnEnviar = document.querySelector('#btnEnviar');
const ulMessages = document.getElementById('messages');
const h2 = document.getElementById('clientsCount');

btnEnviar.addEventListener('click', () => {
    socket.emit('chat_message', {
        name: inputName.value,
        message: inputMessage.value
    });
});

socket.on('chat_message', (data) => {
    console.log(data);
    toastr.info(`Nuevo mensaje de ${data.name}`);
    const li = document.createElement('li');
    li.innerHTML = `<strong>${data.name}</strong>: ${data.message}`;
    ulMessages.append(li);
});

socket.on('chat_users', (data) => {
    h2.innerText = `Num Usuarios: ${data}`;
});
