var amqp = require('amqplib/callback_api');


module.exports = {


   sendMessageToQ: function (q,stringMessage){
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
                ch.assertQueue(q, {durable: false});
                ch.sendToQueue(q, new Buffer(stringMessage));
                console.log(" [AMQP] Sent message to "+q);
                console.log(stringMessage);
                conn.close();
                console.log(" [AMQP] Closed connection "+q);
            });
            setTimeout(function() {
                conn.close();
                console.log(" [AMQP] Timed out...closing connection and exiting "+q);
            }, 10000);
        });
    },



    getMessageFromQ: function (q){
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
                ch.assertQueue(q, {durable: false});
                console.log(" [AMQP] Waiting for messages in "+q+". To exit press CTRL+C", q);
                ch.consume(q, function(msg) {
                    console.log(" [AMQP] Received %s", msg.content.toString());
                },{noAck: true});
                conn.close();
                console.log(" [AMQP] Closed connection "+q);
            });
            setTimeout(function() {
                conn.close();
                console.log(" [AMQP] Timed out...closing connection and exiting "+q);
            }, 10000);
        });
    }

};
