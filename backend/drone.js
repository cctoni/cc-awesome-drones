const dgram = require('dgram');
const wait = require('waait');

const PORT = 8889;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);
drone.on('message', message => {
    console.log(`🛸 ${message}`);
});

function handleError(err) {
    if (err) {
        console.log(`ERROR ⛑️`);
        console.log(err);
    }
}

drone.send('command', 0, 7, PORT, HOST, handleError);
drone.send('battery?', 0, 8, PORT, HOST, handleError);