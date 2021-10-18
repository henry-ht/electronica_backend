const httpStatus = require('http-status');
// const mqtt = require('mqtt');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

// const clientMqtt = mqtt.connect('mqtt://mqtt.lyaelectronic.com');

// function mqttConexion() {

//   clientMqtt.on('connect', function () {
//     clientMqtt.subscribe('lyatest/[código_prueba].', function (err) {
//       if (!err) {
//         clientMqtt.publish('lyatest/[código_prueba].', 'Hello mqtt')
//       }
//     })
//   });

//   clientMqtt.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(message.toString());
//     clientMqtt.end();
//   });
// }

const sendMsj = catchAsync(async (req, res) => {

  // mqttConexion();
  const result = {
    hola: 123,
  };

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(result);
});

module.exports = {
  sendMsj,
};
