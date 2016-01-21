mkdir logs
mkdir db

echo "running mongodb"
mongodb-server/bin/mongod --dbpath db --port 4000 --logpath logs/mongo

echo "running rabbit-mq"
./rabbitmq-server/sbin/rabbitmq-server

echo "started rabbit-mq"