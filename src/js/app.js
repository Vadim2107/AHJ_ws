import Widget from './Widget';

// const widget = new Widget('wss://chat-ws-heroku.herokuapp.com/ws');

// для локальной проверки
const widget = new Widget('ws://127.0.0.1:7070/ws');
// const widget = new Widget('http://localhost:7070/');

widget.createForm();
