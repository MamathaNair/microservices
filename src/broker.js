var amqp = require('amqplib/callback_api');

module.exports = {

    sendMessageToQ: function (stringMessage){
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
                var q = 'idqueue';

                ch.assertQueue(q, {durable: false});
                ch.sendToQueue(q, new Buffer(stringMessage));
                console.log(" [x] Sent "+stringMessage);
            });
            setTimeout(function() { conn.close(); process.exit(0) }, 500);
        });
    },

    getMessageFromQ: function (){
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
                var q = 'idqueue';

                ch.assertQueue(q, {durable: false});
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
                ch.consume(q, function(msg) {
                    console.log(" [x] Received %s", msg.content.toString());
                }, {noAck: true});
            });
        });
    }

};
