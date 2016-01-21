var eventstore = require('eventstore');

var query = { aggregateId: 'myAggId', aggregate: 'myAgg', context: 'myCont' };

var given = {
    query: query,
    skip: 2,
    limit: 32,
    callback: function () {
    }
};

var es = eventstore(
    {
        type: 'mongodb',
        host: 'localhost',
        port: 4000,
        timeout: 10000
    }
);

es.on('disconnect', function () {
    console.log('connection to storage is gone');
});
es.init(function (err) {
    console.log("event store initialized");
    if(err){
        console.log(err);
    }
});

var event1 = {aggregateId: 'aggregate1', commitId: 'commit1'};

es.store.addEvents([event1]);