var amqp = require('amqplib/callback_api');

var q = 'idqueue';

module.exports = {

    closeChannelOnTimeOut: function(conn, timeOutInMilliseconds){
        setTimeout(function() {
            conn.close();
            console.log(" [AMQP] Timed out...closing connection and exiting");
            process.exit(0) ;
        }, timeOutInMilliseconds);

    },

    sendMessageToQ: function (stringMessage){
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
                ch.assertQueue(q, {durable: false});
                ch.sendToQueue(q, new Buffer(stringMessage));
                console.log(" [AMQP] Sent "+stringMessage);
            });
            this.closeChannelOnTimeOut(conn,500);
        });
    },



    getMessageFromQ: function (){
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
                ch.assertQueue(q, {durable: false});
                console.log(" [AMQP] Waiting for messages in %s. To exit press CTRL+C", q);
                ch.consume(q, function(msg) {
                    console.log(" [AMQP] Received %s", msg.content.toString());
                },{noAck: true});
            });
            this.closeChannelOnTimeOut(conn,1000);
        });
    }

};
